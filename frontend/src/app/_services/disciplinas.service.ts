import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDisciplina } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {

  apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = "http://localhost:3333/disciplinas"
    // this.apiUrl = "http://ec2-3-135-209-171.us-east-2.compute.amazonaws.com:3333/disciplinas"
  }

  getDisciplinas(): Observable<IDisciplina[]> {
    return this.http.get<IDisciplina[]>(this.apiUrl)
  }

  createDisciplina(element): Observable<IDisciplina[]> {
    const { bibliografia, ...data } = element;
    return this.http.post<IDisciplina[]>(this.apiUrl, { ...data, bibliografia: [bibliografia] })
  }

  updateDisciplina(element): Observable<IDisciplina[]> {
    const { _id, bibliografia, ...data } = element;
    return this.http.put<IDisciplina[]>(`${this.apiUrl}/${_id}`, { ...data, bibliografia: [bibliografia]})
  }

  deleteDisciplina(element): Observable<IDisciplina[]> {
    const { _id } = element;
    return this.http.delete<IDisciplina[]>(`${this.apiUrl}/${_id}`)
  }
}
