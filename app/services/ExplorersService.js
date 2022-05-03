const Reader = require('../utils/reader')

class ExplorerService{
    static readAllInfo(){
        const estudiantes = Reader.readJsonFile("visualpartners.json");
        return estudiantes;
    }
    static getEmailEstudiantes(){
        const estudiantes = Reader.readJsonFile("visualpartners.json");
        const emailList = estudiantes.filter(estudiante => estudiante.haveCertification).map((estudiante) => estudiante.email);
        return emailList;
    }
    static getEstudiantesCreditos(){
        const estudiantes = Reader.readJsonFile("visualpartners.json");
        const estudiantesCreditos = estudiantes.filter((estudiante) => estudiante.credits > 500);
        return estudiantesCreditos;
    }
}

module.exports = ExplorerService;