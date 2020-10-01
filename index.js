const myInfo = require('/home/wilder/Desktop/cowsaytest/information.js');
const cowsay = require("cowsay");


console.log(cowsay.say({
    text : `Hello I'm ${myInfo.name} from ${myInfo.campus} Campus! (Enjoy and have a good day)`,
    e : "oO",
    T : "U ",
}));
