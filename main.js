
  /*
    Mini Challenge Take a Number - Battle of the Bands

    Also created arrays to store the list of bands signed up for the concert
  */



let bandNumber = 0
let listOfBands = [];

 const takeNumber1 = function (bandName) {
  
      
       bandNumber ++ //bandNumber = bandNumber + 1
   
       listOfBands.push(`${bandNumber + "." + bandName}`) //adds to array listOfBands
   
}

takeNumber1("The Beatles")
takeNumber1("Sia")
takeNumber1("Dixie Chicks")
console.log(listOfBands)

listOfBands.forEach(element => {
  console.log(element)
});

//another way of doing this 

let bandNumber2 = 1
const takeNumber2 = bandName => `${bandNumber2++}. ${bandName}`

const bandOne = takeNumber2("Galactic Scum")
console.log(bandOne)  // This should print "1. Galactic Scum" in the console

const bandTwo = takeNumber2("Underdogs")
console.log(bandTwo)  // This should print "2. Underdogs" in the console


//ANOTHER WAY OF DOING THIS
let bandNumber3 = 0

const takeNumber3 = function (bandName) {
      bandNumber3++
      console.log(`${bandNumber3}. ${bandName}`) 
}

takeNumber3("Pearl Jam")
takeNumber3("Joji")
