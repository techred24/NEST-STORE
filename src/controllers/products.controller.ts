import { Controller, Get, Param, Query, Post, Body, Put, Delete } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  // @Get('products')
  // getProducts(@Query() params:any) {
  //   const { limit, offset } = params;
  //   return `products: limit=> ${limit}, offset=> ${offset}`
  // }
  @Get()
  consigueProductos(@Query('limit') limit = 100, @Query('offset') offset = 0, @Query('brand') brand:string) {
    return {
      message: `products: limit=> ${limit}, offset=> ${offset}, brand=> ${brand}`
    };
  }
  // products/filter must be above products/:productId otherwise it'll cause conflict
  @Get('filter')
  getProductFilter() {
    return 'Yo soy un filter';
  }
  @Get(':productId')
  getOne(@Param() params: any) {
    return `Parametros ${params.productId}`;
  }
  // @Get(':pId')
  // consigueProducto(@Param('pId') productId: string) {
  //   return `product ${productId}`;
  // }
  // Receiving just one attribute
  // create (@Body('price') price: number) {
    @Post()
    create (@Body() payload: any) {
    console.log(payload)
    return {
      message: 'Acción de crear',
      payload
    }
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload
    }
  }
  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      id
    }
  }
}
