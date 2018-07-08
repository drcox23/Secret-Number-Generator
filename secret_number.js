'use strict';
module.exports = function() {
    const randNum = Math.floor(Math.random()*1000000);
    return function (){
        return randNum;
    }
    };
//   const secretNumber = function(){
//     return function (){
//         let secretNumberGenerator = Math.floor(Math.random()*1000000);
    // }
    // return secretNumber;
    // secretNumber();
