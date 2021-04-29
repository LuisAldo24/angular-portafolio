export interface infoPagina {
  titulo?: string;
  email?: string;
  nombre?: string;
  pagina?: string;
  facebook?: string;
  twitter?: string;
  instagram?: string;
  tublr?: string;
  equipo_trabajo?: any[];
}

export interface infoEquipo{
  frese?: string; 
  nombre?: string; 
  subtitulo?: string; 
  twitter?: string;
  url?: string; 

}

export interface Producto {
  categoria?: string;
  cod?: string;
  titulo?: string;
  url?: string;
}

export interface ProductoDescripcion {
  categoria?: string;
  desc1?: string;
  desc2?: string;
  producto?: string;
  resumen?: string;
  subtitulo1?: string;
  subtitulo2?: string;
  id?: string;
}