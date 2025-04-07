# Book Directory

## Project Description

**Book Directory** is a backend application for managing a catalog of books. It allows users to create, update, delete, and view book records. This project is built using Node.js and Fastify, with integrated Swagger API documentation.

## 💻 Main Technologies

![Node.js](https://img.shields.io/badge/Node.js-22.14.0-339933?logo=node.js&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-10.9.2-CB3837?logo=npm&logoColor=white)
![Fastify](https://img.shields.io/badge/Fastify-Web_Framework-000000?logo=fastify)
![Pino](https://img.shields.io/badge/Pino-Logger-000000?logo=pino&logoColor=white)
![AJV](https://img.shields.io/badge/AJV-JSON_Validation-006400?logo=json)
![Jest](https://img.shields.io/badge/Jest-Test_Library-C21325?logo=jest&logoColor=white)
![Swagger](https://img.shields.io/badge/Swagger-API_Documentation-85EA2D?logo=swagger&logoColor=black)
![Docker](https://img.shields.io/badge/Docker-Containerization-2496ED?logo=docker&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15.5-336791?logo=postgresql&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-7.2.4-DC382D?logo=redis&logoColor=white)
![Kafka](https://img.shields.io/badge/Kafka-Streaming-231F20?logo=apachekafka&logoColor=white)

- [**Node.js**](https://nodejs.org/) - runtime environment
- [**Fastify**](https://www.fastify.io/) - web framework for building REST APIs
- [**Pino**](https://github.com/pinojs/pino) - logger
- [**AJV**](https://ajv.js.org/) - JSON schema validation
- [**Jest**](https://jestjs.io/) - test library
- [**Swagger**](https://swagger.io/) - API documentation
- [**Docker**](https://www.docker.com/) - containerization
- [**PostgreSQL**](https://www.postgresql.org/) - database
- [**Redis**](https://redis.io/) - caching service

## Setup Instructions

### Cloning the Repository

To get started, you need to clone the repository from GitHub. Run the following command:

```bash
git clone https://github.com/SerhiiKuznietsov/book-directory.git
cd book-directory
```

### Configuration

1. Copy the provided `.env.example` file to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Fill in the necessary environment variables (for database connections, Redis, etc.) in the `.env` file. Both Docker and native setups will use this configuration.

### Docker Setup

1. Ensure the `.env` file is configured correctly (see the configuration step above).

2. Start the Docker containers:
   ```bash
   docker-compose up --build -d
   ```
   Docker will use environment variables from the `.env` file for container configuration.

3. The app will be available at: `http://localhost:8080`.

### Native Setup

1. Ensure you have [Node.js](https://nodejs.org/), [PostgreSQL](https://www.postgresql.org/) and [Redis](https://redis.io/) installed.

2. Ensure the `.env` file is configured correctly (see the configuration step above).

3. Install dependencies:
   ```bash
   npm ci
   ```

4. Start PostgreSQL and Redis services.

5. Run migrations:
   ```bash
   npm run migrate:up
   ```

6. Run seeds:
   ```bash
   npm run seed:up
   ```

7. Start the application:
   ```bash
   npm start
   ```

8. The app will be available at: `http://localhost:8080`.

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

6. Install dependencies:
   ```bash
   npm ci
   ```

7. Start PostgreSQL and Redis services.

8. Run migrations:
   ```bash
   npm run migrate:up
   ```

9. Run seeds:
   ```bash
   npm run seed:up
   ```

1. Start the application:
   ```bash
   npm start
   ```

2. The app will be available at: `http://localhost:8080`.

## Migration & Seeding Commands

### Migration Commands

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
  npm run migration:create --name [your_migration_name]
  ```

### Seeding Commands

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
  npm run seed:create --name [your_seed_name]
  ```

## Usage

API documentation is available at: [Docs](http://localhost:8080/docs)

`http://localhost:8080/docs`




// TODO - need add transaction
// TODO - fixed integration tests