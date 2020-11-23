import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDisciplina } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {

  disciplinaApiUrl: string;
  turmaApiUrl: string;
  constructor(private http: HttpClient) {
    this.disciplinaApiUrl = "http://localhost:3333/disciplinas"
    this.turmaApiUrl = "http://ec2-34-238-114-89.compute-1.amazonaws.com:3000/turma"
    // this.apiUrl = "http://ec2-3-135-209-171.us-east-2.compute.amazonaws.com:3333/disciplinas"
  }

  getTurma() {

  }

  getDisciplinas(): Observable<IDisciplina[]> {
    return this.http.get<IDisciplina[]>(this.disciplinaApiUrl)
  }

  createDisciplina(element): Observable<IDisciplina[]> {
    const { bibliografia, ...data } = element;
    return this.http.post<IDisciplina[]>(this.disciplinaApiUrl, { ...data, bibliografia: [bibliografia] })
  }

  updateDisciplina(element): Observable<IDisciplina[]> {
    const { _id, bibliografia, ...data } = element;
    return this.http.put<IDisciplina[]>(`${this.disciplinaApiUrl}/${_id}`, { ...data, bibliografia: [bibliografia]})
  }
}
