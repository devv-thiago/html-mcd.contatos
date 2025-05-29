import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Grupo } from '../../models/grupo.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GruposService {

    private apiUrl = 'http://localhost:3000/grupos';

    constructor(private http: HttpClient) { }
      // GET
      getGrupos(): Observable<Grupo[]> {
        return this.http.get<Grupo[]>(this.apiUrl);
      }

      // POST
      criarGrupo(Grupo: Grupo): Observable<Grupo> {
        return this.http.post<Grupo>(this.apiUrl, Grupo);
      }

      // PUT
      atualizarGrupo(Grupo: Grupo): Observable<Grupo> {
        return this.http.put<Grupo>(`${this.apiUrl}/${Grupo.id}`, Grupo);
      }

      // DELETE
      deletarGrupo(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
      }
}
