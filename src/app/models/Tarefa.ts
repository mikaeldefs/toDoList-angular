import { Prioridades } from "./Prioridade";
export interface Tarefa {
    tarefa:string;
    prioridade:Prioridades;
    concluida:boolean;
}