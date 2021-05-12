import { MigrationFunction } from "contentful-migration";

const up: MigrationFunction = (migration, context) => {
  const fooType = migration.createContentType("foobar", {
    name: "foobar",
  });

  fooType.createField("name").name("Name").type("Symbol");
};

export = up;
