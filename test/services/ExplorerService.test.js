const ExplorerService = require("../../app/services/ExplorersService");

describe("Tests para requerimientos", () => {
    test("1) Consulta todos los estudiantes", () => {
        const datosEstudiantes = ExplorerService.readAllInfo();
        expect(datosEstudiantes.length).toBe(51);
    });

    test("2) Obtiene emails de todos los estudiantes con certificacion", () => {
        const emailsEstudiantes = ExplorerService.getEmailEstudiantes();
        expect(emailsEstudiantes.length).toBe(29);
    });

    test("3) Estudiantes con credits mayores a 500", () => {
        const listaEstudiantesCredits = ExplorerService.getEstudiantesCreditos();
        expect(listaEstudiantesCredits.length).toBe(27);
    });
});