let $amigo = {nome:"José",
idade: 67, 
sexo: "M", 
peso: 76.6, 
engordar(p){
    console.log('Engordou')
    this.peso += p
}}
amigo.engordar(10)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)