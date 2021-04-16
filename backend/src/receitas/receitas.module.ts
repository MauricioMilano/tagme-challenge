import { ReceitasService } from './receitas.service';
import { Module } from '@nestjs/common';
import { ReceitasController } from './receitas.controller';
import { ReceitaSchema } from './receitas.model';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Receita',
        schema: ReceitaSchema,
      },
    ]),
  ],
  controllers: [ReceitasController],
  providers: [ReceitasService],
  exports: [ReceitasService],
})
export class ReceitasModule {}
