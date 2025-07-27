import path from 'path';

type CommandType = 'generate' | 'run' | 'revert';

abstract class AbstractCommand {
    protected readonly dataSourcePath = path.resolve(process.cwd(), 'src', 'data-source.ts');
    protected readonly migrationsPath = path.resolve(process.cwd(), 'src', 'migrations');

    abstract execute(): Promise<void>;
}

class GenerateCommand extends AbstractCommand {
    constructor(public readonly migrationName: string) {
        super();
    }

    async execute(): Promise<void> {
        await Bun.$`bunx --bun typeorm migration:generate ${path.resolve(this.migrationsPath, this.migrationName)} -d ${this.dataSourcePath}`;
        await Bun.$`bun lint:fix`;
    }
}

class RunCommand extends AbstractCommand {
    async execute(): Promise<void> {
        await Bun.$`bunx --bun typeorm migration:run -d ${this.dataSourcePath}`;
    }
}

class RevertCommand extends AbstractCommand {
    async execute(): Promise<void> {
        await Bun.$`bunx --bun typeorm migration:revert -d ${this.dataSourcePath}`;
    }
}

const COMMANDS: Record<CommandType, new (...args: string[]) => AbstractCommand> = {
    generate: GenerateCommand,
    run: RunCommand,
    revert: RevertCommand,
};

async function main(): Promise<void> {
    const commandStr = Bun.argv[2] as CommandType;
    const commandParamStr = Bun.argv[3];

    if (!commandStr) {
        console.error(`No command specified. Available options: generate, run, revert`);
        process.exit(1);
    }

    if (commandStr === 'generate' && !commandParamStr) {
        console.error(`Specify the name of a migration`);
        process.exit(1);
    }

    const command = new COMMANDS[commandStr](commandParamStr);

    if (!command) {
        console.error('Unknown command. Available options: generate, run, revert.');
        process.exit(1);
    }

    try {
        await command.execute();
        process.exit(0);
    } catch (error) {
        console.error(`Error executing command ${commandStr}: ${error}`);
        process.exit(1);
    }
}

void main();
