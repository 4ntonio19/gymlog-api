import fastify from "fastify";
import mock from '../data/exercises.json';
const app = fastify();

app.get('/exercises', (request, response) => {
    const { group } = request.query as { group: string };
    const data = mock.exercises.find((value) => Object.keys(value).includes(group));    
    response.code(200).send(data);
})
const PORT =3000
const ADDRESS = '0.0.0.0'
app.listen({ port: PORT, host: ADDRESS }, (err, address) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
  app.log.info(`Server listening at ${address}`);
});