angular.module('custManagement').component('cmHome', {
  templateUrl: 'components/cm-home/cm-home.html',
  $routeConfig: [
    { path: '/customers', name: 'Customers', component: 'cmCustomers', useAsDefault: true },
    { path: '/orders', name: 'Orders', component: 'cmOrders' }
  ]
});
