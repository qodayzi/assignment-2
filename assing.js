
// 1. function

let alisAge = calcAge(1999)
function describeCountry(country,population,capitalCity) {
    return ` ${country} has ${population} million people and its captial city is ${capitalCity}`
    
}
let ali = describeCountry("somaliland",3.5,"hargaysa")
console.log(ali)
let ahmed = describeCountry("Ethiopia",5.7,"AddisAbaba")
console.log(ahmed)
let omer  = describeCountry("Kenya",9,"Mombasa")
console.log(omer)
let amina = describeCountry("SouthSudan",10.3,"khardum")
console.log(amina)

// 2. function
function percentageOfWorld1(population) {
    return (population / 7900000000) * 100;
  }
  
  console.log("somaliland has a population of 3.5 million , so it's about " + percentageOfWorld1(3500000) + "of the world population");
  console.log("SouthSudan has a population of 10.3 million , so it's about " + percentageOfWorld1( 10300000) + "of the workd population");
  console.log("Kenya  has a population of 9 million , so it's about " + percentageOfWorld1(9000000) + "of the world population");


// 3. arrays

const population = ["5.7 million","9 million","10.3 million","3.5 million"]
const neighbours = ["Somalia", "SouthSudan","Eretaria","NorthSudan","Kenya", "Djibouti"]
if (neighbours.length == 4){
    console.log(true)
}else{
    console.log(false)
}
// 4. for loop 

for (let i = 0 ; i < neighbours.length ; i++){
    console.log(neighbours[i])
}

// 5. for loop in reverse 

for (let i = 5 ; i >= 0 ; i--) {
    console.log(neighbours[i])
}