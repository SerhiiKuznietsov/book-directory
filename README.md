
# Book Directory

## Project Description

**Book Directory** is a backend application for managing a catalog of books. It allows users to create, update, delete, and view book records. This project is built using Node.js and Fastify, with integrated Swagger API documentation.

## Main Technologies

- [**Node.js**](https://nodejs.org/) - runtime environment
- [**Fastify**](https://www.fastify.io/) - web framework for building REST APIs
- [**AJV**](https://ajv.js.org/) - JSON schema validation
- [**Swagger**](https://swagger.io/) - API documentation
- [**Docker**](https://www.docker.com/) - containerization
- [**PostgreSQL**](https://www.postgresql.org/) - database
- [**Redis**](https://redis.io/) - caching service

## Setup Instructions

### Configuration

1. Copy the provided `.env.example` file to `.env`:
   ```bash
   cp .env.example .env
   ```
2. Fill in the necessary environment variables (for database connections, Redis, etc.) in the `.env` file. Both Docker and native setups will use this configuration.

### Docker Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/SerhiiKuznietsov/book-directory.git
   cd book-directory
   ```
2. Ensure the `.env` file is configured correctly (see the configuration step above).
3. Start the Docker container:
   ```bash
   docker-compose up --build
   ```
   Docker will use environment variables from the `.env` file for container configuration.
4. The app will be available at: `http://localhost:3000`.

### Native Setup

1. Ensure you have [Node.js](https://nodejs.org/), [PostgreSQL](https://www.postgresql.org/) and [Redis](https://redis.io/) installed.
2. Clone the repository:
   ```bash
   git clone https://github.com/SerhiiKuznietsov/book-directory.git
   cd book-directory
   ```
3. Ensure the `.env` file is configured correctly (see the configuration step above).
4. Install dependencies:
   ```bash
   npm install
   ```
5. Start PostgreSQL and Redis services.
6. Run migrations:
   ```bash
   npm run migrate:up
   ```
7. Start the application:
   ```bash
   npm start
   ```
8. The app will be available at: `http://localhost:3000`.

### Setup with NVM

1. Install [NVM](https://github.com/nvm-sh/nvm) if you don't have it installed.
2. Ensure you have [PostgreSQL](https://www.postgresql.org/) and [Redis](https://redis.io/) installed.
3. Install the required Node.js version:
   ```bash
   nvm install
   ```
   This will automatically install the version specified in the `.nvmrc` file.
4. Use the installed version:
   ```bash
   nvm use
   ```
5. Ensure the `.env` file is configured correctly (see the configuration step above).

6. Proceed with installing dependencies:
   ```bash
   npm install
   ```

7. The app will be available at: `http://localhost:3000`.

## Migration & Seeding Commands

- Run migrations:
  ```bash
  npm run migrate:up
  ```
- Undo migrations:
  ```bash
  npm run migrate:undo
  ```
- Create migration:
  ```bash
  npx sequelize-cli migration:generate --name [your_migration_name]
  ```

- Run seeds:
  ```bash
  npm run seed:up
  ```
- Undo seeds:
  ```bash
  npm run seed:undo
  ```
- Create seed:
  ```bash
  npx sequelize-cli seed:generate --name [your_seed_name]
  ```

## Usage

API documentation is available at:
```
http://localhost:3000/docs
```
