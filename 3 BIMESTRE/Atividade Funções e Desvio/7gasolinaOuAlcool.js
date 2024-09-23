function gasolinaOuAlcool(gasolina, alcool){
   if (gasolina * 0.7  > alcool){
    return true
   }
   else {
    return false
   }
}

let valorGasolina = 6
let valorAlcool = 4

if (gasolinaOuAlcool(valorGasolina, valorAlcool)){
    console.log(`Álcool (R$${valorAlcool}) compensa mais que gasolina (R$${valorGasolina}).`)
} else {
    console.log(`Gasolina (R$${valorGasolina}) compensa mais que álcool (R$${valorAlcool}).`)
}