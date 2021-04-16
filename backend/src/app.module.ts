import { ReceitasModule } from './receitas/receitas.module';
import { ReceitasController } from './receitas/receitas.controller';
import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ReceitasModule,
    AuthModule,
    MongooseModule.forRoot('mongodb+srv://milano:NO8i0JxiNR2pRgrt@cluster0.ezd0d.mongodb.net/tagme'),
  ],
  controllers: [ReceitasController, AppController],
  providers: [AppService],
})
export class AppModule {}
