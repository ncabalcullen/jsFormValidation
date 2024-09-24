// //Query selectors



// // const saludos = document.querySelectorAll('p.saludo');

// // const form = document.forms['form'];

// // let text = '';

// // for (let i = 0; i < form.length; i++){
// //     text += form.elements[i].value + '<br>'
// // }

// // document.getElementById("test").innerHTML = text;


// // Funcion expresada
// // function changeThisElement(element){
// //     element.innerHTML = 'Hola mundo desde function'
// // }

// // Funcion flecha

// // const changeThisElement = element => element.innerHTML = 'Hola mundo desde funcion flecha'

// //mostrar fecha con clic

// // const displayDate = () => document.getElementById('test').innerHTML =  Date();
// // document.getElementById("btn").onclick = displayDate; //no abro y cierro parentesis porque quiero que se ejecute con la accion


// //Check Cookies
// // const checkCookies = () => {
// //     let text = navigator.cookieEnabled ? 'Las cookies están habilitadas' : 'Las cookies no están habilitadas';
// //     document.getElementById('test').innerHTML = text;

// //     if(navigator.cookieEnabled == true){}
// // }


// //UPPERCASE
// // const upperCase = () =>{
// //     const input = document.getElementById("name");
// //     input.value = input.value.toUpperCase();
// // }


// //hover

// // const mouseOver  = element => {
// //     element.innerHTML = 'Estas sobre el div'
// // }
// // const mouseOut  = element => {
// //     element.innerHTML = 'Estas fuera del div'
// // }


// // let key;


// // const keydown = ($event) => {
// //     const key = $event.getModifierState('CapsLock');
// //     console.log(key)
// //     document.getElementById('test').innerHTML = key ? 'Estas utilizando mayusculas' : '';
// // }

// //Creando un nodo de parrafo
// const paragraph = document.createElement('p'); //Creamos un parrafo
// const node = document.createTextNode('Contenido nuevo'); //Creamos elemento o nodo de texto

// paragraph.appendChild(node); //incorporamos el elemento de texto al nodo parrafo

// const container = document.getElementById('div1'); //capturamos el div1 en container


// container.appendChild(paragraph); //Insertar texto en un nuevo p

// const p1 = document.getElementById('p1');
// const p2 = document.getElementById('p2');
// // p2.remove();
// // container.insertBefore(paragraph,p1)
// // container.removeChild(p1)
// container.replaceChild(paragraph,p2)


// const addClass = () =>{
//     const divClassList = document.getElementById('div').classList;
//     divClassList.add('red-background');
// }
// const removeClass = () =>{
//     const divClassList = document.getElementById('div').classList.remove('red-background');

// }


// const toggleClass = () =>{
//     document.getElementById('div').classList.toggle('red-background')
// }



// const color = document.getElementById('styles').style.color = 'white';
// const background = document.getElementById('styles').style.backgroundColor = 'black';
// console.log(color)
// console.log(background)

// const paragraph = document.getElementById('styles');
// const container = document.getElementById('div');
// container.querySelector('p.styles').innerHTML = 'Texto de JS'
// container.querySelector('p.styles').style.color = 'red'


//BOM (Browser Object Model)

// const historyBack = ()=>{
//     history.back();
// }    
// const historyForward =()=>{
//     history.forward();
// }

// document.getElementById('info').innerHTML = 'La pantalla tiene un alto de '+  screen.height + 'px' + '<br>'+'La pantalla tiene un ancho de ' + screen.width + 'px';
//     document.getElementById('url').innerHTML = location.href;   


//     document.getElementById('btn').addEventListener('click',historyBack);
//     document.getElementById('btn2').addEventListener('click',historyForward);

//     document.getElementById('cookie').innerHTML = navigator.cookieEnabled ? 'Si' : 'No';
//     document.getElementById('browser').innerHTML = window.navigator.;


// const user = 'username=NCCDev'

// document.cookie = user;

// const user = document.cookie;
// confirm(`¿Este es tu usuario ?  ${user}`)

// const geolocation = document.getElementById("ubicacion");

// const getLocation = () => {
//     if(navigator.geolocation){
//         navigator.geolocation.getCurrentPosition(showPosition);
//     }else{
//         geolocation.innerHTML = 'La geolocalizacion está dehabilitada'
//     }
// }

// const showPosition = position =>{
//     geolocation.innerHTML = 'La latitud es: ' + position.coords.latitude + '<br>La longitud es: ' + position.coords.longitude;
// }

// const doValidation = () => {
//     const name = document.getElementById("name");
//     // if (!number.checkValidity()) {
//     //     document.getElementById("error").innerHTML = number.validationMessage;
//     // } else {
//     //     document.getElementById("error").innerHTML = "El numero está correcto"
//     // }

//     document.getElementById("error").innerHTML =
//      name.checkValidity() ?
//       "El nombre está correcto" :
//        name.validationMessage;
// }

// const back = () =>{
//     window.history.back()
// }
// const forward = () =>{
//     window.history.forward()
// }
// const backx2 = () =>{
//     window.history.go(-2)


// }
// const forwardx2 = () =>{
//     window.history.go(+2)

// }


// const firstname = document.getElementById("firstname")
// const lastname = document.getElementById("lastname")
// const job = document.getElementById("job")

// document.getElementById("welcome").innerHTML = localStorage.getItem('username') == null ? '' : 'Bienvenido '+ localStorage.getItem('username')

// const save = () => {
//     localStorage.setItem('username',firstname.value + ' ' + lastname.value)
//     localStorage.setItem('job',job.value)
// }

// const clean = () =>{
//     localStorage.clear()
// }

// const css = 'color: red; background: aqua'
// const css2 = 'color: green; background: aqua'
//  //%c nos permite modificar el texto con estilo
// console.log('%cEste texto va a tener estilo y %ceste otro texto otro',css,css2)


// const a  = 5;
// const b = 6;

//console.assert(a+b == 12, ' No es igual a 12')



// const array = [1,2,3,4,5]
// for (let i = 0; i < array.length; i++) {
//     console.count('Mi array tiene: ')
    
// }

//advertencia sin error
//console.warn('aa')

// console.log('Hola Mundo')
// console.groupCollapsed('Grupo2');
// console.log('Hola mundo')
// console.log('Hola mundo')
// console.log('Hola mundo')
// console.groupEnd()
// console.log('Hola mundo')

// const array = ['a','b','c','d']

// console.table(array)

// console.time()
// for (let index = 0; index < 10000; index++) {
//     for (let i = 0; i < 500000; i++) {
        
//     }
    
// }
// console.timeEnd()


// const otherMethod2 = () =>{
//     console.trace('Resultado de rastreo')
// }

// const otherMethod = () =>{
//     otherMethod2();
// }

// const myFunction = () =>{
//     otherMethod();
// }


//Timers


// const action2 = () =>{
//     const interval =  setInterval(() => {
//         console.log('Accion del interval')
//     }, 1000);

//     const timeout = setTimeout(() => {
//         clearInterval(interval);
//         console.log('Fin de intervalo')
//     }, 10000);
   
// }

// window.history()

