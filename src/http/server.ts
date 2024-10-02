import fastify from "fastify";
import mock from '../data/exercises.json';
const app = fastify();

app.get('/exercises', (request, response) => {
    const { group } = request.query as { group: string };
    const data = mock.exercises.find((value) => Object.keys(value).includes(group));    
    response.code(200).send(data);
})
app.listen({
    port: 3333,
}).then(() => {
    console.log("HTTP server running!");
})