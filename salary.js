const readline =require ('readline');

const rl =readline.createInterface({
    input:process.stdin,
    output: process.stdout

})



function grossSalary(basic,allowances,compensation){
    return basic+allowances+compensation;
  }


  function deductions(loan,insuarance){
  return loan+insuarance;
  }


  function netSalary(grossSalary,deductions){
  if (grossSalary < 10000){
    tax=0;
  }else if(grossSalary > 10000 && grossSalary < 70000){
    tax=grossSalary*0.11;
  }else if(grossSalary > 70000 && grossSalary < 100000){
    tax=grossSalary*0.13;
  }else if(grossSalary > 100000 && grossSalary < 150000){
    tax=grossSalary*0.15;
  }else if(grossSalary > 150000 && grossSalary < 200000){
    tax=grossSalary*0.17;
  }else{
    tax=grossSalary*0.19;
  }
  return grossSalary-tax-deductions;
  }

  const gross=rl.question('what was is your gross salary ?',(input) =>{
     gross=parseFloat(input);

    rl.close();
   })

