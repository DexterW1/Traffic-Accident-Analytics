function load(){
    //console.log("[INFO] Loading data ...");
    var data =  require("../db/data/data.json")  
    //console.log("[INFO] " + Object.keys(data).length + " records loaded");
    return data;
  }
  
  
  module.exports = {
    data: load(),
  }
  
  