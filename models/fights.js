const mongoose = require('mongoose');

const fightSchema = new mongoose.Schema({
  event_id: { 
    type: String, 
    required: true 
},
  fighter1_id: { 
    type:String, 
    required: true 
},
  fighter2_id: { 
    type:String, 
    required: true
},
  winner: { 
    type: String,
    required: true

},
  method: { 
    type: String, 
    enum: ['KO', 'Submission', 'Decision', 'DQ', 'Draw', 'No Contest', 'Disqualification', 'Pinfall'], 
    required: true 
},
  round: { 
    type: Number, 
    required: true 
},
  duration: { 
    type: String 
}, 
  weight_class: { 
    type: String 
}
});

// Adding indexes
fightSchema.index({ fighter1_id: 1 }); // For fast lookup of fights by fighter 1
fightSchema.index({ fighter2_id: 1 }); // For fast lookup of fights by fighter 2

//MODEL
const Fight = mongoose.model('Fight', fightSchema);

module.exports = Fight;
