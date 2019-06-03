import { Component, OnInit } from '@angular/core';
import { Player } from 'src/models/player';
import { LoginService } from './login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService) { 
   
  }

  ngOnInit() {
  }
  model = new Player('')

  submitted = false;
  
  onSubmit() { 
    let testPlayer = this.model;
    this.loginService.createPlayer(testPlayer).subscribe(resp =>
      {
        console.log(resp);
      });
    console.log('made it');

    this.router.navigate(['/league-menu']);

    this.submitted = true;  }

  
}
