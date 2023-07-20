//resultado

let chainNumber="";
let operando="0";
let signo="0";


//FUNCIÓN para el resultado
const ResultFunction=()=>{
    if(chainNumber.trim()==""){
        document.getElementById("resultado").innerHTML="0";
        if (operando.trim()=="") document.getElementById("historicos").innerHTML="0";
            else document.getElementById("historicos").innerHTML=operando;
    }else{
        document.getElementById("resultado").innerHTML=chainNumber;
        document.getElementById("historicos").innerHTML=operando;
    
    }
    
}

//FUNCTION: Seleccionar los números
const ConcatNumber=(numberChar)=>{
    chainNumber+=numberChar;    
    ResultFunction();
}

//FUNCTION: Suma
const SumNumbers=()=>{
    if(signo=="+")chainNumber=parseFloat(operando)+ parseFloat(chainNumber);
    AcumValue();
    signo="+";
    chainNumber="";
    ResultFunction();
    
    }

const RestNumbers=()=>{
    if(signo=="-")  chainNumber=parseFloat(operando) - parseFloat(chainNumber);
    AcumValue();
    signo="-";
    chainNumber="";
    ResultFunction();
      
        }
const MultNumbers=()=>{
    if(signo=="*") chainNumber=parseFloat(operando) * parseFloat(chainNumber);
    AcumValue();
    signo="*";
    chainNumber="";
    ResultFunction();
    }

const DiviNumbers=()=>{
    if(signo=="/") chainNumber=parseFloat(operando) / parseFloat(chainNumber);
    AcumValue();
    signo="/";
    chainNumber="";
    ResultFunction();
   }

const PorctNumbers=()=>{
    if(signo=="%") chainNumber=(parseFloat(operando) % parseFloat(chainNumber))/100;
    AcumValue();
    signo="%";
    chainNumber="";
    ResultFunction();
    }

const LimptNumbers=()=>{
        signo="0";
        chainNumber="";
        AcumValue();
        ResultFunction();
    }
   
//FUNCTION: Resta
const ResultEqual=()=>{
    if (signo=="0"){
         ResultFunction(); 
     }else if (signo=="+")chainNumber=`${parseFloat(operando)+ parseFloat(chainNumber)}`;
              else if (signo=="-")chainNumber=`${parseFloat(operando)- parseFloat(chainNumber)}`; 
                     else   if (signo=="*") chainNumber=`${parseFloat(operando)* parseFloat(chainNumber)}`; 
                        else if (signo=="/") chainNumber=`${parseFloat(operando)/ parseFloat(chainNumber)}`; 
                               else if (signo=="%") chainNumber=`${(parseFloat(operando)* parseFloat(chainNumber))/100}`;                                     
    AcumValue();
    ResultFunction();  
    operando="0";
}

   /* 
   SumNumb+=element;
    });
    chainNumber=`${SumNumb}`;
    ResultFunction();
*/


//FUNCTION: Acumular valores
const AcumValue=()=>{
    //arraNumbers.push(parseFloat(chainNumber));
    operando=chainNumber;
    
}
/*
const borrarValue=()=>{
        arraNumbers.length = arraNumbers.length -  arraNumbers.length;
  }

  */