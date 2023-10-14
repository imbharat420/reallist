import { Component } from '@angular/core';

@Component({
  selector: 'app-real-estate',
  templateUrl: './real-estate.component.html',
  styleUrls: ['./real-estate.component.css'],
})
export class RealEstateComponent {
  img: string = '';
  setImg(img: string) {
    this.img = img;
  }
}
