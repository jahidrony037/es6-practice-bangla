const person = { name: "Rahim", phone: "0145", id: 56, age: 32, friends: ['jodu', 'modu', 'kodu'], gfName: "ema" };
const { friends } = person;
// console.log(friends);

const friendsName = ["sarukh khan", "Raba khan", "salman Khan", "Sakib Khan", "Jonaid Khan", "Amir Khan"];
const [...first] = friendsName;
console.log(first);

const details = {
    name: 'rony',
    info: {
        position: "leader",
        company: "software"
    },
    ammount: 555
};

const { position } = details.info;
console.log(position);