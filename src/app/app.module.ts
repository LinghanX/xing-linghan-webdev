import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TestListComponent } from './test-list/test-list.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdInputModule, MdMenuModule, MdToolbarModule } from '@angular/material';
import { AssignmentsComponent } from './assignments/assignments.component';
import { Assignment1Component } from './assignments/assignment1/assignment1.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './assignments/assignment1/login.component';

const appRoutes: Routes = [
  { path: 'test-list', component: TestListComponent },
  { path: 'home', component: HomeComponent },
  { path: 'assignments', component: AssignmentsComponent },
  { path: 'assignments/assignment1', component: Assignment1Component },
  { path: '', component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TestListComponent,
    HomeComponent,
    LoginComponent,
    AssignmentsComponent,
    Assignment1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdToolbarModule,
    MdButtonModule,
    MdMenuModule,
    MdInputModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
