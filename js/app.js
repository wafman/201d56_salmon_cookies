'use strict';

//global variable for all store hours
var hours = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ];

//initialize first store and then test funcitonality before expanding
var Pike = {
  //starting data
  name : 'Pike',
  minimum : 23,
  maximum : 65,
  average : 6.3,
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
      this.cookies.push(total);
      // console.log(total);
    }
    console.log('generateCookies');
    console.log(this.cookies);
    return Math.floor(this.cookies);
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
    // document.getElementById('obName').textContent = `${this.name}`;
    for(var l = 0; l < hours.length; l++){
      var liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      if(hours[l] < 12){
        var write = ` ${hours[l]}am: ${this.cookies[l]} cookies `;
        liElement.textContent = write;
      } else {
        if(hours[l] === 12){
          var write = ` ${hours[l]}pm: ${this.cookies[l]} cookies `;
          liElement.textContent = write;
        } else {
          hours[l] -= 12;
          var write = ` ${hours[l]}pm: ${this.cookies[l]} cookies `;
          liElement.textContent = write;
        }
        
      }
      
    }
    // document.textContent = 'total cookies';
  }
};

Pike.writeSales();
