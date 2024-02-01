


function bmi(){
debugger
var weightInput = document.getElementById("w")
var heightInput = document.getElementById("h")

var weight = parseFloat (weightInput.value)
var height = parseFloat (heightInput.value)

var d = document.getElementById("urbmi")



    if( isNaN(weight) || isNaN(height) || height<=0 || weight <= 0 )
    {
        alert("provide a valid height and weight ")
        return
    }
     var bmi = (weight / ((height *2)/1000)).toFixed(2);
     var resultInput = document.getElementById("result")
     var bmiCategory = getBMI(bmi)

     resultInput.innerHTML="your BMI is :  " + bmi + "<br> category :" + bmiCategory
     
     weightInput.value=""
     heightInput.value=""
    // resultInput.className=bmiCategory.toLowerCase();
}
    function getBMI(bmi){    
        if (bmi < 18.6) {
           return "underweight"
     
            
        } else if ( bmi<18.6 && bmi>24.9){
            return "normal weight"
          
            
        }
        else{
            return "overweight"
           
        
        }
    }

    function clear(){
        document.getElementById("result").innerHTML=" "
        document.getElementById("w").innerHTML=""
        document.getElementById("h").innerHTML=""

    }
        
