import { Funcionario } from "./funcionarios";

export class Diretor extends Funcionario{
    constructor(nome,salario,cpf){
        super(nome,salario,cpf)
    }
}