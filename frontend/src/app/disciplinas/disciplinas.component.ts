import { Component, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { DisciplinaService } from './disciplinas.service';
import { OnInit } from '@angular/core';
import { IDisciplina } from './interfaces';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogConfig, MatSnackBar, MatSort } from '@angular/material';

import { FormComponent } from "../form";

@Component({
  selector: 'disciplinas',
  templateUrl: './disciplinas.component.html',
  styleUrls: ['./disciplinas.component.css'],
})
export class DisciplinasComponent implements OnInit, OnDestroy, AfterViewInit {
  title = 'Disciplinas';

  @ViewChild(MatPaginator) paginator: MatPaginator | null;
  @ViewChild(MatSort) sort: MatSort;

  dataSource: MatTableDataSource<IDisciplina>;
  columns: string[] = ["nome", "codigo", "creditos", "turma", "edit", "delete"];

  constructor(private disciplinaService: DisciplinaService, private dialog: MatDialog, private snackBar: MatSnackBar) {
    this.dataSource = new MatTableDataSource();
    this.paginator = null;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getDisciplinas() {
    console.log('>>> aqui')
    this.disciplinaService.getDisciplinas().subscribe(response => {
      this.dataSource.data = response;
    })
  }

  ngOnInit() {
    this.getDisciplinas();
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
      this.getDisciplinas();
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

  editDisciplina(element) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      handleSubmit: this.handleSubmit.bind(this),
      closeDialog: this.closeDialog.bind(this),
      element
    };
    this.dialog.open(FormComponent, dialogConfig);
  }

  openDetail(element) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      closeDialog: this.closeDialog.bind(this),
      element,
      onlyView: true
    };
    this.dialog.open(FormComponent, dialogConfig);
  }

  deleteDisciplina(element) {
    if (!element) {
      return
    }

    this.disciplinaService.deleteDisciplina(element).subscribe(response => {
      console.log('response :>> ', response);
      this.getDisciplinas();
    },
    error => {
      if (error === 'OK') {
        this.getDisciplinas();
        return
      }
      this.openSnackBar('Ops! Ocorreu um erro')
    })
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
