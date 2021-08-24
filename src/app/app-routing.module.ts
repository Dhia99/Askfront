import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccComponent } from './acc/acc.component';
import { AuthGuard } from './auth.guards';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
const routes: Routes = [
  {path:'',component:AccComponent},
  {path:'rvente',loadChildren:()=>import('./rvente/rvente.module').then(m=>m.RventeModule)

 },
  {path:'rcomf',loadChildren:()=>import('./rcomf/rcomf.module').then(m=>m.RcomfModule)},
  {path:'Register',component:RegisterComponent},
  {path:'Login',component:LoginComponent},
  {path:'rachat',loadChildren:()=>import('./rachat/rachat.module').then(m=>m.RachatModule)},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
