function PizzaOrder(size, cheese) {
  this.size = size;
  this.sauce = 1;
  this.cheese = cheese;
  this.meat1 = 2;
  this.meat2 = 2;
  this.veggie1 = 1;
  this.veggie2 = 1;
  this.price = 0;
}
PizzaOrder.prototype.cost = function () {
  if(this.size ==="small"){
    this.price += 6;
  }else if (this.size ==="medium"){
    this.price += 8;
  }else if (this.size ==="large"){
    this.price += 12;
  }else if (this.size ==="XL")
    this.price += 15
  if(this.cheese ==="regular cheese") {
    this.price += 1;
  } else if (this.cheese ==="light cheese") {
    this.price += 0.5;
  } else if (this.cheese ==="extra cheese") {
    this.price += 1.5;
  } else if (this.cheese ==="none") {
    this.price += 0;
  }
  this.price += this.sauce;
  this.price += this.meat1
  this.price += this.meat2
  this.price += this.veggie1
  this.price += this.veggie2
  return this.price;
}


$(document).ready(function (event){
  $('form#pizzaOrder').submit(function (event){
    event.preventDefault();
    let size = $('select#size').val();
    let sauce = $('select#sauce').val();
    let cheese = $('select#cheese').val();
    let meat1 = $('select#meat1').val();
    let meat2 = $('select#meat2').val();
    let veggie1 = $('select#veggie1').val();
    let veggie2 = $('select#veggie2').val();
    let pizzaOrder = new PizzaOrder(size,cheese);
    let price =pizzaOrder.cost();
    console.log(price);
  })
  
})