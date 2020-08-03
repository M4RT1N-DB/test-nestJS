import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { ProductInt } from "./interfaces/productosINTER.interface";
import { CrearProductoDTO } from "./dto/productosDTO.dto";
import { StringifyOptions } from 'querystring';

@Injectable()
export class ProductosService {

    constructor(@InjectModel('Product') private readonly productModel: Model<ProductInt>) { }

    async obtenerProductos(): Promise<ProductInt[]> {
        const products = await this.productModel.find()
        return products;
    }

    async obtenerProduct(id: string): Promise<ProductInt> {
        const product = await this.productModel.findById(id);
        return product;
    }

    async crearProducto(crearProducto: CrearProductoDTO): Promise<ProductInt> {
        const product = new this.productModel(crearProducto);
        return await product.save();
    }

    async eliminarProducto(id: String): Promise<ProductInt> {
        const deletedProduct = await this.productModel.findByIdAndDelete(id);
        return deletedProduct;
    }

    async actualizarProducto(id: string, product: CrearProductoDTO): Promise<ProductInt> {
        const updatedProduct = await this.productModel.findByIdAndUpdate(id, product, { new: true });
        return updatedProduct;
    }

}
