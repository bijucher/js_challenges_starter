console.log("Hello Peter")
let change=[];
let money=39

console.log(Math.floor(money/20));
change.push(Math.floor(money/20));
//console.log(money-20*(Math.floor(money/20)));
money=(money-20*(Math.floor(money/20)));

console.log(Math.floor(money/10));
change.push(Math.floor(money/10));
//console.log(money-10*(Math.floor(money/10)));
money=(money-10*(Math.floor(money/10)));

console.log(Math.floor(money/5));
change.push(Math.floor(money/5));
//console.log(money-5*(Math.floor(money/5)));
money=(money-5*(Math.floor(money/5)));


console.log(Math.floor(money/1));
change.push(Math.floor(money/1));

console.log(change)
//console.log(money-1*(Math.floor(money/1)));
