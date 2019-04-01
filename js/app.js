'use strict';

//global variable for all store hours
var hours = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ];

//initialize first store and then test funcitonality before expanding
var Pike = {
  //starting data
  minimum : [],
  maximum : [],
  average : [],
  customers : [],
  cookies: [],
  // total : ,

  // methods below here

  //this method generates random customer numbers for each our of the day
  generateCustomers : function cumstomerGenerator(){
    for(var i = 0; i < hours.length; i++){
      Math.floor(Math.random() * 66);
      console.log(i);
      this.customers.push(i);
    }
    console.log(this.customers);
    return this.customers;
  },
};
