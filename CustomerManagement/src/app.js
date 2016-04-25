angular.module('custManagement', [
  'ngComponentRouter'
])
.config(function($locationProvider) {
  $locationProvider.html5Mode(true);
})
.value('$routerRootComponent', 'cmHome')
.constant('customersDB', [
  {
    id: 1111,
    fname: 'Victor',
    lname: 'Bryan',
    city: 'Seattle',
    orders: [
      { name: 'iPod', qty: 1, price: 399 },
      { name: 'Speakers', qty: 1, price: 99 }
    ]
  },
  {
    id: 1112,
    fname: 'Lee',
    lname: 'Carroll',
    city: 'Phoenix',
    orders: [
      { name: 'iPod Nano', qty: 1, price: 199 },
      { name: 'Speakers', qty: 1, price: 49 },
      { name: 'Charger', qty: 1, price: 32 }
    ]
  },
  {
    id: 1113,
    fname: 'Erick',
    lname: 'Pittman',
    city: 'Chicago',
    orders: [
      { name: 'iPhone 6S', qty: 1, price: 799 },
      { name: 'Headphones', qty: 1, price: 79 }
    ]
  }
]);
