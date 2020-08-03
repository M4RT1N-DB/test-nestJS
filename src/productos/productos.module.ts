import { Module } from '@nestjs/common';
import { ProductosController } from './productos.controller';
import { ProductosService } from './productos.service';
import { MongooseModule } from "@nestjs/mongoose";
import { ProductSchema } from "./schemas/productos.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: `Product`, schema: ProductSchema }])],
  controllers: [ProductosController],
  providers: [ProductosService]
})
export class ProductosModule { }
