const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "CodeChallenge Api welcome!"});
});

app.get("/v1/fizzbuzz/:score", (request, response) => {
    const score = request.params.score;
    const validationResponse = FizzBuzzService.applyValidationInNumber(score);
    response.json({score: score, trick: validationResponse});
});

app.listen(port, () => {
    console.log(`Code Challenge API in localhost:${port}`);
});