'use strict';

const schemaName = 'public';

const roleTableName = '"role"';
const userTableName = '"user"';
const policyTableName = '"policy"';
const rolePolicyTableName = '"role_policy"';
const bookTableName = '"book"';
const userBookTableName = '"user_book"';

const getSystemsFields = () => {
  return `created_at timestamp without time zone NOT NULL DEFAULT now(),
    updated_at timestamp without time zone NOT NULL DEFAULT now()
  `;
};

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.sequelize.query(`
      CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
    `);

    await queryInterface.sequelize.query(`
      DROP TABLE IF EXISTS ${schemaName}.${roleTableName};
      CREATE TABLE IF NOT EXISTS ${schemaName}.${roleTableName}
      (
        id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
        name character varying(100) NOT NULL,
        ${getSystemsFields()}
      );
    `);

    await queryInterface.sequelize.query(`
      DROP TABLE IF EXISTS ${schemaName}.${policyTableName};
      CREATE TABLE IF NOT EXISTS ${schemaName}.${policyTableName}
      (
        id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
        title character varying(255) NOT NULL,
        permission character varying[] NOT NULL,
        ${getSystemsFields()}
      );
    `);

    await queryInterface.sequelize.query(`
      DROP TABLE IF EXISTS ${schemaName}.${rolePolicyTableName};
      CREATE TABLE IF NOT EXISTS ${schemaName}.${rolePolicyTableName}
      (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        role_id uuid NOT NULL,
        policy_id uuid NOT NULL,
        access_permission jsonb NOT NULL,
        ${getSystemsFields()}
      );
    `);

    await queryInterface.sequelize.query(`
      DROP TABLE IF EXISTS ${schemaName}.${userTableName};
      CREATE TABLE IF NOT EXISTS ${schemaName}.${userTableName}
      (
        id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
        name character varying(123) NOT NULL,
        email character varying(256),
        role_id uuid NOT NULL,
        ${getSystemsFields()}
      );
    `);

    await queryInterface.sequelize.query(`
      DROP TABLE IF EXISTS ${schemaName}.${bookTableName};
      CREATE TABLE IF NOT EXISTS ${schemaName}.${bookTableName}
      (
        id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
        title character varying(255) NOT NULL,
        ${getSystemsFields()}
      );
    `);

    await queryInterface.sequelize.query(`
      DROP TABLE IF EXISTS ${schemaName}.${userBookTableName};
      CREATE TABLE IF NOT EXISTS ${schemaName}.${userBookTableName}
      (
        id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
        book_id uuid NOT NULL,
        user_id uuid NOT NULL,
        ${getSystemsFields()}
      );
    `);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      DROP TABLE IF EXISTS ${schemaName}.${roleTableName} CASCADE;
      DROP TABLE IF EXISTS ${schemaName}.${policyTableName} CASCADE;
      DROP TABLE IF EXISTS ${schemaName}.${rolePolicyTableName} CASCADE;
      DROP TABLE IF EXISTS ${schemaName}.${userTableName} CASCADE;
      DROP TABLE IF EXISTS ${schemaName}.${bookTableName} CASCADE;
      DROP TABLE IF EXISTS ${schemaName}.${userBookTableName} CASCADE;
      DROP EXTENSION IF EXISTS "uuid-ossp";
    `);
  },
};
