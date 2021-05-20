import { deployMigrations, MigrationOptions } from "cf-migrations";

async function deploy() {
  const options: MigrationOptions = {
    accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
    environmentId: process.env.CONTENTFUL_ENVIRONMENT_ID,
    migrationsDirectory: process.env.MIGRATIONS_DIR,
    spaceId: process.env.CONTENTFUL_SPACE_ID,
    locale: process.env.CONTENTFUL_LOCALE,
  };

  await deployMigrations({ options });
}

deploy().catch((e) => {
  console.error(e);

  process.exit(1);
});
