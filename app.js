const height = Number(prompt("enter your height in meters"));
const weight = Number(prompt("enter your weight in kilograms"));

function getBMI(){
    console.log(weight/height**2*100);
}
getBMI();
/*
function getBMI(){
}

function checkBMI(){

}

function results(){
    //get wavlues for weight and height
    //get BMI

    let BMI= getBMI(height, weight);
    checkBMI(BMI);
}

// === checks type / == does not check for type
*/


/*
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