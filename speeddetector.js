const readline =require ('readline');

const rl =readline.createInterface({
    input:process.stdin,
    output: process.stdout
})




   function speedDetector(speed){
     if (speed <=70){
         return console.log('OK');
     }else{
         let points= Math.floor((speed-70)/5);
         if (points >=12){
             return console.log ('license suspended');
         }else{
             return console.log ('points: ' + points);
         }
     }
   }


   rl.question('what was the speed ?',(input) =>{
    const speed=parseFloat(input);
    const result = speedDetector(speed);
    console.log(result);
    rl.close();
   })