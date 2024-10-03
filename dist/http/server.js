"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const exercises_json_1 = __importDefault(require("../data/exercises.json"));
const app = (0, fastify_1.default)();
app.get('/exercises', (request, response) => {
    const { group } = request.query;
    const data = exercises_json_1.default.exercises.find((value) => Object.keys(value).includes(group));
    response.code(200).send(data);
});
const PORT = 3000;
const ADDRESS = '0.0.0.0';
app.listen({ port: PORT, host: ADDRESS }, (err, address) => {
    if (err) {
        app.log.error(err);
        process.exit(1);
    }
    app.log.info(`Server listening at ${address}`);
});
