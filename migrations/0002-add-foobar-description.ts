import { MigrationFunction } from "contentful-migration";

const up: MigrationFunction = (migration, context) => {
  const fooType = migration.editContentType("foobar");

  fooType.createField("description").name("Description").type("Text");
};

export = up;
