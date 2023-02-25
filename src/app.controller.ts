import { Controller, Get, Param, Query } from '@nestjs/common';
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
  // products/filter must be above products/:productId otherwise it'll cause conflict
  @Get('products/filter')
  getProductFilter() {
    return 'Yo soy un filter';
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
  getCategory(@Param('productId') productId: string, @Param('id') id: string) {
    return `product ${productId} and ${id}`;
  }
  // @Get('products')
  // getProducts(@Query() params:any) {
  //   const { limit, offset } = params;
  //   return `products: limit=> ${limit}, offset=> ${offset}`
  // }
  @Get('products')
  consigueProductos(@Query('limit') limit = 100, @Query('offset') offset = 0, @Query('brand') brand:string) {
    return `products: limit=> ${limit}, offset=> ${offset}, brand=> ${brand}`;
  }
}
