import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  img1="./assets/image/slider-1.jpg"; 
  img2="./assets/image/slider-2.jpg"; 
  img3="./assets/image/slider-3.jpg";
  img4="./assets/image/slider-4.jpg"; 
  img5="./assets/image/lienhe1.png"; 
  img6="./assets/image/lienhe2.png"; 
  img7="./assets/image/lienhe3.png";
  img8="./assets/image/lienhe4.png"; 
}
