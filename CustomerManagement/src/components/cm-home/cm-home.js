angular.module('custManagement').component('cmHome', {
  templateUrl: 'components/cm-home/cm-home.html',
  $routeConfig: [
    { path: '/', name: 'Default', component: 'cmCustomers', useAsDefault: true },
    { path: '/customers/', name: 'Customers', component: 'cmCustomers' },
    { path: '/orders', name: 'Orders', component: 'cmOrders' }
  ]
});
