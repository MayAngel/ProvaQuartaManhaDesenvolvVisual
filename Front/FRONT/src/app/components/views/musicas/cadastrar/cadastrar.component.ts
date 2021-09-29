import { MusicasService } from './../../../../services/musicas.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Musicas } from 'src/app/models/musicas';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  nome!: string;
  cantor!: string;
  duracao!: number;
  compositor!: string;
  estilo!: string;


  constructor(private service: MusicasService, private router: Router) { }

  ngOnInit(): void { }

  cadastrar(): void {
    let musicas: Musicas = {
      nome: this.nome,
      cantor: this.cantor,
      duracao: this.duracao,
      compositor: this.compositor,
      estilo: this.estilo,
    };
    this.service.create(musicas).subscribe((musicas) => {
      console.log(musicas);
      this.router.navigate(["musicas/listar"]);
    });
  }

}
