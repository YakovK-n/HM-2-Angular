import { Component, OnInit } from '@angular/core';
import { SOCIALBUTTONS } from '../list-social_buttons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }
  copyright = "Yakov Krupnin";
  copyrightYear = "2021"
  socialButtons = SOCIALBUTTONS
}
