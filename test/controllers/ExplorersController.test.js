const ExplorerController = require("../../app/controllers/ExplorersController");

describe("Tests para requerimientos", () => {
    test("1) Consulta todos los estudiantes", () => {
        const datosEstudiantes = ExplorerController.readInfoStudents();
        expect(datosEstudiantes.length).toBe(51);
    });

    test("2) Obtiene emails de todos los estudiantes con certificacion", () => {
        const emailsEstudiantes = ExplorerController.getStudentsMail();
        expect(emailsEstudiantes.length).toBe(29);
    });

    test("3) Estudiantes con credits mayores a 500", () => {
        const listaEstudiantesCredits = ExplorerController.getStudentsWithCredits();
        expect(listaEstudiantesCredits.length).toBe(27);
    });
});