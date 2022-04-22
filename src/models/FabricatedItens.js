import { Schema, model } from 'mongoose';

const fabricatedItensSchema = new Schema({
  boughtItem: {
    type: Schema.Types.ObjectId, ref: 'boughtitens',
  },
  fabricatedCode: {
    type: String, minlength: 3, maxlength: 120,
  },
  Status: {
    type: String, minlength: 3, maxlength: 120,
  },
}, {
  timestamps: true,
});

const FabricatedItens = model('fabricatedItens', fabricatedItensSchema);

export default FabricatedItens;
