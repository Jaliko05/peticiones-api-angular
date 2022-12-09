import { NONE_TYPE } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsrUptcApiService } from 'src/app/usr-uptc-api.service';

@Component({
  selector: 'app-add-edit-usr-uptc',
  templateUrl: './add-edit-usr-uptc.component.html',
  styleUrls: ['./add-edit-usr-uptc.component.css'],
})
export class AddEditUsrUptcComponent {
  proveedorLists$!: Observable<any[]>;
  marcaLists$!: Observable<any[]>;

  constructor(private service: UsrUptcApiService) {}

  @Input() proveedor: any;
  codProveedor: number = 0;
  dscProveedor: string = '';
  paginaWeb: string = '';
  telefono: string = '';
  contacto: string = '';
  marcaId: number = 0;

  ngOnInit(): void {
    this.codProveedor = this.proveedor.codProveedor;
    this.dscProveedor = this.proveedor.dscProveedor;
    this.paginaWeb = this.proveedor.paginaWeb;
    this.telefono = this.proveedor.telefono;
    this.contacto = this.proveedor.contacto;
    this.marcaId = this.proveedor.marcaId;

    this.proveedorLists$ = this.service.getProveedors();
    this.marcaLists$ = this.service.getMarcas();
  }

  addProveedors() {
    var proveedor = {
      dscProveedot: this.dscProveedor,
      paginaWeb: this.paginaWeb,
      telefono: this.telefono,
      contacto: this.contacto,
      marcaId: this.marcaId,
    };
    this.service.addProveedors(proveedor).subscribe((res) => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if (closeModalBtn) {
        closeModalBtn.click();
      }

      var showAddSuccess = document.getElementById('add-success-alert');
      if (showAddSuccess) {
        showAddSuccess.style.display = 'block';
      }
      setTimeout(function () {
        if (showAddSuccess) {
          showAddSuccess.style.display = 'none';
        }
      }, 4000);
    });
  }

  upDateProveedors() {
    var proveedor = {
      codProveedor:this.codProveedor,
      dscProveedot: this.dscProveedor,
      paginaWeb: this.paginaWeb,
      telefono: this.telefono,
      contacto: this.contacto,
      marcaId: this.marcaId,
    };
    var id:number=this.codProveedor;
    this.service.upDateProveedors(this.codProveedor,proveedor).subscribe((res) => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if (closeModalBtn) {
        closeModalBtn.click();
      }

      var showUpdateSuccess = document.getElementById('update-success-alert');
      if (showUpdateSuccess) {
        showUpdateSuccess.style.display = 'block';
      }
      setTimeout(function () {
        if (showUpdateSuccess) {
          showUpdateSuccess.style.display = 'none';
        }
      }, 4000);
    });
  }

  
}
