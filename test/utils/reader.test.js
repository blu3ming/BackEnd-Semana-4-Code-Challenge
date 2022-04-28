const Reader = require("./../../app/utils/reader")

describe("Test para Reader", () => {
    test("1) Lectura de archivo correcta", () => {
        const explorers = Reader.readJsonFile("visualpartners.com");
        expect(explorers).not.toBeNull();
    });
});
