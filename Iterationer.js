let name = "lukas"
let chars = []
for(let i = 0; i < name.length; i++)
{chars.push(name[i])}

chars.forEach(c => {console.log(c)})

let bw = chars.map(c => {return c+c})
console.log(bw)

let q = [1,5,12,22]
let sum = q.reduce(n => {return})
let filtred = q.filter (n =>{return n !==5})


let sumWithInitial = q.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(sumWithInitial);
