angular.module('custManagement').component('cmHome', {
  templateUrl: 'components/cm-home/cm-home.html',
  $routeConfig: [
    { path: '/customers/', component: 'cmCustomers', useAsDefault: true },
    { path: '/customers/:id', component: 'cmCustomerDetails' },
    { path: '/orders', component: 'cmOrders' }
  ]
});
