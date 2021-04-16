import { Schema, Document } from 'mongoose';
export const IngredienteSchema = new Schema({
  nome: { type: String, required: true },
  medida: { type: String, required: true },
});
export interface Ingrediente extends Document {
  nome: string;
  medida: string;
}
