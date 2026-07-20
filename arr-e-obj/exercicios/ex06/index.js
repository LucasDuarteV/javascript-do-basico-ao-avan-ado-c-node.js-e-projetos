let primerioArray = ["A" , "B" , "C" , "D" , "E"]
let segundoArray = ["F" , "G" , "H" , "I"]

function verifica(arr){
    if(arr.length >= 5){
        console.log("Muitos elementos!")
    } else{

        console.log("Poucos elementos!")
    }
}

verifica(primerioArray)
verifica(segundoArray)