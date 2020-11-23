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
