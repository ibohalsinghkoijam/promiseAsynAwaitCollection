//Sounds like a real good question, can you please explain this @vamsee ?

function echo(message){
  return new Promise((Resolve, Reject) => {
     if(message){
       Resolve(message)
     } else {
        Reject('No Message')
     }
 });
}

echo('Hello Uma')
.then(r => console.log(r))
.then(r => console.log(r))
.then(r => console.log(r));

//what is the difference b/w
for(var i=1;i<=5;i++)
{
    setTimeout(()=>{
        console.log(i)
    },1000);
} 
//vs
for(let i=1;i<=5;i++){
    setTimeout(()=>{
        console.log(i)
    },1000);
}