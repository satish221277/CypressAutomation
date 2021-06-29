


var scores= [12,14,15,17,16,20]
var evenscore=[]
for (let i=0;i<scores.length;i++)
{

if(scores[i] %2 == 0)
{
   evenscore.push(scores[i])

}

}

// Arrey method //////////
console.log(evenscore)

let newvalue=scores.filter(marks=>marks%2==0)
console.log(newvalue)
let mappedarrey= newvalue.map(score=>score*3)
console.log(mappedarrey)

let sumvalue= mappedarrey.reduce((sum,map)=> sum+map,0)
console.log(sumvalue)


// The function declration //
let sumofint= (a,b)=> a+b

console.log(sumofint (2,4))