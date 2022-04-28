class ExplorerService{
    static readAllInfo(estudiantes){
        return estudiantes;
    }
    static getEmailEstudiantes(estudiantes){
        const emailList = estudiantes.filter(estudiante => estudiante.haveCertification).map((estudiante) => estudiante.email);
        return emailList;
    }
    static getEstudiantesCreditos(estudiantes){
        const estudiantesCreditos = estudiantes.filter((estudiante) => estudiante.credits > 500)
        return estudiantesCreditos;
    }
}

module.exports = ExplorerService;