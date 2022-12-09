import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsrUptcApiService {
  readonly inspectionAPIUrl = 'https://localhost:7130/api'; //Url de la API
  constructor(private http: HttpClient) {}

  getCanals(): Observable<any[]> {
    return this.http.get<any>(this.inspectionAPIUrl + '/Canals');
  }

  addCanals(data:any){
    return this.http.post(this.inspectionAPIUrl + '/Canals', data);
  }

  upDateCanals(id:number|string, data:any){
    return this.http.put(this.inspectionAPIUrl + `/Canals/${id}` ,data);
  }

  deleteCanals(id:number|string){
    return this.http.delete(this.inspectionAPIUrl + `/Canals/${id}`);
  }

  //Proveedores

  getCuentaProveedors(): Observable<any[]> {
    return this.http.get<any>(this.inspectionAPIUrl + '/CuentaProveedors');
  }

  addCuentaProveedors(data:any){
    return this.http.post(this.inspectionAPIUrl + '/CuentaProveedors', data);
  }

  upDateCuentaProveedors(id:number|string, data:any){
    return this.http.put(this.inspectionAPIUrl + `/CuentaProveedors/${id}` ,data);
  }

  deleteCuentaProveedors(id:number|string){
    return this.http.delete(this.inspectionAPIUrl + `/CuentaProveedors/${id}`);
  }

  //Marcas

  getMarcas(): Observable<any[]> {
    return this.http.get<any>(this.inspectionAPIUrl + '/Marcas');
  }

  addMarcas(data:any){
    return this.http.post(this.inspectionAPIUrl + '/Marcas', data);
  }

  upDateMarcas(id:number|string, data:any){
    return this.http.put(this.inspectionAPIUrl + `/Marcas/${id}` ,data);
  }

  deleteMarcas(id:number|string){
    return this.http.delete(this.inspectionAPIUrl + `/Marcas/${id}`);
  }

  //Plan canal

  getPlanCanals(): Observable<any[]> {
    return this.http.get<any>(this.inspectionAPIUrl + '/PlanCanals');
  }

  addPlanCanals(data:any){
    return this.http.post(this.inspectionAPIUrl + '/PlanCanals', data);
  }

  upDatePlanCanals(id:number|string, data:any){
    return this.http.put(this.inspectionAPIUrl + `/PlanCanals/${id}` ,data);
  }

  deletePlanCanals(id:number|string){
    return this.http.delete(this.inspectionAPIUrl + `/PlanCanals/${id}`);
  }

  //Plans

  getPlans(): Observable<any[]> {
    return this.http.get<any>(this.inspectionAPIUrl + '/Plans');
  }

  addPlans(data:any){
    return this.http.post(this.inspectionAPIUrl + '/Plans', data);
  }

  upDatePlans(id:number|string, data:any){
    return this.http.put(this.inspectionAPIUrl + `/Plans/${id}` ,data);
  }

  deletePlans(id:number|string){
    return this.http.delete(this.inspectionAPIUrl + `/Plans/${id}`);
  }

  //Proveedors

  getProveedors(): Observable<any[]> {
    return this.http.get<any>(this.inspectionAPIUrl + '/Proveedors');
  }

  addProveedors(data:any){
    return this.http.post(this.inspectionAPIUrl + '/Proveedors', data);
  }

  upDateProveedors(id:number|string, data:any){
    return this.http.put(this.inspectionAPIUrl + `/Proveedors/${id}` ,data);
  }

  deleteProveedors(id:number|string){
    return this.http.delete(this.inspectionAPIUrl + `/Proveedors/${id}`);
  }
}
