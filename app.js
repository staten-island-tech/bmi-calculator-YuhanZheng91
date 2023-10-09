const height = Number(prompt("enter your height in meters"));
const weight = Number(prompt("enter your weight in kilograms"));

function getBMI(){
    const BMI = (weight/height**2*100);
    console.log(BMI);
    return(BMI);
}

function results(){
    const BMI = getBMI();

    if(BMI < 18.5){
        console.log("Eat more cake!");
    } else if(BMI >= 18.5 && BMI<= 24.9){
        console.log("You're good to go");
    } else{
        console.log("Try and alter your diet a little :)");
    }
}
results();

/* 
function getBMI(){
}

function checkBMI(){

}

function results(){
    //get values for weight and height
    //get BMI

    let BMI= getBMI(height, weight);
    checkBMI(BMI);
}

// === checks type / == does not check for type
*/

/* runs function getBMI infitintely
function checkBMI(){
    let BMI = getBMI(height, weight);
    checkBMI(BMI);

    if(getBMI < 18.5){
        console.log("Eat more cake!");
    } else if(getBMI < 24.9){
        console.log("You're good to go");
    } else(getBMI > 25); {
        console.log("Try and cut your food intake a little :)")
    }
}
checkBMI();
*/