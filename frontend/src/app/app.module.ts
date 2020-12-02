import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import {
  MatTableModule,
  MatTabsModule,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule,
  MatDialogModule,
  MatSnackBarModule,
  MatSortModule,
  MatExpansionModule,
  MatCheckboxModule,
} from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { AlertComponent } from './_components';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { DisciplinasComponent } from './disciplinas';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { FormComponent } from './form';

@NgModule({
    declarations: [
        AppComponent,
        AlertComponent,
        DisciplinasComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        FormComponent
    ],
    entryComponents: [
      FormComponent,
    ],
    imports: [
      BrowserModule,
      ReactiveFormsModule,
      HttpClientModule,
      MatDialogModule,
      routing,
      MatTableModule,
      MatTabsModule,
      MatFormFieldModule,
      MatInputModule,
      MatPaginatorModule,
      NoopAnimationsModule,
      FormsModule,
      MatSnackBarModule,
      MatSortModule,
      MatExpansionModule,
      MatCheckboxModule
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
