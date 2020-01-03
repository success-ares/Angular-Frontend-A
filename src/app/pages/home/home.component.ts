import { Component, OnInit, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  slideIndex: number = 0;
  slideIndex2: number = 0;
  interval1: any;
  interval2: any;

  constructor() { }

  ngOnInit() {
    this.showSlides();
    this.showSlides2();
  }

  showSlides() {
    var i
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].setAttribute('style', 'display:none');
    }
    this.slideIndex++;
    if (this.slideIndex > slides.length) {
      this.slideIndex = 1;
    }

    slides[this.slideIndex - 1].setAttribute('style', 'display:block');
    this.interval1 = setTimeout(() => {
      this.showSlides();
    }, 10000);

  }

  //mark slide
  showSlides2() {
    var j
    var slides2 = document.getElementsByClassName("mySlides2");
    for (j = 0; j < slides2.length; j++) {
      slides2[j].setAttribute('style', 'display:none');
    }
    this.slideIndex2++;
    if (this.slideIndex2 > slides2.length) {
      this.slideIndex2 = 1;
    }

    slides2[this.slideIndex2 - 1].setAttribute('style', 'display:block');
    this.interval2 = setTimeout(() => {
      this.showSlides2();
    }, 5000);

  }

  ngOnDestroy(){
    clearInterval(this.interval1);
    clearInterval(this.interval2);
  }

}
