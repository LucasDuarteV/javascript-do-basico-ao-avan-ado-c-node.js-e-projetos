let arr = [1,2,3,4,5]
let arr1 = []

function iteraArray(array){
    if(array.length == 0){
        throw new Error("Array precisa pelo menos ter um elemento")
    }

    for(let i = 0; i < array.length; i++){
        console.log(array[i])
    }
}

iteraArray(arr)
iteraArray(arr1)