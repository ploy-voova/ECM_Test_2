import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assign-diver',
  templateUrl: './assign-diver.page.html',
  styleUrls: ['./assign-diver.page.scss'],
})
export class AssignDiverPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  back_Home(){
    this.router.navigate(['tabs/home']);
  }

  selectedSegment = 'staff';

  onChanged(value: string) {
    this.selectedSegment = value;
  }

}
