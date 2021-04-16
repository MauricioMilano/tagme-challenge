import { Receita } from '../receitas/receitas.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FilterQuery } from 'mongoose';
@Injectable()
export class ReceitasService {
  constructor(
    @InjectModel('Receita') private readonly receitaModel: Model<Receita>,
  ) {}
  async create(receita: Receita) {
    try {
      const result = await new this.receitaModel(receita).save();
      console.log(
        'ReceitasService :: Create :: result :: ' +
          JSON.stringify(result, null, 2),
      );
      return result;
    } catch (err) {
      console.error('ReceitasService :: Create :: Error :: ' + err);
      throw err;
    }
  }
  async find() {
    let result = await this.receitaModel.find();
    return result;
  }
}
