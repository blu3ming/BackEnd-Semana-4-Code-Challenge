const Reader = require("../app/utils/reader");
const ExplorerService = require("../app/services/ExplorersService");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "CodeChallenge Api welcome!"});
});

app.get("/v1/estudiantes", (request, response) => {
    const explorers = Reader.readJsonFile("visualpartners.json");
    const datosEstudiantes = ExplorerService.readAllInfo(explorers);
    response.json(datosEstudiantes);
});

app.get("/v1/estudiantes/emails", (request, response) => {
    const explorers = Reader.readJsonFile("visualpartners.json");
    const emailsEstudiantes = ExplorerService.getEmailEstudiantes(explorers);
    response.json(emailsEstudiantes);
});

app.listen(port, () => {
    console.log(`Code Challenge API in localhost:${port}`);
});