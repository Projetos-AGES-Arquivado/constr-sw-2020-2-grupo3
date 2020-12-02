export interface IDisciplina {
  _id?: string;
  nome: string;
  objetivos: string;
  ementa: string;
  bibliografia: [];
  codigo: number;
  creditos: number;
  turma: string;
  criado?: Date;
};

export interface ITurma {
  _id?: string;
  numero: number;
  ano: number;
  semestre: number;
  professor: string;
  sala: string;
  disciplina: string;
  aulas: Array<string>;
  alunos: Array<string>;
  horario: Array<string>;
};
