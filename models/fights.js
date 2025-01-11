const mongoose = require('mongoose');

const fightSchema = new mongoose.Schema({
  event_id: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Event', 
    required: true 
},
  fighter1_id: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Fighter', 
    required: true 
},
  fighter2_id: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Fighter', 
    required: true 
},
  winner: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Fighter' 
},
  method: { 
    type: String, 
    enum: ['KO', 'Submission', 'Decision', 'DQ'], 
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
fightSchema.index({ event_id: 1 }); // For fast lookup of fights by event
fightSchema.index({ fighter1_id: 1 }); // For fast lookup of fights by fighter 1
fightSchema.index({ fighter2_id: 1 }); // For fast lookup of fights by fighter 2

//MODEL
const Fight = mongoose.model('Fight', fightSchema);

module.exports = Fight;
