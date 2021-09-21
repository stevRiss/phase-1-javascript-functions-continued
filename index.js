// Your code here


function wrapAdjective(flare="*"){

    // let special = "special";
    const innFunc = function adjective(special="special"){
        //flare = "*";
        return `You are ${flare}${special}${flare}!`;
   }
   return innFunc;
}
console.log(wrapAdjective()());

console.log(wrapAdjective("*")("a hardworker"));
console.log(wrapAdjective("||")("a dedicated programmer"));

function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}
console.log(saturdayFun("game"));

function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`

}