import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './login/login.service';
import { LeagueMenuComponent } from './league-menu/league-menu.component';

const appRoutes: Routes = [
  { path: 'league-menu', component: LeagueMenuComponent },
  { path: 'login', component:LoginComponent }

];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LeagueMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing:true }
    )
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
