'use strict';

const schemaName = 'public';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.sequelize.query(`
      CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
    `);

    await queryInterface.sequelize.query(`
      DROP TABLE IF EXISTS ${schemaName}.role;
      CREATE TABLE IF NOT EXISTS ${schemaName}.role
      (
        id serial,
        created_at timestamp without time zone NOT NULL DEFAULT now(),
        updated_at timestamp without time zone NOT NULL DEFAULT now(),
        name character varying(100) NOT NULL,
        CONSTRAINT role_pkey PRIMARY KEY (id),
        CONSTRAINT role_name_key UNIQUE (name)
      );
    `);

    await queryInterface.sequelize.query(`
      DROP TABLE IF EXISTS ${schemaName}.policy;
      CREATE TABLE IF NOT EXISTS ${schemaName}.policy
      (
        id serial,
        title character varying(255) NOT NULL,
        permission character varying[] NOT NULL,
        created_at timestamp without time zone NOT NULL DEFAULT now(),
        updated_at timestamp without time zone NOT NULL DEFAULT now(),
        CONSTRAINT policy_pkey PRIMARY KEY (id),
        CONSTRAINT policy_title_key UNIQUE (title)
      );
    `);

    await queryInterface.sequelize.query(`
      DROP TABLE IF EXISTS ${schemaName}.role_policy;
      CREATE TABLE IF NOT EXISTS ${schemaName}.role_policy
      (
        uuid UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        role_id numeric NOT NULL,
        policy_id numeric NOT NULL,
        access_permission jsonb NOT NULL,
        created_at timestamp without time zone NOT NULL DEFAULT now(),
        updated_at timestamp without time zone NOT NULL DEFAULT now()
      );
      CREATE UNIQUE INDEX idx_unique_role_id_policy_id ON ${schemaName}.role_policy (role_id, policy_id);
    `);

    // TODO - add constrain fkey for role_id, policy_id

    await queryInterface.sequelize.query(`
      DROP TABLE IF EXISTS ${schemaName}."user";
      CREATE TABLE IF NOT EXISTS ${schemaName}."user"
      (
        id serial,
        name character varying(123) NOT NULL,
        email character varying(256),
        role_id smallint,
        created_at timestamp without time zone NOT NULL DEFAULT now(),
        updated_at timestamp without time zone NOT NULL DEFAULT now(),
        CONSTRAINT user_pkey PRIMARY KEY (id),
        CONSTRAINT user_name_key UNIQUE (name),
        CONSTRAINT user_role_id_fkey FOREIGN KEY (role_id)
          REFERENCES ${schemaName}.role (id) MATCH SIMPLE
          ON UPDATE CASCADE
          ON DELETE CASCADE
      );
    `);

    await queryInterface.sequelize.query(`
      DROP TABLE IF EXISTS ${schemaName}.book;
      CREATE TABLE IF NOT EXISTS ${schemaName}.book
      (
        id serial,
        title character varying(255) NOT NULL,
        created_at timestamp without time zone NOT NULL DEFAULT now(),
        updated_at timestamp without time zone NOT NULL DEFAULT now(),
        CONSTRAINT book_pkey PRIMARY KEY (id),
        CONSTRAINT book_title_key UNIQUE (title)
      );
    `);

    await queryInterface.sequelize.query(`
      DROP TABLE IF EXISTS ${schemaName}.user_book;
      CREATE TABLE IF NOT EXISTS ${schemaName}.user_book
      (
        created_at timestamp without time zone NOT NULL DEFAULT now(),
        updated_at timestamp without time zone NOT NULL DEFAULT now(),
        book_id serial,
        user_id serial,
        CONSTRAINT user_book_user_id_fkey FOREIGN KEY (user_id)
          REFERENCES ${schemaName}."user" (id) MATCH SIMPLE
          ON UPDATE CASCADE
          ON DELETE CASCADE
      );
    `);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      DROP EXTENSION IF EXISTS "uuid-ossp";
      DROP TABLE IF EXISTS ${schemaName}.role CASCADE;
      DROP TABLE IF EXISTS ${schemaName}.policy CASCADE;
      DROP TABLE IF EXISTS ${schemaName}.role_policy CASCADE;
      DROP TABLE IF EXISTS ${schemaName}."user" CASCADE;
      DROP TABLE IF EXISTS ${schemaName}.book CASCADE;
      DROP TABLE IF EXISTS ${schemaName}.user_book CASCADE;
    `);
  },
};
