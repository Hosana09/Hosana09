"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// npm i express
// npm i -D @types/express @types/node
const express_1 = __importDefault(require("express"));
const ClassePessoa_1 = __importDefault(require("./ClassePessoa"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/pessoas', (req, res) => {
    const pessoa = new ClassePessoa_1.default("Hosana", 23, ["programar"]);
    const novaPessoa = new ClassePessoa_1.default("Sara", 21, ["estudar"]);
    const listaPessoas = [pessoa, novaPessoa];
    res.json(listaPessoas);
});
app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`);
});
