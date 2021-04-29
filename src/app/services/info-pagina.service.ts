import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { infoPagina, infoEquipo } from '../interfaces/info-paginas.interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info: infoPagina ={};
  equipo: any[] = [];
  cargada = false;

  constructor( private http:HttpClient) {
    console.log("servicio de infoPagina listo");
    this.cargarInfo();
    this.cargarEquipo();
   }

  private cargarInfo(){
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp:infoPagina) =>{
      this.cargada = true;
      this.info = resp;
      // console.log(this.info.email);
              
    })
  }

  private cargarEquipo(){
    this.http.get('https://angular-html-30f06-default-rtdb.firebaseio.com/equipo.json')
    .subscribe ( (resp:any) =>{
      this.equipo=resp;
      // console.log("equipo",this.equipo);
      
    })
  }

}
