var dosa = {
  name : 'dosa',
  price : 30,
  id : 1
}

var idli = {
  name : 'idli',
  price : 20,
  id : 2
}

var foodList = [dosa, idli];

var foodDetails = (selectedFood) => {
  var details = foodList.filter((food) => {
    return selectedFood == food.name;
  });
  return details[0];
};



module.exports = {
  foodDetails
}
