import { Component, OnInit } from '@angular/core';
import { MyclamService } from '../myclam.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  card: any;
  class = 'carousel-item col-md-4 active';
  class1 = 'carousel-item col-md-4 ';
  show = true;
  notshow = false;
  html = ' <div  class="carousel-item col-md-4 active ">';
  des: any;

  f = [];
  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: '<div class="nav-btn p-2 align-self-center"><a><img src="../../assets/images/arrow_right_actif@1x.png" alt=""></a></div>',
    prevArrow: '<div class="nav-btn p-2 align-self-center"><a><img src="../../assets/images/arrow_left_actif@1x.png" alt=""></a></div>',
    infinite: true
  };
  constructor(public restApi: MyclamService) { }

  ngOnInit() {
    // let i = 0;
    let position = 0;
    let descr: any;
    this.restApi.getData().subscribe((data) => {
      this.card = data;
      for (const iterator of this.card) {
        descr = [];
        this.des = iterator.description;
        while (this.des.indexOf('-') !== -1) {
          position = this.des.indexOf('-');
          descr.push(this.des.substr(0, position - 1));
          this.des = this.des.substr(position + 1);
        }
        descr.push(this.des);
        this.f.push(descr);
      }
      console.log(this.f);
      // for (const index of this.card) {
      //   this.html += ' <div class="card Scard">';
      //   this.html += '<div id="i' + i + '" class="text-center card-img-top card-img-top-250 text-center">';
      //   this.html += '<img id="i2' + i + '" class="text-center" src="../../assets/images/title _line_section@1x.png">';

      //   this.html += '   </div>';
      //   this.html += '  <div class="card-block p-t-2  text-center">';
      //   this.html += '     <p>';
      //   this.html += '          <h4 class="text-wide p-b-2">' + index.label + '</h4>';
      //   this.html += '       </p>';
      //   this.html += '       <div style="line-height:7pt;">';
      //   this.des = index.description;
      //   while (this.des.indexOf('-') !== -1) {
      //     position = this.des.indexOf('-');
      //     this.html += ' <p>' + this.des.substr(0, position - 1) + '</p>';

      //     this.des = this.des.substr(position + 1);
      //   }

      //   this.html += ' <p>' + this.des + '</p>';


      //   this.html += '        </div>';
      //   this.html += '   </div>';
      //   this.html += '</div>';
      //   this.html += '</div>';
      //   document.getElementById('cars').innerHTML += this.html;
      //   const id = 'i' + i.toString();
      //   const id2 = 'i2' + i.toString();
      //   const x = document.createElement('img');
      //   const image = 'http://' + index.imagePath;
      //   x.setAttribute('src', image);
      //   x.setAttribute('class', 'img-fluid mx-auto d-block');
      //   const element = document.getElementById(id);
      //   const child = document.getElementById(id2);
      //   element.insertBefore(x, child);
      //   //   element.appendChild(x);
      //   i = i + 1;
      //   this.html = ' <div  class="carousel-item col-md-4 ">';
      // }
    });
  }
}
