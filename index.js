var moment = require('moment');
moment.locale('es');
console.log('Naci '+ moment('19/06/1996', 'DD/MM/YYYY').fromNow());

