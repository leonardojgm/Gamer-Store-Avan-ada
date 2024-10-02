import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PedidoModule } from './pedido/pedido.module';
import { ProdutoModule } from './produto/produto.module';
import { DbModule } from './db/db.module';
@Module({
  imports: [PedidoModule, ProdutoModule, DbModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
