import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TestListComponent } from './test-list/test-list.component';
import { TestListService } from './test-list.service';

const appRoutes: Routes = [
  { path: 'test-list', component: TestListComponent },
  { path: 'home', redirectTo: '/' }
];

@NgModule({
  declarations: [
    AppComponent,
    TestListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TestListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
