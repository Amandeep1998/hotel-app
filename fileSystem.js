const fs = require('fs');

var fetchItems = () => {
  try {
    var noteString = fs.readFileSync("trackFood.json");
    return JSON.parse(noteString);
  } catch(e) {
    return [];
  }
}

var itemTrack = (log) => {
  var results = fetchItems();
  results.push(log);
  fs.writeFileSync('trackFood.json', JSON.stringify(results));
}


module.exports = {
  itemTrack
}
