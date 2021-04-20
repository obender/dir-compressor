const Zip = require("../index");
const makeDir = require("make-dir");
const del = require("del");

describe("Zipping directory's", () => {

  beforeAll(async () => {
    await del("./test/output");
    await makeDir("./test/output");
  })

  it("should zip files properly ", async () => {
    const test = new Zip("test/test zip folder", "./test/output/test.zip", ["more files here"]);
    await test.createZipAsync();
  });

  it("should support ignore file", async () => {
    const test = new Zip("test/test zip folder", "./test/output/test.ignore.zip", [], true, ".ignore");
    await test.createZipAsync();
  });
});
