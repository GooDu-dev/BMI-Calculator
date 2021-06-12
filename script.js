function BMIcalculator(){
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    var bmi = weight / (height/100) / (height/100) ;
    document.getElementById("Form").classList.add("fullformClass");
    document.getElementById("bmiImage").style.display = "initial";
    document.getElementById("bmiImage").style.boxShadow = "5px 5px 50px whitesmoke";
    document.getElementById("resultbox").style.display = "inherit";
    document.getElementById("result").innerHTML = "Your BMI is : " + bmi.toFixed(2);
    if(bmi >= 35){
        document.getElementById("desciption").innerHTML = "Extremely Obese"
        document.getElementById("desciption").style.color = "#F70D1A"
        document.getElementById("desciption").style.textShadow = "5px 5px 50px #F62217"
    }
    if(bmi < 34.9 && bmi >= 30){
        document.getElementById("desciption").innerHTML = "Obese"
        document.getElementById("desciption").style.color = "#F70D1A"
        document.getElementById("desciption").style.textShadow = "5px 5px 50px #F62217"
    }
    if(bmi < 30 && bmi >= 25){
        document.getElementById("desciption").innerHTML = "Overweight"
        document.getElementById("desciption").style.color = "#F87217"
        document.getElementById("desciption").style.textShadow = "5px 5px 50px #F87431"
    }
    if(bmi < 25 && bmi >= 18.5){
        document.getElementById("desciption").innerHTML = "Normal"
        document.getElementById("desciption").style.color = "#64E986"
        document.getElementById("desciption").style.textShadow = "5px 5px 50px #A1C935"
    }
    if(bmi < 18.5){
        document.getElementById("desciption").innerHTML = "Underweight"
        document.getElementById("desciption").style.color = "#43BFC7"
        document.getElementById("desciption").style.textShadow = "5px 5px 50px2 #3EA99F"
    }
}