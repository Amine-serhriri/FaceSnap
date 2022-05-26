import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  userEmail:string='----------@gmail.com'

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  OnContinue():void{
    this.router.navigateByUrl('/facesnap')
  }

  onSubmitForm(form:NgForm):void{
    console.log(form.value)
  }
}
