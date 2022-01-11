import { Component, OnInit } from '@angular/core';
import { ReciboService } from '../shared/recibo.service';
import { Recibo } from '../shared/recibo.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-recibos',
  templateUrl: './recibos.component.html',
  styles: [
  ]
})
export class RecibosComponent implements OnInit {

  constructor(public service: ReciboService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord: Recibo){
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id: number)
  {
    if(confirm('Estas seguro que desea eliminar el registro?')){
      this.service.deleteRecibo(id)
        .subscribe(
          res => {
            this.service.refreshList();
            this.toastr.error("Eliminado exitoso", "Recibo Registrado");
          },
          err =>{console.log(err)}
        )
    }
  }
}
