function BmiCalculator(weight, height){
    var calculate = weight/Math.pow(height, 2);
    return Math.round(calculate);
}
var calculate = BmiCalculator(65, 1.8)
console.log(calculate);