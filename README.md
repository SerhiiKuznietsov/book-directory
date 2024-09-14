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

### Docker Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/SerhiiKuznietsov/book-directory.git
   cd book-directory
   ```
2. Start the Docker container:
   ```bash
   docker-compose up --build
   ```
3. The app will be available at: `http://localhost:3000`.

### Native Setup

1. Ensure you have [Node.js](https://nodejs.org/), [PostgreSQL](https://www.postgresql.org/), and [Redis](https://redis.io/) installed.
2. Clone the repository:
   ```bash
   git clone https://github.com/SerhiiKuznietsov/book-directory.git
   cd book-directory
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start PostgreSQL and Redis services.
5. Configure PostgreSQL and Redis connections in the `.env` file.
6. Run migrations:
   ```bash
   npm run migrate:up
   ```
7. Start the application:
   ```bash
   npm start
   ```
8. The app will be available at: `http://localhost:3000`.

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
  ```conbashsole
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
- Create seed
  ```bash
  npx sequelize-cli seed:generate --name [your_seed_name]
  ```

## Usage

API documentation is available at:

```

http://localhost:3000/docs

```