'use strict';

//issues to resolve still
//there is a glitch with the total function. it's generating totals
//that dont match with the hourly sales of cookies.

//global variable for all store hours
var hours = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ];

//initialize first store and then test funcitonality before expanding
var Pike = {
  //starting data
  name : 'Pike',
  location: '1st and Pike',
  minimum : 23,
  maximum : 65,
  average : 6.3,
  customers : [],
  cookies: [],
  total : 0,

  //this method generates random customer numbers for each our of the day
  generateRandom : function(){
    var randomNumber = Math.floor(Math.random() * Math.floor(this.maximum));
    return randomNumber;
  },

  //this method generates customer numbers for each hour
  generateCustomers : function(){
    for(var i = 0; i < hours.length; i++){
      this.customers.push(this.generateRandom());
      // console.log(i);
    }
    console.log('generate customers');
    console.log(this.customers);
    return this.customers;
  },

  //this method generates cookie totals from generateCustomers and avgerage
  generateCookies : function(){
    this.generateCustomers();
    for(var j = 0; j < this.customers.length; j++){
      var total = this.customers[j] * this.average;
      this.cookies.push(Math.round(total));
      // console.log(total);
    }
    console.log('generateCookies');
    console.log(this.cookies);
    return Math.round(this.cookies);
  },

  //this method generates the total amount of cookies
  generateTotal : function(){
    this.generateCookies();
    for(var k = 0; k < this.cookies.length; k++){
      this.total += Math.round(this.cookies[k]);
      console.log(this.total);
    }
    console.log('generate total');
    console.log(this.total);
    return this.total;
  },

  //print numbers to sales page
  writeSales : function(){
    this.generateCookies();
    var ulElement = document.createElement('ul');
    document.body.appendChild(ulElement);
    ulElement.textContent = this.location;
    // document.getElementById('obPike').textContent = this.location;
    for(var l = 0; l < hours.length; l++){
      var liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      if(hours[l] < 12){
        var am = ` ${hours[l]}am: ${this.cookies[l]} cookies `;
        liElement.textContent = am;
      } else {
        if(hours[l] === 12){
          var pm = ` ${hours[l]}pm: ${this.cookies[l]} cookies `;
          liElement.textContent = pm;
        } else {
          hours[l] -= 12;
          var noon = ` ${hours[l]}pm: ${this.cookies[l]} cookies `;
          liElement.textContent = noon;
        }
      }
    }
    var liTotal = document.createElement('li');
    ulElement.appendChild(liTotal);
    liTotal.textContent = `Total: ${this.generateTotal()}`;
  }
};


//initialize first store and then test funcitonality before expanding
var seaTac = {
  //starting data
  name : 'SeaTac',
  location: 'SeaTac Airport',
  minimum : 3,
  maximum : 24,
  average : 1.2,
  customers : [],
  cookies: [],
  total : 0,

  // methods below here

  //this method generates random customer numbers for each our of the day
  generateRandom : function(){
    var randomNumber = Math.floor(Math.random() * Math.floor(this.maximum));
    return randomNumber;
  },

  //this method generates customer numbers for each hour
  generateCustomers : function(){
    for(var i = 0; i < hours.length; i++){
      this.customers.push(this.generateRandom());
      // console.log(i);
    }
    console.log('generate customers');
    console.log(this.customers);
    return this.customers;
  },

  //this method generates cookie totals from generateCustomers and avgerage
  generateCookies : function(){
    this.generateCustomers();
    for(var j = 0; j < this.customers.length; j++){
      var total = this.customers[j] * this.average;
      this.cookies.push(Math.round(total));
      // console.log(total);
    }
    console.log('generateCookies');
    console.log(this.cookies);
    return Math.ceil(this.cookies);
  },

  //this method generates the total amount of cookies
  generateTotal : function(){
    this.generateCookies();
    for(var k = 0; k < this.cookies.length; k++){
      this.total += this.cookies[k];
      console.log(this.total);
    }
    console.log('generate total');
    console.log(this.total);
    return this.total;
  },

  //print numbers to sales page
  writeSales : function(){
    this.generateCookies();
    var ulElement = document.createElement('ul');
    document.body.appendChild(ulElement);
    ulElement.textContent = this.location;
    // document.getElementById('obSeaTac').textContent = this.location;
    for(var l = 0; l < hours.length; l++){
      var liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      if(hours[l] < 12){
        var am = ` ${hours[l]}am: ${this.cookies[l]} cookies `;
        liElement.textContent = am;
      } else {
        if(hours[l] === 12){
          var pm = ` ${hours[l]}pm: ${this.cookies[l]} cookies `;
          liElement.textContent = pm;
        } else {
          hours[l] -= 12;
          var noon = ` ${hours[l]}pm: ${this.cookies[l]} cookies `;
          liElement.textContent = noon;
        }
      }
    }
    var liTotal = document.createElement('li');
    ulElement.appendChild(liTotal);
    liTotal.textContent = `Total: ${this.generateTotal()}`;
  }
};

//initialize first store and then test funcitonality before expanding
var seaCenter = {
  //starting data
  name : 'Seattle Center',
  location: 'Seattle Center',
  minimum : 11,
  maximum : 38,
  average : 3.7,
  customers : [],
  cookies: [],
  total : 0,

  // methods below here

  //this method generates random customer numbers for each our of the day
  generateRandom : function(){
    var randomNumber = Math.floor(Math.random() * Math.floor(this.maximum));
    return randomNumber;
  },

  //this method generates customer numbers for each hour
  generateCustomers : function(){
    for(var i = 0; i < hours.length; i++){
      this.customers.push(this.generateRandom());
      // console.log(i);
    }
    console.log('generate customers');
    console.log(this.customers);
    return this.customers;
  },

  //this method generates cookie totals from generateCustomers and avgerage
  generateCookies : function(){
    this.generateCustomers();
    for(var j = 0; j < this.customers.length; j++){
      var total = this.customers[j] * this.average;
      this.cookies.push(Math.round(total));
      // console.log(total);
    }
    console.log('generateCookies');
    console.log(this.cookies);
    return Math.ceil(this.cookies);
  },

  //this method generates the total amount of cookies
  generateTotal : function(){
    this.generateCookies();
    for(var k = 0; k < this.cookies.length; k++){
      this.total += this.cookies[k];
      console.log(this.total);
    }
    console.log('generate total');
    console.log(this.total);
    return this.total;
  },

  //print numbers to sales page
  writeSales : function(){
    this.generateCookies();
    var ulElement = document.createElement('ul');
    document.body.appendChild(ulElement);
    ulElement.textContent = this.location;
    // document.getElementById('obSeaCenter').textContent = this.location;
    for(var l = 0; l < hours.length; l++){
      var liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      if(hours[l] < 12){
        var am = ` ${hours[l]}am: ${this.cookies[l]} cookies `;
        liElement.textContent = am;
      } else {
        if(hours[l] === 12){
          var pm = ` ${hours[l]}pm: ${this.cookies[l]} cookies `;
          liElement.textContent = pm;
        } else {
          hours[l] -= 12;
          var noon = ` ${hours[l]}pm: ${this.cookies[l]} cookies `;
          liElement.textContent = noon;
        }
      }
    }
    var liTotal = document.createElement('li');
    ulElement.appendChild(liTotal);
    liTotal.textContent = `Total: ${this.generateTotal()}`;
  }
};


//initialize first store and then test funcitonality before expanding
var capHill = {
  //starting data
  name : 'Capital Hill',
  location: 'Capital Hill',
  minimum : 20,
  maximum : 38,
  average : 2.3,
  customers : [],
  cookies: [],
  total : 0,

  // methods below here

  //this method generates random customer numbers for each our of the day
  generateRandom : function(){
    var randomNumber = Math.floor(Math.random() * Math.floor(this.maximum));
    return randomNumber;
  },

  //this method generates customer numbers for each hour
  generateCustomers : function(){
    for(var i = 0; i < hours.length; i++){
      this.customers.push(this.generateRandom());
      // console.log(i);
    }
    console.log('generate customers');
    console.log(this.customers);
    return this.customers;
  },

  //this method generates cookie totals from generateCustomers and avgerage
  generateCookies : function(){
    this.generateCustomers();
    for(var j = 0; j < this.customers.length; j++){
      var total = this.customers[j] * this.average;
      this.cookies.push(Math.round(total));
      // console.log(total);
    }
    console.log('generateCookies');
    console.log(this.cookies);
    return Math.ceil(this.cookies);
  },

  //this method generates the total amount of cookies
  generateTotal : function(){
    this.generateCookies();
    for(var k = 0; k < this.cookies.length; k++){
      this.total += this.cookies[k];
      console.log(this.total);
    }
    console.log('generate total');
    console.log(this.total);
    return this.total;
  },

  //print numbers to sales page
  writeSales : function(){
    this.generateCookies();
    var ulElement = document.createElement('ul');
    document.body.appendChild(ulElement);
    ulElement.textContent = this.location;
    // document.getElementById('obCapHill').textContent = this.location;
    for(var l = 0; l < hours.length; l++){
      var liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      if(hours[l] < 12){
        var am = ` ${hours[l]}am: ${this.cookies[l]} cookies `;
        liElement.textContent = am;
      } else {
        if(hours[l] === 12){
          var pm = ` ${hours[l]}pm: ${this.cookies[l]} cookies `;
          liElement.textContent = pm;
        } else {
          hours[l] -= 12;
          var noon = ` ${hours[l]}pm: ${this.cookies[l]} cookies `;
          liElement.textContent = noon;
        }
      }
    }
    var liTotal = document.createElement('li');
    ulElement.appendChild(liTotal);
    liTotal.textContent = `Total: ${this.generateTotal()}`;
  }
};

//initialize first store and then test funcitonality before expanding
var alki = {
  //starting data
  name : 'Alki',
  location: 'Alki',
  minimum : 2,
  maximum : 16,
  average : 4.6,
  customers : [],
  cookies: [],
  total : 0,

  // methods below here

  //this method generates random customer numbers for each our of the day
  generateRandom : function(){
    var randomNumber = Math.floor(Math.random() * Math.floor(this.maximum));
    return randomNumber;
  },

  //this method generates customer numbers for each hour
  generateCustomers : function(){
    for(var i = 0; i < hours.length; i++){
      this.customers.push(this.generateRandom());
      // console.log(i);
    }
    console.log('generate customers');
    console.log(this.customers);
    return this.customers;
  },

  //this method generates cookie totals from generateCustomers and avgerage
  generateCookies : function(){
    this.generateCustomers();
    for(var j = 0; j < this.customers.length; j++){
      var total = this.customers[j] * this.average;
      this.cookies.push(Math.round(total));
      // console.log(total);
    }
    console.log('generateCookies');
    console.log(this.cookies);
    return Math.ceil(this.cookies);
  },

  //this method generates the total amount of cookies
  generateTotal : function(){
    this.generateCookies();
    for(var k = 0; k < this.cookies.length; k++){
      this.total += this.cookies[k];
      console.log(this.total);
    }
    console.log('generate total');
    console.log(this.total);
    return this.total;
  },

  //print numbers to sales page
  writeSales : function(){
    this.generateCookies();
    var ulElement = document.createElement('ul');
    document.body.appendChild(ulElement);
    ulElement.textContent = this.location;
    // document.getElementById('obAlki').textContent = this.location;
    for(var l = 0; l < hours.length; l++){
      var liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      if(hours[l] < 12){
        var am = ` ${hours[l]}am: ${this.cookies[l]} cookies `;
        liElement.textContent = am;
      } else {
        if(hours[l] === 12){
          var pm = ` ${hours[l]}pm: ${this.cookies[l]} cookies `;
          liElement.textContent = pm;
        } else {
          hours[l] -= 12;
          var noon = ` ${hours[l]}pm: ${this.cookies[l]} cookies `;
          liElement.textContent = noon;
        }
      }
    }
    var liTotal = document.createElement('li');
    ulElement.appendChild(liTotal);
    liTotal.textContent = `Total: ${this.generateTotal()}`;
  }
};

Pike.writeSales();
seaTac.writeSales();
seaCenter.writeSales();
capHill.writeSales();
alki.writeSales();
