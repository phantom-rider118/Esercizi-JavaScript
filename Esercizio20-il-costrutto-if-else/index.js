let primitive = "false"

if(typeof primitive === "number"){
    console.log("la variabile è un numero")
} else if(typeof primitive ==="string"){
    console.log("la variabile è una stringa")
} else if(typeof primitive === "boolean") {
    console.log("la variabile è un booleano")
} else{
    console.log("la variabile non è riconosciuta")
}