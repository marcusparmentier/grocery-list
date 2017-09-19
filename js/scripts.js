$(document).ready(function() {
  $("#formGrocery").submit(function(event) {
    var items = ["item1", "item2", "item3", "item4", "item5", "item6", "item7"];
    var goods = [];

    items.forEach(function(item) {
      var userInput = $("input#" + item).val();
      goods.push(userInput);
    });

     var sortGoods = goods.map(function(good) {
       return good.toUpperCase();
     });

    // $("." + blank).text(userInput);
    // $("#list").show();
    // 
    event.preventDefault();

  });
});
