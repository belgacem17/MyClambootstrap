import { MyclamService } from './myclam.service';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyClam';
  d: any;
  constructor(public restApi: MyclamService) {}
  load() {
  this.restApi.getData().subscribe((data) => {
    console.log(data);
});

    }
}
