import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductosModule } from './productos/productos.module';
import { MongooseModule } from "@nestjs/mongoose";


@Module({
  imports: [ProductosModule,MongooseModule.forRoot(`mongodb+srv://user:EYKboPnuic8dOLjz@cluster0.n8zpf.mongodb.net/productos?retryWrites=true&w=majority`)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
