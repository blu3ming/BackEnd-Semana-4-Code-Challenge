const ExplorersService = require('../services/ExplorersService')

class ExplorersController{
    static readInfoStudents(){
        const estudiantes = ExplorersService.readAllInfo();
        return estudiantes;
    }
    static getStudentsMail(){
        const emails = ExplorersService.getEmailEstudiantes();
        return emails;
    }
    static getStudentsWithCredits(){
        const estudiantes = ExplorersService.getEstudiantesCreditos();
        return estudiantes;
    }
}

module.exports = ExplorersController;