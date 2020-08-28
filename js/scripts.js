// -----------------------backend logic----------------------
let pizzaArray = [];
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
  if (this.size === "Small") {
    this.price += 6;
  } else if (this.size === "Medium") {
    this.price += 8;
  } else if (this.size === "Large") {
    this.price += 12;
  } else if (this.size === "XL")
    this.price += 15
  if (this.cheese === "Regular cheese") {
    this.price += 1;
  } else if (this.cheese === "Light cheese") {
    this.price += 0.50;
  } else if (this.cheese === "Extra cheese") {
    this.price += 2;
  } else if (this.cheese === "No cheese") {
    this.price += 0;
  }
  this.price += this.sauce;
  this.price += this.meat1
  this.price += this.meat2
  this.price += this.veggie1
  this.price += this.veggie2
  return this.price;
}
PizzaOrder.prototype.totalPrice = function () {
  let totalPrice = 0;
  for (let i = 0; i < pizzaArray.length; i++) {
    totalPrice += pizzaArray[i];
  }
  return totalPrice;
}
function Address(firstName, lastName, address, city, zipCode) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.streetAddress = address;
  this.city = city;
  this.zipCode = zipCode;
  this.deliveryAddress = (firstName + " " + lastName + ", " + address + ", " + city + ", " + zipCode);
}


// -----------------------user interface--------------------------
$(document).ready(function (event) {
  $("#pickup").click(function () {
    $("#greeting").hide();
    $("#pic").hide();
    $("#order-form").show();
    $("#cart").show();
    $("#option").text("Customer is going to Pickup");
  });
  $("#delivery").click(function () {
    $("#greeting").hide();
    $("#pic").hide();
    $("#address-form").show();

  });
  $("#address").submit(function (event) {
    event.preventDefault();
    let firstName = $('input#firstName').val();
    let lastName = $('input#lastName').val();
    let address = $('input#street').val();
    let city = $('input#city').val();
    let zipCode = $('input#zip').val();
    let delivery = new Address(firstName, lastName, address, city, zipCode);
    $("#address-form").hide();
    $("#order-form").show();
    $("#cart").show();
    $("#option").text("Address to Deliver to : " + delivery.deliveryAddress);
  })


  $('form#pizzaOrder').submit(function (event) {
    event.preventDefault();
    let size = $('select#size').val();
    let sauce = $('select#sauce').val();
    let cheese = $('select#cheese').val();
    let meat1 = $('select#meat1').val();
    let meat2 = $('select#meat2').val();
    let veggie1 = $('select#veggie1').val();
    let veggie2 = $('select#veggie2').val();
    let pizzaOrder = new PizzaOrder(size, cheese);
    let details = (size + ", " + sauce + ", " + cheese + ", " + meat1 + ", " + meat2 + ", " + veggie1 + " and " + veggie2)
    let price = pizzaOrder.cost();
    pizzaArray.push(price);
    $("#order-details-dropdown").show();
    $("#cost").text(pizzaOrder.totalPrice);
    $("#pizza-details").append("<ul><li>" + details + "</li></ul>");

    // $("#size, #sauce, #cheese,#meat1,#meat2,#veggie1, #veggie2,").val("");
  });
  $("#order-details-dropdown").click(function () {
    $("#pizza-details").toggle();
  });
  $("#checkout-btn").click(function () {
    location.reload();
  })
})





