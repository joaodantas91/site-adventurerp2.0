require('dotenv').config()
const mercadopago = require ('mercadopago');

// Configura credenciais
mercadopago.configure({
  access_token: 'PROD_ACCESS_TOKEN'
});

let vip50 = {
  items: [
    {
      title: 'vip50',
      unit_price: 50,
      quantity: 1,
    }
  ]
};

mercadopago.preferences.create(vip50)
.then(function(response){
// Este valor substituirá a string "$$init_point$$" no seu HTML
  global.init_point = response.body.init_point;
}).catch(function(error){
  console.log(error);
});