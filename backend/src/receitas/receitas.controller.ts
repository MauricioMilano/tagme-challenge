import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Receita } from './receitas.model';
import { Response } from 'express';
import { ReceitasService } from './receitas.service';
import { FilterQuery, Query } from 'mongoose';
import { JwtAuthGuard } from 'src/auth/shared/jwt-auth.guard';

@Controller('receitas')
export class ReceitasController {
  constructor(private readonly receitasService: ReceitasService) {}
  @UseGuards(JwtAuthGuard)
  @Post('new')
  async create(@Body() receita: Receita, @Res() res: Response) {
    try {
      let receitaCriada = await this.receitasService.create(receita);
      return res.status(HttpStatus.CREATED).send(receitaCriada);
    } catch (err) {
      res.status(HttpStatus.BAD_REQUEST);
    }
  }
  @UseGuards(JwtAuthGuard)
  @Get('all')
  async getAll() {
    return await this.receitasService.find();
  }
}
