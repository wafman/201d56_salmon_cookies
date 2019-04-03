'use strict';

//global variable for all store hours
var hours = ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am',
  '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm', '8:00 pm' ];

var stores = [];

var hourlyTotal = [];

var storesTable = document.getElementById('storesTable');

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

//begin functions

//this method generates random customer numbers for each our of the day
function generateRandom(max, min){
  //uses code from javascript mdn for random functions
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//this function generates the customers each hour
Store.prototype.generateCustomers = function() {
  for(var i = 0; i < hours.length; i++){
    this.customersEachHour.push(generateRandom(this.maxCustomerPerHour, this.minCustomerPerHour));
    console.log('customers this hours = ' + this.customersEachHour[i]);
  }
  return this.customersEachHour;
};

//this function generates the cookies per hours and adds to the total.
Store.prototype.generateCookies = function() {
  // this.generateCustomers();
  for(var i = 0; i < hours.length; i++){
    var oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiePerHour);
    this.cookiesEachHour.push(oneHour);
    console.log('cookies this hours: ' + this.cookiesEachHour[i]);
    this.totalCookies += oneHour;
    for(var j = 0; j < stores.length; j++){
      
    }
    hourlyTotal.push(oneHour);//new line for calculating hourly cookie total
  }
  console.log('total cookies is: ' + this.totalCookies);
  return this.cookiesEachHour;
};

//render function for lists
// Store.prototype.render = function() {
//   this.generateCustomers();
//   this.generateCookies();
//   var ulElement = document.getElementById(this.storeName);
//   ulElement.textContent = `${this.storeLocation}`;
//   for(var i = 0; i < hours.length; i++){
//     var liElement = document.createElement('li');
//     ulElement.appendChild(liElement);
//     if(hours[i] < 12){
//       var am = `${hours[i]}am: ${this.cookiesEachHour[i]} cookies`;
//       liElement.textContent = am;
//     } else {
//       if(hours[i] === 12){
//         var noon = `${hours[i]}pm: ${this.cookiesEachHour[i]} cookies`;
//         liElement.textContent = noon;
//       } else {
//         hours[i] -= 12;
//         var pm = `${hours[i]}pm: ${this.cookiesEachHour[i]} cookies`;
//         liElement.textContent = pm;
//       }
//     }
//   }
//   var liTotal = document.createElement('li');
//   ulElement.appendChild(liTotal);
//   liTotal.textContent = `Total: ${this.totalCookies}`;
// };

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


function makeHeaderRow(){
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Location:';
  trEl.appendChild(thEl);
  for(var i = 0; i < hours.length +1; i++){
    // console.log(hours[i]);
    thEl = document.createElement('th');
    thEl.textContent = `${hours[i]}`;
    trEl.appendChild(thEl);
    storesTable.appendChild(trEl);
  }
  thEl.textContent = 'Daily Location Total';
  trEl.appendChild(thEl);
  storesTable.appendChild(trEl);
}

function generateStoresTable(){
  console.log('test message for generate table');
  for(var i = 0; i < stores.length; i++){
    // console.log(stores[i]);
    stores[i].render();
  }
  //need to generate new row with hourly total of all stores
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = 'Total:';
  trEl.appendChild(tdEl);
  var allStoresTotalCookies = 0;
  var tempHourCookieVariable = 0;
  for(var j = 0; j < stores.length; j++){
    allStoresTotalCookies += stores[j].totalCookies[j];
  }
  hourlyTotal.push(tempHourCookieVariable);
  console.log(hourlyTotal);
  tdEl = document.createElement('td');
  tdEl.textContent = allStoresTotalCookies;
  trEl.appendChild(tdEl);
}

console.log(hourlyTotal);

// function makeFooterRow(){
//   for(var i = 0; i < hours.length; i++){
    
//     for(var j = 0; j < stores.length; j++){
//       stores[j].render();
//       for(var k = 0; j < this.cookiesEachHour.length; k++){
//         console.log(this.cookiesEachHour[k]);
//         thEl = document.createElement('th');
//         hourlyTotal += stores[j].cookiesEachHour;
//         thEl.textContent = `${hours[k]}`;
//         // trEl.appendChild(thEl);
//         // storesTable.appendChild(trEl);
//       }
//     }

//   }
//   var trEl = document.createElement('tr');
//   var thEl = document.createElement('th');
//   thEl.textContent = 'Hourly Total:';
//   trEl.appendChild(thEl);
// }

//testing constructor
var pike = new Store('Pike', '1st and Pike', 23, 65, 6.3);
var seaTac = new Store('Airport', 'SeaTac Airport', 3, 24, 1.2);
var seaCenter = new Store('Center', 'Seattle Center', 11, 38, 3.7);
var capHill = new Store('Capital', 'Capital Hill', 20, 38, 2.3);
var alki = new Store('Alki', 'Alki', 2, 16, 4.6);

// pike.render();
// seaTac.render();
// seaCenter.render();
// capHill.render();
// alki.render();

// renderTable();
makeHeaderRow();
generateStoresTable();
// makeFooterRow();
