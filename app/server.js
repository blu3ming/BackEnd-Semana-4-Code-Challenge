const ExplorerService = require("../app/controllers/ExplorersController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "CodeChallenge Api welcome!"});
});

app.get("/v1/estudiantes", (request, response) => {
    const datosEstudiantes = ExploreController.readAllInfo();
    response.json(datosEstudiantes);
});

app.get("/v1/estudiantes/emails", (request, response) => {
    const emailsEstudiantes = ExplorerController.getEmailEstudiantes();
    response.json(emailsEstudiantes);
});

app.get("/v1/estudiantes/creditosMinimos", (request, response) => {
    const listaEstudiantesCredits = ExplorerController.getEstudiantesCreditos();
    response.json(listaEstudiantesCredits);
});

app.listen(port, () => {
    console.log(`Code Challenge API in localhost:${port}`);
});