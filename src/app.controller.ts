import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Hola mundazo';
    // return this.appService.getHello();
  }
  @Get('nuevo')
  newEndpoint(): string {
    return 'Yo soy nuevo';
  }
  @Get('/ruta/')
  hello() {
    return 'con /sas/';
  }
  @Get('products/:productId')
  getProduct(@Param() params: any) {
    return `Parametros ${params.productId}`;
  }
  @Get('productos/:pId')
  consigueProducto(@Param('productId') productId: string) {
    return `product ${productId}`;
  }
  @Get('categories/:id/products/:productId')
  getCategory(@Param('productId') productId:string, @Param('id') id: string) {
    return `product ${productId} and ${id}`;
  }
}
