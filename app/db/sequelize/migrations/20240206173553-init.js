"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.sequelize.query(`
      DROP TABLE IF EXISTS public.role;
      CREATE TABLE IF NOT EXISTS public.role
      (
        id integer NOT NULL,
        created_at timestamp without time zone NOT NULL DEFAULT now(),
        updated_at timestamp without time zone NOT NULL DEFAULT now(),
        name character varying(100) NOT NULL,
        CONSTRAINT role_pkey PRIMARY KEY (id),
        CONSTRAINT role_name_key UNIQUE (name)
      );
    `);

    await queryInterface.sequelize.query(`
      DROP TABLE IF EXISTS public.policy;
      CREATE TABLE IF NOT EXISTS public.policy
      (
        id integer NOT NULL,
        title character varying(255) NOT NULL,
        permission jsonb NOT NULL,
        created_at timestamp without time zone NOT NULL DEFAULT now(),
        updated_at timestamp without time zone NOT NULL DEFAULT now(),
        CONSTRAINT policy_pkey PRIMARY KEY (id)
      );
    `);

    await queryInterface.sequelize.query(`
      DROP TABLE IF EXISTS public.role_policy;
      CREATE TABLE IF NOT EXISTS public.role_policy
      (
        created_at timestamp without time zone NOT NULL DEFAULT now(),
        updated_at timestamp without time zone NOT NULL DEFAULT now(),
        role_id integer NOT NULL,
        policy_id integer NOT NULL
      );
    `);

    await queryInterface.sequelize.query(`
      DROP TABLE IF EXISTS public."user";
      CREATE TABLE IF NOT EXISTS public."user"
      (
        id integer NOT NULL,
        name character varying(123) NOT NULL,
        email character varying(256),
        role_id smallint,
        created_at timestamp without time zone NOT NULL DEFAULT now(),
        updated_at timestamp without time zone NOT NULL DEFAULT now(),
        CONSTRAINT user_pkey PRIMARY KEY (id),
        CONSTRAINT user_role_id_fkey FOREIGN KEY (role_id)
          REFERENCES public.role (id) MATCH SIMPLE
          ON UPDATE CASCADE
          ON DELETE CASCADE
      );
    `);

    await queryInterface.sequelize.query(`
      DROP TABLE IF EXISTS public.book;
      CREATE TABLE IF NOT EXISTS public.book
      (
        id integer NOT NULL,
        title character varying(255) NOT NULL,
        created_at timestamp without time zone NOT NULL DEFAULT now(),
        updated_at timestamp without time zone NOT NULL DEFAULT now(),
        CONSTRAINT book_pkey PRIMARY KEY (id),
        CONSTRAINT book_title_key UNIQUE (title)
      );
    `);

    await queryInterface.sequelize.query(`
      DROP TABLE IF EXISTS public.user_book;
      CREATE TABLE IF NOT EXISTS public.user_book
      (
        created_at timestamp without time zone NOT NULL DEFAULT now(),
        updated_at timestamp without time zone NOT NULL DEFAULT now(),
        book_id integer NOT NULL,
        user_id integer NOT NULL,
        CONSTRAINT user_book_user_id_fkey FOREIGN KEY (user_id)
          REFERENCES public."user" (id) MATCH SIMPLE
          ON UPDATE CASCADE
          ON DELETE CASCADE
      );
    `);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      DROP TABLE IF EXISTS public.role CASCADE;
      DROP TABLE IF EXISTS public.policy CASCADE;
      DROP TABLE IF EXISTS public.role_policy CASCADE;
      DROP TABLE IF EXISTS public."user" CASCADE;
      DROP TABLE IF EXISTS public.book CASCADE;
      DROP TABLE IF EXISTS public.user_book CASCADE;
    `);
  },
};
