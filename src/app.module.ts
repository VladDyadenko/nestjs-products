import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { config } from 'dotenv';
import { ProductsModule } from './products/products.module';

config();

@Module({
  imports: [MongooseModule.forRoot(`${process.env.DB_HOST}`), ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
