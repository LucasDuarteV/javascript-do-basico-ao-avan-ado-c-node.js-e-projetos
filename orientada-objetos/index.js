let cachorro = {
    patas: 4,
    raca: "SRD",
    latir: function(){
        console.log('Au au')
    }
}

let labrador = Object.create(cachorro)

labrador.latir()

labrador.raca = 'Labradror'

console.log(labrador)