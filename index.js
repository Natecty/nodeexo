const cowsay = require("cowsay");

const userInfo = require('./information');

console.log(cowsay.say({

   text: `Hello ${userInfo.perso.myName} are you ok?`,
   e : "oO",
    T : "U "
}));