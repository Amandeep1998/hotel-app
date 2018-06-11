const fs = require('fs');


var calculateBill = () => {
  try {
    var orderSummary = JSON.parse(fs.readFileSync('trackFood.json'));
  } catch(e) {
    
  }

  var totalBill = 0;

  orderSummary.filter((food) => {
    totalBill += food.price;
  });

  return totalBill;
};


module.exports = {
  calculateBill
}
