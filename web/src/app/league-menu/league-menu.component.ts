import { Component, OnInit } from '@angular/core';
import { LeagueService } from './league-menu.service';
import { League } from 'src/models/league';

@Component({
  selector: 'app-league-menu',
  templateUrl: './league-menu.component.html',
  styleUrls: ['./league-menu.component.css']
})
export class LeagueMenuComponent implements OnInit {

  constructor(private leagueService:LeagueService) { }

  ngOnInit() {
  }
  model = new League('', '');

  submitted = false;
  
  onSubmit() { 
    let testLeague = this.model;

    this.leagueService.createLeague(testLeague).subscribe(resp =>
      {
        console.log(resp);
      });
    console.log('made it');

    // this.router.navigate(['/league-menu']);

    this.submitted = true;  }

  
}