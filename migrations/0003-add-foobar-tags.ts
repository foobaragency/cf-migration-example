import { MigrationFunction } from "contentful-migration";

const up: MigrationFunction = (migration, context) => {
  const fooType = migration.editContentType("foobar");

  fooType.createField("summary").name("Summary").type("Text");
};

export = up;
