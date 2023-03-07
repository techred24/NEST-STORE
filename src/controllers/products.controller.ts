import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  // @Get('products')
  // getProducts(@Query() params:any) {
  //   const { limit, offset } = params;
  //   return `products: limit=> ${limit}, offset=> ${offset}`
  // }
  @Get()
  consigueProductos(@Query('limit') limit = 100, @Query('offset') offset = 0, @Query('brand') brand:string) {
    return `products: limit=> ${limit}, offset=> ${offset}, brand=> ${brand}`;
  }
  // products/filter must be above products/:productId otherwise it'll cause conflict
  @Get('filter')
  getProductFilter() {
    return 'Yo soy un filter';
  }
  @Get(':productId')
  getProduct(@Param() params: any) {
    return `Parametros ${params.productId}`;
  }
  @Get(':pId')
  consigueProducto(@Param('productId') productId: string) {
    return `product ${productId}`;
  }
}
