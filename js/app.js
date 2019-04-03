'use strict';

//issues to resolve still
//there is a glitch with the total function. it's generating totals
//that dont match with the hourly sales of cookies.

//global variable for all store hours
var hours = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ];

var stores = [];

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
  console.log('store prototype render');
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
    console.log(hours[i]);
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
}

//render function for table
// function renderTable() {

//   var tableEl = document.getElementById('storesTable');
//   console.log('about to build table');
//   //generates table head
//   for(var i = 0; i < hours.length; i++){
//     var trEl = document.createElement('tr');
//     var thEl = document.createElement('th');
//     if(hours[i] < 12){
//       var am = `${hours[i]}:00am`;
//       thEl.textContent = am;
//       trEl.appendChild(thEl);
//     } else {
//       if(hours[i] === 12){
//         var noon = `${hours[i]}:00pm`;
//         thEl.textContent = noon ;
//         trEl.appendChild(thEl);
//       } else {
//         hours[i] -= 12;
//         var pm = `${hours[i]}:00pm`;
//         thEl.textContent = pm;
//         trEl.appendChild(thEl);
//       }
//     }
//   }


//   //generates remaining table
//   // for(var j = 0; j < stores.length; j++){
//   //   var trEltd = document.createElement('tr');
//   //   var tdEl = document.createElement('td');
//   //   tableEl.appendChild(tdEl);
//   //   tdEl.textContent = `${this.storeName[j]}`;
//   //   for(var k = 0; this.cookiesEachHour; k++){
//   //     tdEl = document.createElement('td');
//   //     tableEl.appendChild(tdEl);
//   //     tdEl.textContent = `${this.cookiesEachHour[k]}`;
//   //   }
//   //   var tdTotal = document.createElement('td');
//   //   tableEl.appendChild(tdTotal);
//   //   tdTotal.textContent = `${this.totalCookies}`;
//   // }

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
