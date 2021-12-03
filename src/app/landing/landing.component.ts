import { Component, OnInit } from '@angular/core';
import { NeedDataService } from '../need-data.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  userList:any;
  constructor(public dataService:NeedDataService) { }

  ngOnInit(): void {
    this.dataService.getUsers().subscribe(
      data=>{
        this.userList=data;
        console.log(data);
      }
    )
  }

}
