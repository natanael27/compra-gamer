export interface product{

    destacado: number,
    nombre: string,
    id_producto: number,
    id_subcategoria:number,
    precio: number,
    imagenes: [
      {
        nombre: string,
        id_producto_imagen: number,
        orden: number
      }
    ],
    vendible: number,
    stock: number,
    garantia: number,
    iva: number
}