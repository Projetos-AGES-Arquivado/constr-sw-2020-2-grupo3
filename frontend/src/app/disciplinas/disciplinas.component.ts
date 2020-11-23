import { Component, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { DisciplinaService } from './disciplinas.service';
import { OnInit } from '@angular/core';
import { IDisciplina } from './interfaces';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogConfig, MatSnackBar } from '@angular/material';

import { FormComponent } from "../form";

@Component({
  selector: 'disciplinas',
  templateUrl: './disciplinas.component.html',
  styleUrls: ['./disciplinas.component.css'],
})
export class DisciplinasComponent implements OnInit, OnDestroy, AfterViewInit {
  title = 'Disciplinas';

  @ViewChild(MatPaginator) paginator: MatPaginator | null;

  dataSource: MatTableDataSource<IDisciplina>;
  columns: string[] = ["edit", "nome", "codigo", "creditos", "turma"];

  constructor(private disciplinaService: DisciplinaService, private dialog: MatDialog, private snackBar: MatSnackBar) {
    this.dataSource = new MatTableDataSource();
    this.paginator = null;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.disciplinaService.getDisciplinas().subscribe(response => {
      this.dataSource.data = response;
    })

  }

  search(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnDestroy() {

  }

  async handleSubmit(element) {
    if (!element) {
      return
    }

    const action = element._id ? 'updateDisciplina' : 'createDisciplina';

    this.disciplinaService[action](element).subscribe(response => {
      console.log('response :>> ', response);
      this.closeDialog();
    },
    error => this.openSnackBar('Ops! Ocorreu um erro'))
  }

  addDisciplinas() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      handleSubmit: this.handleSubmit.bind(this),
      closeDialog: this.closeDialog.bind(this)
    }

    this.dialog.open(FormComponent, dialogConfig);
  }

  editDisciplinas(element) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      handleSubmit: this.handleSubmit.bind(this),
      closeDialog: this.closeDialog.bind(this),
      element
    };
    this.dialog.open(FormComponent, dialogConfig);
  }

  closeDialog() {
    this.dialog.closeAll();
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Fechar', {
      duration: 2000,
    });
  }

}
