const rows = document.querySelectorAll('.caferow');
const sideplads = document.querySelectorAll('.sideplads:not(.optaget)');

let removeSideplads = false;
let sidepladsRow = 0;
let sidepladsNumber = 0;

//let rowNumb = document.querySelectorAll('.rowNumb');
//rowNumb.forEach(element =>{
//    element.innerHTML = `Række ${element.id}`;
//}); 

const sidepladsReload = document.querySelectorAll('.sideplads:not(.optaget)');
sidepladsReload.forEach(element =>{
      element.innerHTML = element.id;
      element.addEventListener('click', ()=>{
          sidepladsRow = element.parentElement.id;
          sidepladsNumber = element.id;

          if (element.classList.value == 'sideplads') {
              element.classList.add('valg');
              removeSideplads = false;
          } else if (element.classList.value == 'sideplads vip') {
              element.classList.add('valg');
              removeSideplads = false;
          } else {
              element.classList.remove('valg');
              removeSideplads = true;
          }
          
      })
})

//const main = document.querySelectorAll('.sideplads');
//const ignite = document.querySelectorAll('.sideplads vip');

//let selectRum = false;

//const mainrumReload = document.querySelectorAll('.Main:hover');
//mainrumReload.forEach(element =>{
  //  element.innerHTML = element.id;
    //element.addEventListener('click', ()=>{

      //  if (element.classList.value == '') {
        //    element.classList.add('Ignite');
          //  selectRum = false;
       // } else {
         //   element.classList.remove('Ignite');
           // selectRum = true;
       // }
    //})

//})

  let = document.getElementById('knap');

  button.onclick = function() {
      let div = document.getElementsByClassName('sideplads');
      if (div.style.display !== 'none') {
          div.style.display = 'none';
      }
      else {
          div.style.display = 'block';
      }
  };