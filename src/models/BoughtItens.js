import { Schema, model } from 'mongoose';

const boughtItensSchema = new Schema({
  item: {
    type: Schema.Types.ObjectId, ref: 'itens',
  },
  Construction: {
    type: String, minlength: 3, maxlength: 120,
  },
  quantity: {
    type: Number, required: true, min: 0, max: 500000,
  },
  quantityUnit: {
    type: String, required: true, minlength: 0, maxlength: 500,
  },
  nf: {
    type: String, required: true, minlength: 0, maxlength: 500,
  },
  certificate: {
    type: String, minlength: 0, maxlength: 500,
  },
  heat: {
    type: String, minlength: 0, maxlength: 500,
  },
  status: {
    type: String, minlength: 0, maxlength: 500,
  },
  TBTcode: {
    type: String, minlength: 0, maxlength: 500,
  },
}, {
  timestamps: true,
});

const BoughtItens = model('boughtItens', boughtItensSchema);

export default BoughtItens;
