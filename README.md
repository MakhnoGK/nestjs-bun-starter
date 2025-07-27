# NestJS + Bun Starter Template

A modern, high-performance NestJS starter template powered by [Bun](https://bun.sh/) runtime with PostgreSQL database integration, TypeORM, and Docker support.

## 🚀 Features

- **⚡ Bun Runtime**: Ultra-fast JavaScript runtime with built-in bundler, test runner, and package manager
- **🏗️ NestJS Framework**: Enterprise-grade Node.js framework for building scalable server-side applications
- **🗄️ PostgreSQL + TypeORM**: Robust database setup with TypeORM for object-relational mapping
- **🐳 Docker Compose**: Ready-to-use Docker configuration for development
- **📝 ESLint + Prettier**: Code formatting and linting with modern configurations
- **🧪 Testing Setup**: Pre-configured testing environment with Bun's built-in test runner
- **⚙️ Environment Configuration**: Environment-based configuration with validation
- **🏃‍♂️ Hot Reload**: Fast development with watch mode

## 📋 Prerequisites

- [Bun](https://bun.sh/) (latest version)
- [Docker](https://www.docker.com/) & Docker Compose (for database)
- [Git](https://git-scm.com/)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd nest-change-runtime
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit the `.env` file with your configuration:
   ```env
   NODE_ENV=development
   POSTGRES_HOSTNAME=localhost
   POSTGRES_PORT=5432
   POSTGRES_USERNAME=your_username
   POSTGRES_PASSWORD=your_password
   POSTGRES_DATABASE=your_database
   ```

4. **Start the database**
   ```bash
   docker-compose up -d
   ```

## 🏃 Running the Application

### Development Mode
```bash
# Start with watch mode (hot reload)
bun run start:watch

# Or start normally
bun run start
```

The application will be available at `http://localhost:3000`

### Production Mode
```bash
bun run start
```

## 🧪 Testing

```bash
# Run tests
bun run test

# Run tests in watch mode
bun run test:watch
```

## 🔧 Code Quality

```bash
# Run ESLint
bun run lint

# Fix ESLint issues automatically
bun run lint:fix
```

## 📁 Project Structure

```
src/
├── main.ts                 # Application entry point
├── enums/
│   └── environment.enum.ts # Environment constants
└── modules/
    ├── app/                # Main application module
    │   ├── app.module.ts
    │   ├── controllers/
    │   │   └── app.controller.ts
    │   └── services/
    │       └── app.service.ts
    └── database/           # Database configuration
        └── database.module.ts
```

## 🐳 Docker Support

The project includes Docker Compose configuration for PostgreSQL:

```bash
# Start database
docker-compose up -d

# Stop database
docker-compose down

# View logs
docker-compose logs -f
```

## 🔧 Configuration

The application uses environment-based configuration with the following variables:

| Variable | Description | Default |
|----------|-------------|---------|
| `NODE_ENV` | Application environment | `development` |
| `POSTGRES_HOSTNAME` | PostgreSQL host | `localhost` |
| `POSTGRES_PORT` | PostgreSQL port | `5432` |
| `POSTGRES_USERNAME` | Database username | - |
| `POSTGRES_PASSWORD` | Database password | - |
| `POSTGRES_DATABASE` | Database name | - |

## 🚀 Performance Benefits

This template leverages Bun's performance advantages:

- **Faster startup**: Bun starts applications ~4x faster than Node.js
- **Better memory usage**: Lower memory footprint
- **Built-in tools**: No need for separate bundler, test runner, or package manager
- **TypeScript support**: Native TypeScript execution without compilation

## 📚 Tech Stack

- **Runtime**: [Bun](https://bun.sh/)
- **Framework**: [NestJS](https://nestjs.com/)
- **Database**: [PostgreSQL](https://www.postgresql.org/)
- **ORM**: [TypeORM](https://typeorm.io/)
- **Validation**: [@nestjs/config](https://docs.nestjs.com/techniques/configuration)
- **Testing**: Bun Test Runner
- **Linting**: ESLint + Prettier
- **Containerization**: Docker & Docker Compose

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Scripts

| Script | Description |
|--------|-------------|
| `bun run start` | Start the application |
| `bun run start:watch` | Start with hot reload |
| `bun run test` | Run tests |
| `bun run test:watch` | Run tests in watch mode |
| `bun run lint` | Run ESLint |
| `bun run lint:fix` | Fix ESLint issues |

## 🐛 Troubleshooting

### Common Issues

1. **Database connection errors**
   - Ensure PostgreSQL is running via Docker Compose
   - Check environment variables in `.env` file
   - Verify database credentials

2. **Port already in use**
   - Kill processes using port 3000: `lsof -ti:3000 | xargs kill -9`
   - Or change the port in `src/main.ts`

3. **Bun installation issues**
   - Update Bun: `bun upgrade`
   - Clear cache: `bun pm cache rm`

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [NestJS Team](https://nestjs.com/) for the amazing framework
- [Bun Team](https://bun.sh/) for the revolutionary JavaScript runtime
- [TypeORM Team](https://typeorm.io/) for the excellent ORM

---

⭐ If you found this template helpful, please give it a star!