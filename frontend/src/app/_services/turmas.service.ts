import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITurma } from '../_services/interfaces';

@Injectable({
  providedIn: 'root'
})
export class TurmaService {

  apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = "http://ec2-34-238-241-74.compute-1.amazonaws.com:3000/turma"
  }

  getTurmas(): Observable<ITurma[]> {
    return this.http.get<ITurma[]>(this.apiUrl)
  }
}
