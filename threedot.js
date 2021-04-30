const ages = [12, 132, 12, 14, 16];
const ages2 = [23, 45, 56];
const ages3 = [23, 34, 32, 30];
//const allAges = ages.concat(ages2).concat(ages3).concat([5]);
//spread operator ...
const allAges = [...ages, ...ages2, ...ages3, 5]

// console.log(allAges);

const business = 640;
const mister = 450;
const socib = 350;

const max = Math.max(business, mister, socib);

const ages1 = [45, 6, 7, 50, 43, 23, 43];
const maxAge = Math.max(...ages1);

console.log(maxAge);