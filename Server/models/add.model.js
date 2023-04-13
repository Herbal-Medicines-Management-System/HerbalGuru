import mongoose from 'mongoose';
const { Schema } = mongoose;

const addSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    totalStars: {
      type: Number,
      default: 0,
    },
    startNumber: {
      type: Number,
      default: 0,
    },
    cat: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    cover: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      required: false,
    },
    availableQuntity: {
      type: Number,
      required: true,
    },
    shortTitle: {
      type: String,
      required: true,
    },
    features: {
      type: [String],
      required: false,
    },
    images: {
      type: String,
      required: true,
    },
    sales: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Add', addSchema);