import { MusicasService } from './../../../../services/musicas.service';
import { Musicas } from 'src/app/models/musicas';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { RouterModule, Routes } from '@angular/router';



@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  musicasLista !: MatTableDataSource<Musicas>;
  displayedColumns: string[] = ['id', 'nome', 'cantor', 'duracao', 'compositor', 'estilo'];

  constructor(private service: MusicasService, private router: Router,) { }


  ngOnInit(): void {
    this.service.list().subscribe((musicas) => {
      this.musicasLista = new MatTableDataSource<Musicas>(musicas);
    });
  }

}
