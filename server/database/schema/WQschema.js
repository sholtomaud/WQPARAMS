var mongoose = require('mongoose');

var WQSchema = new mongoose.Schema({
  parameter_name: String,
  cas_no: String,
  units : String,
  accuracy : Number,
  precision : String,
  dimensions : String,
  agency_mappings: [{ 
      agency: String, 
      agency_last_update: Date, 
      agency_parameter_name : String, 
      agency_variable_number : Number, 
      agency_unit_code : String,
      agency_units : String,
      agency_shortname : String,
      agency_commnt : String,
      agency_minimum : String,
      agency_maximum : String,
      agency_accuracy : Number,
      agency_precision : Number,
      agency_dimensions : String
    }],
  last_update: Date,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  tags : [String]
});

module.exports = mongoose.model('wqparam', WQSchema);
