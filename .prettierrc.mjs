/**
 * Prettier configuration file.
 * @type {import('prettier').Config & import('@trivago/prettier-plugin-sort-imports').PrettierConfig}
 */
const config = {
    parser: 'typescript',
    plugins: ['@trivago/prettier-plugin-sort-imports'],

    tabWidth: 4,
    printWidth: 120,
    singleQuote: true,
    semi: true,
    trailingComma: 'es5',
    arrowParens: 'always',
    bracketSpacing: true,

    importOrder: ['^bun:', '<THIRD_PARTY_MODULES>', '^~/(.*)$', '^[../]', '^[./]'],
    importOrderSeparation: false,
    importOrderSortSpecifiers: false,
    importOrderParserPlugins: ['typescript', 'decorators-legacy'],
};

export default config;
