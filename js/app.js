console.log('ciaoo');

//prendere il tasto Gioca
const buttonElement = document.getElementById('pulsante');
console.log(buttonElement);

//al click su play si genera griglia

buttonElement.addEventListener('click',function(){
    console.log('click');

    const grigliaElement = document.getElementById('griglia');
    console.log(grigliaElement);
})

//creare griglia
//prendere celle
//al click sulle celle
  //stampiamo in console il numero della casella