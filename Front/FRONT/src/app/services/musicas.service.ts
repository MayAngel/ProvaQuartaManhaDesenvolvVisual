import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Musicas } from "../models/musicas";

@Injectable({
  providedIn: "root",
})
export class MusicasService {
  private baseURL = "https://localhost:5001/api/Musicas";
  //private baseURL = "http://localhost:5000/api/Musicas";

  constructor(private http: HttpClient) { }

  list(): Observable<Musicas[]> {
    return this.http.get<Musicas[]>(`${this.baseURL}`);
  }

  create(musicas: Musicas): Observable<Musicas> {
    return this.http.post<Musicas>(`${this.baseURL}`, musicas);
  }
}
