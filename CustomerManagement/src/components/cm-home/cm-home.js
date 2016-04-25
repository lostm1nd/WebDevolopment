angular.module('custManagement').component('cmHome', {
  templateUrl: 'components/cm-home/cm-home.html',
  $routeConfig: [
    { path: '/', component: 'cmCustomers', useAsDefault: true },
    { path: '/customers/', component: 'cmCustomers' },
    { path: '/customers/:id', component: 'cmCustomerDetails' },
    { path: '/orders', component: 'cmOrders' }
  ]
});
