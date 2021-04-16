import { Schema, Document } from 'mongoose';
import { IngredienteSchema, Ingrediente } from './ingrediente.model';
export const ReceitaSchema = new Schema({
  nome: { type: String, required: true },
  ingredientes: { type: [IngredienteSchema], required: true },
  modoPreparo: { type: String, required: true },
  descricao: { type: String, required: true },
  image: { type: String, required: true },
});
export interface Receita extends Document {
  id: string;
  nome: string;
  descricao:string;
  image:string;
  ingredientes: Ingrediente[];
  modoPreparo: string;
}
