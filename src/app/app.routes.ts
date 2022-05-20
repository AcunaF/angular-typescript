import { Routes, RouterModule    } from '@angular/router';
import { InicioComponent         } from './components/inicio/inicio.component';
import { ProjectsComponent       } from './components/bakend/projects.component';
import { HomeworkComponent       } from './components/fronted/homework.component';
import { GitComponent            } from './components/git/lab/git.component';
import { RegistroComponent       } from './components/registro/registro.component';
import { LangsComponent          } from './components/langs/langs.component';
import { LoginComponent          } from './components/login/login.component';
    import { AngularComponent    } from './components/langs/angular/angular.component';
    import { ReactComponent      } from './components/langs/react/react.component';
    import { NodeComponent       } from './components/langs/node/node.component';
    import { TypescriptComponent } from './components/langs/typescript/typescript.component';
    import { PostmanComponent    } from './components/langs/postman/postman.component';
    import { MysqlComponent      } from './components/langs/mysql/mysql.component';

const APP_ROUTES: Routes = [
  
    { path: 'inicio'     , component: InicioComponent },
    { path: 'git'        , component: GitComponent },
    { path: 'projects'   , component: ProjectsComponent },
    { path: 'homework'   , component: HomeworkComponent },
    { path: 'registrarse', component: RegistroComponent },
    { path: 'login'      , component: LoginComponent},
    
    { path: 'langs', component: LangsComponent,
        children: [
            { path: 'Langs,Angular',   component: AngularComponent    },
            { path: 'React',           component: ReactComponent      },
            { path: 'Node',            component: NodeComponent       },
            { path: 'Typescript',      component: TypescriptComponent },
            { path: 'Postman',         component: PostmanComponent    },
            { path: 'MySql/Postgress', component: MysqlComponent      }
         ]},
    { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

export const app_routing = RouterModule.forRoot(APP_ROUTES)