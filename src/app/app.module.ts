import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import {app_routing} from './app.routes'

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProjectsComponent } from './components/bakend/projects.component';
import { HomeworkComponent } from './components/fronted/homework.component';
import { LangsComponent } from './components/langs/langs.component';
import { AngularComponent } from './components/langs/angular/angular.component';
import { NodeComponent } from './components/langs/node/node.component';
import { ReactComponent } from './components/langs/react/react.component';
import { TypescriptComponent } from './components/langs/typescript/typescript.component';
import { PostmanComponent } from './components/langs/postman/postman.component';
import { MysqlComponent } from './components/langs/mysql/mysql.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { OurlanguagesComponent } from './components/ourlanguages/ourlanguages.component';
import { GitComponent } from './components/git/lab/git.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    InicioComponent,
    ProjectsComponent,
    HomeworkComponent,
    LangsComponent,
    AngularComponent,
    NodeComponent,
    ReactComponent,
    TypescriptComponent,
    PostmanComponent,
    MysqlComponent,
    FooterComponent,
    OurlanguagesComponent,
    GitComponent,
    RegistroComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    app_routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
