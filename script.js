let arr=[1,1,2]  




let arr2=[]  
for(let i=0; i<arr.length; i++){
    if(!(arr2.includes(arr[i]))){
     arr2.push(arr[i])
    }
}
console.log(arr2)




let number=prompt("please enter number")
for(let i=0; i<=number; i++){
    if(i%2==0){
    console.log(i)
    }
}



let salary=prompt("please enter your salary in last 8 months")
let sum=0

for(let i=0; i<salary.length; i++){
    sum+=+salary[i]
}

console.log(sum/salary.length)




let salary2=prompt("please enter your salary ")
if(salary2==17000){
    console.log("wealthy")
}
else if(salary2>=9000&salary2<17000){
    console.log("rich")
 
}
else{
    console.log("mashia be elsatr")
  
}
