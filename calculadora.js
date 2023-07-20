//Declaracion de varibles Globales 
let chainNumber="";
let operando="0";
let operando2="";
let signo="0";


//FUNCIÓN para el resultado
const ResultFunction=()=>{
    if(chainNumber.trim()==""){
        document.getElementById("resultado").innerHTML="0";
        if (operando.trim()=="") document.getElementById("historicos").innerHTML="0";
            else document.getElementById("historicos").innerHTML=operando + signo;
    }else{if(operando2.trim()==""){
            document.getElementById("resultado").innerHTML=chainNumber;
            document.getElementById("historicos").innerHTML=operando+signo;
          }else{
                document.getElementById("resultado").innerHTML=chainNumber;
                document.getElementById("historicos").innerHTML=operando+ signo + operando2 +"="+chainNumber;
                operando2=="";
                
            }
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
//FUNCTION: Resta
const RestNumbers=()=>{
    if(signo=="-")  chainNumber=parseFloat(operando) - parseFloat(chainNumber);
    AcumValue();
    signo="-";
    chainNumber="";
    ResultFunction();
    }
//FUNCTION: Multiplicacion
const MultNumbers=()=>{
    if(signo=="*") chainNumber=parseFloat(operando) * parseFloat(chainNumber);
    AcumValue();
    signo="*";
    chainNumber="";
    ResultFunction();
    }
//FUNCTION: Division 
const DiviNumbers=()=>{
    if(signo=="/") chainNumber=parseFloat(operando) / parseFloat(chainNumber);
    AcumValue();
    signo="/";
    chainNumber="";
    ResultFunction();
   }
//FUNCTION: Porsentage 
const PorctNumbers=()=>{
    if(signo=="%") chainNumber=(parseFloat(operando) % parseFloat(chainNumber))/100;
    AcumValue();
    signo="%";
    chainNumber="";
    ResultFunction();
    }
//FUNCTION: Borrar Datos
const LimptNumbers=()=>{
        signo="0";
        chainNumber="";
        AcumValue();
        ResultFunction();
    }

//FUNCTION: Borrar Datos parciales 
const LimpiaParcialNumbers=()=>{
   if (signo==0){
    chainNumber="";
   ResultFunction();
   chainNumber=operando;
   } else {
    chainNumber="";
   ResultFunction();
   }
}
   
//FUNCTION: Mostrar resultado 
const ResultEqual=()=>{
    
    if (signo=="0"){
        AcumValue();
        ResultFunction();
     }else{ operando2=chainNumber;
             if (signo=="+")chainNumber=`${parseFloat(operando)+ parseFloat(chainNumber)}`;
              else if (signo=="-")chainNumber=`${parseFloat(operando)- parseFloat(chainNumber)}`; 
                     else   if (signo=="*") chainNumber=`${parseFloat(operando)* parseFloat(chainNumber)}`; 
                        else if (signo=="/") chainNumber=`${parseFloat(operando)/ parseFloat(chainNumber)}`; 
                               else if (signo=="%") chainNumber=`${(parseFloat(operando)* parseFloat(chainNumber))/100}`;                                     
    
    ResultFunction();                          
    AcumValue();
    operando="0";
    signo="0";
    operando2="";
   
    }
}

//FUNCTION: Acumular valores
const AcumValue=()=>{
    operando=chainNumber;
}