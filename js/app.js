console.log('ciaoo');

//prendere il tasto Gioca
const buttonElement = document.getElementById('pulsante');
console.log(buttonElement);

//al click su play si genera griglia

buttonElement.addEventListener('click',function(){
    console.log('click');

    //creare griglia
    const grigliaElement = document.getElementById('griglia');
    console.log(grigliaElement);
    
    //definire lato e celle
    let latoGriglia = 10;
    console.log(latoGriglia);

    let numeroCelle = latoGriglia * latoGriglia;
    console.log(numeroCelle);

    for (let i = 0; i < numeroCelle; i++) {
        let num = i + 1
        console.log(num)

        let divElement = document.createElement('div')
        
        //aggiungere classe
        divElement.classList.add('celle');

        //aggiungere style 
        divElement.setAttribute("style", "width:calc(100% / 10)");
        console.log(divElement);
       
        
    }

})


//prendere celle
//al click sulle celle
  //stampiamo in console il numero della casella