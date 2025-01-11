const mongoose = require('mongoose');

const fighterSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true, 
    unique: true 
},
  nickname: { 
    type: String 
},
  weight_class: { 
    type: String, 
    required: true 
},
  record: {
    wins: { 
        type: Number, 
        default: 0 
    },
    losses: { 
        type: Number, 
        default: 0 
    },
    draws: { 
        type: Number, 
        default: 0 
    }
  },
  style: { 
    type: [String], 
    default: [] 
},
  gym: { 
    type: String 
},
  nationality: { 
    type: String 
},
  active: { 
    type: Boolean, 
    default: true 
}
});

// Adding indexes
fighterSchema.index({ name: 1 }); // For fast lookups by name
fighterSchema.index({ nickname: 1 }); // For searching by nickname
fighterSchema.index({ weight_class: 1 }); // For filtering by weight class

//MODEL
const Fighter = mongoose.model('Fighter', fighterSchema);

module.exports = Fighter;
