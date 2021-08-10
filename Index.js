import {Funcionario} from "./Funcionarios/funcionarios.js";
import { Gerente } from "./Funcionarios/gerente.js";
import {Diretor} from "./Funcionarios/diretor.js"
import {sistemaAutenticacao} from "./sistemaDeAutenticacao.js";

let novoDiretor = new Diretor("Bruno", 15000, 1234325677)
let novoGerente = new Gerente("Henrique", 5000, 32145678965)

novoDiretor.criaSenha("12345")

let loginCorreto = sistemaAutenticacao.login(novoDiretor, "12345")

console.log(loginCorreto)