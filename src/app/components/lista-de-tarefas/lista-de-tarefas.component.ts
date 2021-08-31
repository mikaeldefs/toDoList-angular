import { Component, OnInit } from '@angular/core';
import { Tarefa } from 'src/app/models/Tarefa';

@Component({
  selector: 'app-lista-de-tarefas',
  templateUrl: './lista-de-tarefas.component.html',
  styleUrls: ['./lista-de-tarefas.component.css']
})
export class ListaDeTarefasComponent implements OnInit {
      tarefas:Tarefa[] = [
      {
        tarefa:'Criar a primeira tarefa',
        prioridade:1,
        concluida:false

      },
      {
        tarefa:'A primeira deu certo então',
        prioridade:2,
        concluida:true
      },
      {
        tarefa:'Mais uma então pra comemorar!',
        prioridade:3,
        concluida:false
      }
    ];

  constructor() { }

  ngOnInit(): void {
  }
  

}
