import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsrUptcApiService } from 'src/app/usr-uptc-api.service';

@Component({
  selector: 'app-show-usr-uptc',
  templateUrl: './show-usr-uptc.component.html',
  styleUrls: ['./show-usr-uptc.component.css'],
})
export class ShowUsrUptcComponent {
  //cargar lista con signo dolar por que es sin y exclamasion para hacer una seleccion definitiva

  canalLists$!: Observable<any[]>;
  cuentaProveedorLists$!: Observable<any[]>;
  marcaLists$!: Observable<any[]>;
  planCanalLists$!: Observable<any[]>;
  planLists$!: Observable<any[]>;
  proveedorLists$!: Observable<any[]>;

  marcaList: any = [];

  //variables
  modalTitle: string = '';
  activeAddEditProveedorComponent: boolean = false;
  proveedor: any;

  modalAdd() {
    this.proveedor = {
      codProveedor: 0,
      dscProveedor: null,
      paginaWeb: null,
      telefono: null,
      contacto: null,
      marcaId: 0,
    };
    this.modalTitle = 'Agregar Proveedor';
    this.activeAddEditProveedorComponent = true;
  }

  modalEdit(item:any){
    this.proveedor = item;
    this.modalTitle = "Edit Inspection";
    this.activeAddEditProveedorComponent= true;
  }
  delete(item:any){
    if(confirm(`Estas seguro de eliminar el proveedor ${item.codProveedor}`)){
      this.service.deleteProveedors(item.codProveedor).subscribe(res =>{
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
      })
    }
  }

  modalClose() {
    this.activeAddEditProveedorComponent = false;
    this.proveedorLists$ = this.service.getProveedors();
  }
  //mapa para mostrar los datos asociados con Foreign keys
  marcaMap: Map<number, string> = new Map();
  proveedorMap: Map<number, string> = new Map();
  planMap: Map<number, string> = new Map();
  canalMap: Map<number, string> = new Map();

  //crear instancia del sevicio
  constructor(private service: UsrUptcApiService) {}

  ngOnInit(): void {
    this.proveedorLists$ = this.service.getProveedors();
    this.marcaLists$ = this.service.getMarcas();
    this.refreshMarcaMap();
  }

  refreshMarcaMap() {
    this.service.getMarcas().subscribe((data) => {
      this.marcaList = data;
      for (let i = 0; i < data.length; i++) {
        this.marcaMap.set(this.marcaList[i].numMarca, this.marcaList[i].marca1);
      }
    });
  }
}
