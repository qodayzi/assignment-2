// exercise 3

let mo_mass = 67
let mo_height = 1.78
let ali_mass = 80
let ali_height = 1.90 

let BMI_1 = mo_mass / (mo_height * mo_height)
console.log (BMI_1)
let BMI_2 = ali_mass / (ali_height * ali_height)
console.log(BMI_2)

if (BMI_1 > BMI_2){
    console.log(true)
} else {
    console.log(false)
}