import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit, OnDestroy {
  slideIndex: number = 0;
  interval: any;

  constructor() { }

  ngOnInit() {
    this.showSlides();
  }

  showSlides() {
    //landing page slider
    var i
    var slides = document.getElementsByClassName("topbarmySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].setAttribute('style', 'display:none');
    }
    this.slideIndex++;
    if (this.slideIndex > slides.length) {
      this.slideIndex = 1;
    }

    slides[this.slideIndex - 1].setAttribute('style', 'display:block');
    this.interval = setTimeout(() => {
      this.showSlides();
    }, 10000);

  }

  ngOnDestroy(){
    clearInterval(this.interval);
  }

}
