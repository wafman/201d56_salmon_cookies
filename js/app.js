'use strict';

//bugs to work out
//the render function on the new row call is causing the cookie total to be added 3 times. 


///++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                             DATA                                     \\
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//VARIABLES

//global variable for all store hours
var hours = ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am',
  '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm', '8:00 pm' ];

var stores = [];

var grandCookieTotal = 0;
// var grandCookieTotal = []; //changed from 0 to an array, will need to push to array, then iterate over aray when building totals row. 

var storesTable = document.getElementById('storesTable');

var storeForm = document.getElementById('createStore');


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

function addTableData(x, y){
  // console.log('addtableData function called');
  clearFooter();
  for(var i = 0; i < x.y; i++){
    // console.log('looping on add table data');
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.textContent = i;
    trEl.appendChild(tdEl);
  }
  makeFooterRow();
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
  // console.log('test message for generate table');
  for(var i = 0; i < stores.length; i++){
    // console.log(stores[i]);
    stores[i].render();
  }
  var allStoresTotalCookies = 0;
  for(var j = 0; j < stores.length; j++){
    allStoresTotalCookies += stores[j].totalCookies[j];
  }
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = allStoresTotalCookies;
  trEl.appendChild(tdEl);
}

//loop through hours then stores for footer row
function makeFooterRow(){
  var trEl = document.createElement('tr');
  trEl.id = 'footer';
  var thEl = document.createElement('th');
  // console.log(thEl);
  thEl.textContent = 'Hourly totals';
  trEl.appendChild(thEl);
  for(var i = 0; i < hours.length; i++){
    // console.log('looping hours');
    var hourlyTotal = 0;
    for(var k = 0; k < stores.length; k ++){
      // console.log('looping stores');
      hourlyTotal += stores[k].cookiesEachHour[i];
    }
    // console.log('hourly total is: ' + hourlyTotal);
    var tdEl = document.createElement('td');
    tdEl.textContent = hourlyTotal;
    trEl.appendChild(tdEl);
  }
  // var total = 0;
  // console.log('length of grandcookietotal is: ' + grandCookieTotal.length);
  // for(var j = 0; j < grandCookieTotal.length; j++){ //this whole for loop is new to generate through new grandcookietotal array
  //   console.log('j = ' + j);
  //   total += j;
    
  // }
  // console.log('grandcookietotal for loop total is: ' + total);
  thEl = document.createElement('th');
  thEl.textContent = grandCookieTotal; //changed from grandcookietotal when moving from number to array
  trEl.appendChild(thEl);
  // console.log(trEl);
  storesTable.appendChild(trEl);
}


//inspiration came from stackoverflow article at https://stackoverflow.com/questions/10686888/delete-last-row-in-table
function clearFooter() {
  // grandCookieTotal = 0;
  console.log('clear footer called');
  var target = document.getElementById('storesTable');
  var targetRow = target.rows.length;
  target.deleteRow(targetRow - 2);
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// EVENT HANDLERS

function addStoreToTable(event) {
  console.log('event submit works');
  event.preventDefault();
  // console.log('storeName is: ' + event.target.storeName.value);
  // console.log('storeLocation is: ' + event.target.storeLocation.value);
  // console.log('minCustomer is: ' + event.target.minCustomer.value);
  // console.log('maxCustomer is: ' + event.target.maxCustomer.value);
  // console.log('avgCookie is: ' + event.target.avgCookie.value);
  var storeName = event.target.storeName.value;
  var storeLocation = event.target.storeLocation.value;
  var minCustomer = event.target.minCustomer.value;
  var maxCustomer = event.target.maxCustomer.value;
  var avgCookie = event.target.avgCookie.value;
  var storeVariable = new Store(storeName, storeLocation, minCustomer, maxCustomer, avgCookie);
  storeVariable.render();
  console.log('new creation total cookies' + storeVariable.totalCookies);
  // grandCookieTotal.push(storeVariable.totalCookies);
  // storeVariable.generateCustomers();
  console.log('generateCustomers = ' + storeVariable.customersEachHour);
  // storeVariable.generateCookies();
  console.log('generateCookies = ' + storeVariable.generateCookies);
  // console.log('store name is: ' + storeName.storeName);
  addTableData(storeName, storeName.generateCookies);
  event.target.storeName.value = null;
  event.target.storeLocation.value = null;
  event.target.minCustomer.value = null;
  event.target.maxCustomer.value = null;
  event.target.avgCookie.value = null;
  // grandCookieTotal = 0; //added to try and reset cookie total when new row added
}




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


// renderTable();
makeHeaderRow();
generateStoresTable();
makeFooterRow();
// console.log('grandcookietotal is: ' + grandCookieTotal);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// EVENT LISTENERS
storeForm.addEventListener('submit', addStoreToTable);
