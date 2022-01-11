import { Component, OnInit } from '@angular/core';
import { ReciboService } from 'src/app/shared/recibo.service';
import { NgForm } from '@angular/forms';
import { Recibo } from 'src/app/shared/recibo.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-recibo-form',
  templateUrl: './recibo-form.component.html',
  styles: [
  ]
})
export class ReciboFormComponent implements OnInit {

  constructor(public service: ReciboService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    if (this.service.formData.id == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postRecibo().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Creado Exitosamente', 'Recibo registrado')
      },
      err => { console.log(err); }
    );
  }

  updateRecord(form: NgForm) {
    this.service.putRecibo().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info('Actualizado Exitosamente', 'Recibo registrado')
      },
      err => { console.log(err); }
    );
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new Recibo();
  }

}
