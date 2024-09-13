"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClassePessoa_1 = __importDefault(require("./ClassePessoa"));
const pessoa = new ClassePessoa_1.default("Aparecida", 58, ["ler", "cantar"]);
console.log(pessoa);
