import { Inject, Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: {};
  element: {};
  handleSubmit: void;
  closeDialog: void;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any = {}, private formBuilder: FormBuilder,) {
    this.handleSubmit = data.handleSubmit;
    this.closeDialog = data.closeDialog;

    this.element = data.element || {};
    this.form = this.formBuilder.group(data.element || {
      _id: '',
      nome: '',
      objetivos: '',
      ementa: '',
      bibliografia: '',
      codigo: null,
      creditos: null,
      turma: '',
      criado: null
    });
  }

  ngOnInit() {
  }

}
// form: IDisciplina = {
//   _id: '',
//   nome: '',
//   objetivos: '',
//   ementa: '',
//   bibliografia: '',
//   codigo: null,
//   creditos: null,
//   turma: '',
//   criado: null
// };
