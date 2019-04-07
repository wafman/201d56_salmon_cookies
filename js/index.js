'use strict';



///++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                             DATA                                     \\
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//VARIABLES

//global variable for all store hours
var hours = ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am',
  '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm', '8:00 pm' ];

var stores = [];


var storesTable = document.getElementById('storesTable');


var hoursTable = document.getElementById('hoursTable');


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//CONSTRUCTOR FUNCTIONS

//constructor call
function Store(storeName, storeLocation, minCustomerPerHour, maxCustomerPerHour, avgCookiePerHour) {
  this.storeName = storeName;
  this.storeLocation = storeLocation;
  this.minCustomerPerHour = minCustomerPerHour;
  this.maxCustomerPerHour = maxCustomerPerHour;
  this.avgCookiePerHour = avgCookiePerHour;
  this.customersEachHour = [];
  this.cookiesEachHour = [];
  this.totalCookies = 0;
  stores.push(this);
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                    DEFINE BEHAVIORS/ACTIONS                          \\
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// HELPER FUNCTIONS

//this method generates random customer numbers for each our of the day
function generateRandom(max, min){
  //uses code from javascript mdn for random functions
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// CORE FUNCTIONS

//this function generates the customers each hour
Store.prototype.generateCustomers = function() {
  for(var i = 0; i < hours.length; i++){
    this.customersEachHour.push(generateRandom(this.maxCustomerPerHour, this.minCustomerPerHour));
    // console.log('customers this hours = ' + this.customersEachHour[i]);
  }
  return this.customersEachHour;
};

//this function generates the cookies per hours and adds to the total.
Store.prototype.generateCookies = function() {
  // this.generateCustomers();
  for(var i = 0; i < hours.length; i++){
    var oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiePerHour);
    this.cookiesEachHour.push(oneHour);
    // console.log('cookies this hours: ' + this.cookiesEachHour[i]);
    this.totalCookies += oneHour;
  }
  // grandCookieTotal.push(this.totalCookies);
  grandCookieTotal += this.totalCookies;
  // console.log('total cookies is: ' + this.totalCookies);
  return this.cookiesEachHour;
};



//render object table
Store.prototype.render = function() {
  this.generateCustomers();
  this.generateCookies();
  // console.log('store prototype render');
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.storeName;
  trEl.appendChild(tdEl);
  for(var i = 0; i < this.cookiesEachHour.length; i++){
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesEachHour[i];
    trEl.appendChild(tdEl);
  }
  tdEl = document.createElement('td');
  tdEl.textContent = this.totalCookies;
  trEl.appendChild(tdEl);
  storesTable.appendChild(trEl);
};


function generateHoursTableHeader(){
  console.log('generating hours table on index page');
  var header = ['Store', 'Location', 'Open', 'Close', 'Contact'];
  var hoursTrEl = document.createElement('tr');
  var thTableEl = document.createElement('th');
  for(var i = 0; i < header.length; i++){
    thTableEl = document.createElement('th');
    thTableEl.textContent = header[i];
    hoursTrEl.appendChild(thTableEl);
  }
  hoursTable.appendChild(hoursTrEl);
}

function generateHoursTable(){
  generateHoursTableHeader();
  var hoursTrEl = document.createElement('tr');
  for(var i = 0; i < stores.length; i++){
    //generates store name
    hoursTrEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.textContent = stores[i].storeName;
    hoursTrEl.appendChild(tdEl);
    //generates store location
    var tdLocation = document.createElement('td');
    tdLocation.textContent = stores[i].storeLocation;
    hoursTrEl.appendChild(tdLocation);
    //generates open hours
    var tdEl1 = document.createElement('td');
    tdEl1.textContent = hours[0];
    hoursTrEl.appendChild(tdEl1);
    //generates close hours
    var tdEl2 = document.createElement('td');
    tdEl2.textContent = hours[hours.length -1];
    hoursTrEl.appendChild(tdEl2);
    //generates store contact hours
    var tdContact = document.createElement('td');
    tdContact.textContent = '253-555-5555';
    hoursTrEl.appendChild(tdContact);
    hoursTable.appendChild(hoursTrEl);
  }
}



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// EVENT HANDLERS






//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                        EXECUTABLE CODE                               \\
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// FUNCTION CALLS


//testing constructor
var pike = new Store('Pike', '1st and Pike', 23, 65, 6.3);
var seaTac = new Store('Airport', 'SeaTac Airport', 3, 24, 1.2);
var seaCenter = new Store('Center', 'Seattle Center', 11, 38, 3.7);
var capHill = new Store('Capital', 'Capital Hill', 20, 38, 2.3);
var alki = new Store('Alki', 'Alki', 2, 16, 4.6);


generateHoursTable();

// console.log('grandcookietotal is: ' + grandCookieTotal);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// EVENT LISTENERS

