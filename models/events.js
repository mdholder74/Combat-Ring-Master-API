//IMPORT MONGOOSE
const mongoose = require('mongoose');

//CREATE SCHEMA
const eventSchema = new mongoose.Schema({
  promotion: { 
    type: String, 
    required: true 
},
  event_name: { 
    type: String, 
    required: true 
},
  date: { 
    type: Date, 
    required: true 
},
  location: { 
    type: String,
    required: true 
},
  main_event: {
    fighter1: { 
      type:String, 
      required: true 
    },
    fighter2: { 
      type:String, 
      required: true
    }
  },
  results: [
    {
      fight: { 
        type: String,
        required: true,
      },  
      winner: { 
        type: String,
        required: true,
      },
    }
  ]
});

// Adding indexes
eventSchema.index({ promotion: 1 }); // For filtering by promotion
eventSchema.index({ date: -1 }); // For sorting by date (newest events first)

//MODEL
const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
