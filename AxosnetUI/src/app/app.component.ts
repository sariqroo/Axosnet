import { Component } from '@angular/core';
//import { ReciboService } from './shared/recibo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Axosnet.UI';

  /*
  constructor(
    private recibo: ReciboService
  ){
      this.recibo.refreshList().subscribe(resp => {
        console.log(resp)
      });
  }
*/
}
