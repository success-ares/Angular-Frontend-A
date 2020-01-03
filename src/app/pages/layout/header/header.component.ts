import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  checksearch: boolean = false;
  checkmenu: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  search(){
    !this.checksearch ? this.checksearch = true : this.checksearch = false;
  }

  toggleMenu(){
    var body = document.getElementsByTagName('body')[0];
    this.checkmenu ? body.setAttribute('class','homepage navPanel-visible'):
    body.setAttribute('class','homepage');
    this.checkmenu ? this.checkmenu = false:this.checkmenu = true;
  }

}
