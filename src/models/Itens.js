import { Schema, model } from 'mongoose';

const itensSchema = new Schema({
  description: {
    type: String, required: true, minlength: 3, maxlength: 120,
  },
  material: {
    type: String, required: true, minlength: 3, maxlength: 120,
  },
  dimensionsType: {
    type: String, enum: ['sheet', 'tube', 'fittings', 'others'], default: 'sheet',
  },
  dimensions1: {
    type: Number, required: true, min: 0, max: 50000,
  },
  dimensions2: {
    type: Number, required: true, min: 0, max: 50000,
  },
  dimensions3: {
    type: Number, min: 0, max: 50000,
  },
  dimensions4: {
    type: Number, min: 0, max: 50000,
  },
}, {
  timestamps: true,
});

const Itens = model('itens', itensSchema);

export default Itens;
