import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interfaces/info-paginas.interfaces';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  producto:ProductoDescripcion={};
  id:string="";

  constructor(private route:ActivatedRoute,
              public productoServices: ProductosService) { }

  ngOnInit(): void {
    this.route.params.subscribe( parametros => {
      // console.log();

      this.productoServices.getProducto(parametros['id'])
      .subscribe( (producto:any) => {
        this.producto=producto;
        // this.id=parametros['id'];
        this.producto.id=parametros['id'];
        // console.log("producto",this.producto);
        // console.log("id",this.producto.id);
        
      })
      
    })
  }

}
