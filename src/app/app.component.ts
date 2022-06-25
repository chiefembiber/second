import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

//import { OnInit, AfterContentInit } from '@angular/core';

declare let require: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'second';

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  
  constructor(private observer: BreakpointObserver) { }

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
    });
  }
  

  /*
  form = new FormGroup({
    "Name": new FormControl('', Validators.required),
     "Email": new FormControl('', Validators.required),
      "Subject": new FormControl('', Validators.required),
     "Message": new FormControl('', Validators.required)
  })
  */
 
}
/*
export class LandingComponent implements OnInit, AfterContentInit {
  public timer: number;
  constructor() { }

  ngOnInit(): void { }

  ngAfterContentInit() {
    setTimeout(() => {
      const Parallax = require('parallax-js');
      const scene = document.getElementById('scene');
      const parallaxInstance1 = new Parallax(scene, {
        relativeInput: false
      });
    }, 2000);
  }

  stopTimer(timer: number) {
    clearTimeout(timer);
  }

  scrollTo(section) {
    const sectionHtml = document.querySelector('#' + section);
    if (sectionHtml !== null) {
      sectionHtml.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }
}
*/
