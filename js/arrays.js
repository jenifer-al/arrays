const animales=[
    " 🐶 Perro",
    " 🐱 Gato",
    "🐘 Elefante",
    "🦁 León",
    " 🐯 Tigre",
    " 🦓 Zebra",
    

];


let indice = 0;

function disminuir(){
    if (indice > 0) {

        indice--;


        document.getElementById("animales_texto").innerHTML = animales[indice];

    }



}


function aumentar(){

        if (indice < animales.length - 1){

            indice++;

            document.getElementById("animales_texto").innerHTML = animales[indice];



        }




}