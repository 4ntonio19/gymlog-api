import fastify from "fastify";
import mock from '../data/exercises.json';
const app = fastify();

app.get('/exercises', (request, response) => {
    response.code(200).send(mock.exercises);
})
app.listen({
    port: 3333,
}).then(() => {
    console.log("HTTP server running!");
})