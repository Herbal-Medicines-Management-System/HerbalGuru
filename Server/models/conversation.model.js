import mongoose from 'mongoose';
const { Schema } = mongoose;

const ConversationSchema = new Schema(
  {
    Id:{
        type:'String',
        required: true,
    },
    sellerId:{
        type:'String',
        required: true,
    },
    buyerId:{
        type:'String',
        required: true,
    },
    readBySeller:{
        type:'Boolean',
        required: true,
    },
    readByBuyer:{
        type:'boolean',
        required: true,
    },
    lastMessage:{
        type:'String',
        required: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Conversation', ConversationSchema);
