import { Controller, Get, Post, Res, HttpStatus, Body, Param, NotFoundException, Delete, Query, Put } from '@nestjs/common';
import { CrearProductoDTO } from "./dto/productosDTO.dto";

import { ProductosService } from "./productos.service";
import { ProductInt } from './interfaces/productosINTER.interface';

@Controller('productos')
export class ProductosController {

    constructor(private productService: ProductosService) { }

    @Post(`/crear`)
    async crearProducto(@Res() res, @Body() crearProductoDTO: CrearProductoDTO): Promise<ProductInt> {
        const product = await this.productService.crearProducto(crearProductoDTO);
        return res.status(HttpStatus.CREATED).json({ message: `El producto fue creado`, producto: product })
    }

    @Get(`/`)
    async obtenerProductos(@Res() res) {
        const products = await this.productService.obtenerProductos();
        return res.status(HttpStatus.OK).json({ info: `Datos Recibidos`, datos: products });
    }

    @Get(`/:id`)
    async obtenerProducto(@Res() res, @Param(`id`) id: string): Promise<ProductInt> {
        const product = await this.productService.obtenerProduct(id);
        if (!product) throw new NotFoundException(`No se encontro el Producto a OBTENER`);
        return res.status(HttpStatus.OK).json({ info: `Datos Recibidos`, producto: product });
    }

    @Delete(`/delete`)
    async eliminarProducto(@Res() res, @Query(`ID`) productID): Promise<ProductInt> {
        const product = await this.productService.eliminarProducto(productID);
        if (!product) throw new NotFoundException(`No se encontro el Producto a ELIMINAR.`);
        return res.status(HttpStatus.OK).json({ info: `Producto Eliminado`, datos: product })
    }

    @Put(`/update`)
    async actualizarProducto(@Query(`ID`) id, @Res() res, @Body() productoDTO: CrearProductoDTO): Promise<ProductInt> {
        const product = await this.productService.actualizarProducto(id, productoDTO);
        if (!product) throw new NotFoundException(`No se encontro el Producto a ACTUAIZAR.`);
        return res.status(HttpStatus.OK).json({ info: `Se actualizo el Producto`, datos: product });
    }
}
