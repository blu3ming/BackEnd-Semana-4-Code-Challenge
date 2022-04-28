const Reader = require("../../app/utils/reader")
const ExplorerService = require("../../app/services/ExplorersService");

describe("Tests para requerimientos", () => {
    test("1) Consulta todos los estudiantes", () => {
        const explorers = Reader.readJsonFile("visualpartners.json");
        const datosEstudiantes = ExplorerService.readAllInfo(explorers)
        expect(datosEstudiantes.length).toBe(51);
    });

    test("2) Obtiene emails de todos los estudiantes con certificacion", () => {
        const explorers = Reader.readJsonFile("visualpartners.json");
        const emailsEstudiantes = ExplorerService.getEmailEstudiantes(explorers)
        expect(emailsEstudiantes).not.toBeNull();
    });

    test("3) Estudiantes con credits mayores a 500", () => {
        const explorers = Reader.readJsonFile("visualpartners.json");
        const listaEstudiantesCredits = ExplorerService.getEstudiantesCreditos(explorers)
        expect(listaEstudiantesCredits).not.toBeNull();
    });
});