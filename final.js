'use strict'

let doc = document;
let id = 'getElementById';
let byName = 'getElementsByTagName';
let byClass = 'getElementsByClassName';
let byTag = 'getElementsByTagName'
let create = 'createElement';
let set = 'setAttribute';
let get = 'getAttribute';
let query = 'querySelector';
let queryAll = 'querySelectorAll';
let app = 'appendChild';
let add = 'addEventListener';


let aJuegos = [
    {
        nombre: 'Mortal Kombat 11',
        precio: '$7000',
        imagen: 'img/xbox/mk11.jpg',
        alt: 'Mortal Kombat 11 Xbox One',
        detalle: 'NetherRealm Studios da vida a Mortal Kombat 11, un nuevo capítulo de esta veterana serie de videojuegos de lucha que llega con las mayores opciones de personalización vistas en la serie hasta la fecha.',
        consola: 'Xbox'
    },
    {
        nombre: 'Yoshi s Crafted World',
        precio: '$10000',
        imagen: 'img/switch/yoshis.jpg',
        alt: 'Yoshi s Crafted World Switch',
        detalle: 'The Last of Us Part II es un juego de acción y aventuras de 2020 desarrollado por Naughty Dog y publicado por Sony Interactive Entertainment para PlayStation 4.​​',
        consola: 'Nintendo',
    },
    {
        nombre: 'The Last of Us Part II',
        precio: '$5500',
        imagen: 'img/ps4/tlou2.jpg',
        alt: 'The Last of Us Part II PS4',
        detalle: 'The Last of Us Part II es un juego de acción y aventuras de 2020 desarrollado por Naughty Dog y publicado por Sony Interactive Entertainment para PlayStation 4.​​',
        consola: 'Playstation',
    },
    {
        nombre: 'Uncharted 4',
        precio: '$2000',
        imagen: 'img/ps4/uncharted.jpg',
        alt: 'Uncharted 4 A Thiefs End PS4',
        detalle: 'Uncharted 4: El desenlace del ladrón, es un videojuego de acción-aventura en tercera persona, lanzado el 10 de mayo de 2016, distribuido por Sony Computer Entertainment y desarrollado por Naughty Dog exclusivamente para PlayStation 4.',
        consola: 'Playstation'
    },
    {
        nombre: 'The Legend of Zelda: Links Awakening',
        precio: '$12000',
        imagen: 'img/switch/zelda.jpg',
        alt: 'The Legend of Zelda Switch',
        detalle: 'The Legend of Zelda: Links Awakening regresa después de 25 años de su lanzamiento para Game Boy, posteriormente revisado para Game Boy Color en The Legend of Zelda: Link’s Awakening DX, solo que totalmente renovado para Nintendo Switch.',
        consola: 'Nintendo'
    },
    {
        nombre: 'Metal Gear Solid V Ground Zeroes',
        precio: '$3000',
        imagen: 'img/xbox/metalgear.jpg',
        alt: 'Metal Gear Solid V Xbox One',
        detalle: 'Metal Gear Solid V: Ground Zeroes es un videojuego de acción-aventura y sigilo desarrollado por Kojima Productions y producido por Konami.​​ Es parte de una subserie de precuelas de la saga Metal Gear, que tiene lugar un año después de los eventos sucedidos en Metal Gear Solid: Peace Walker.',
        consola: 'Xbox'
    },
    {
        nombre: 'Animal Crossing: New Horizons',
        precio: '$14000',
        imagen: 'img/switch/animal.jpg',
        alt: 'Animal Crossing Switch',
        detalle: 'Animal Crossing: New Horizons supone el estreno de la exitosa saga en Nintendo Switch, un colorido simulador de vida que invita a los jugadores a participar en el Plan de Asentamiento en Islas Desiertas de Nook Inc. y disfrutar de una vida placentera repleta de creatividad, encanto y libertad',
        consola: 'Nintendo'
    },
    {
        nombre: 'God Of War',
        precio: '$5500',
        imagen: 'img/ps4/god.jpg',
        alt: 'God of War PS4',
        detalle: 'God of War es un videojuego de acción-aventura desarrollado por SCE Santa Monica Studio y publicado por Sony Interactive Entertainment. Su lanzamiento se produjo el 20 de abril de 2018 como un título exclusivo para la consola PlayStation 4. Será lanzado en Microsoft Windows el 14 de enero de 2022.',
        consola: 'Playstation'
    },
    {
        nombre: 'Battlefield V',
        precio: '$5000',
        imagen: 'img/xbox/btf5.jpg',
        alt: 'Battlefield V Xbox One',
        detalle: 'Battlefield V es un videojuego de acción bélica desarrollado por DICE y editado por EA ambientado en la Segunda Guerra Mundial. Esta entrega de la exitosa franquicia FPS dispone de un modo campaña compuesto por varias historias con diferentes protagonistas y ubicaciones así como una vertiente multijugador.',
        consola: 'Xbox'
    },
    {
        nombre: 'Pokemon: Lets Go, Pikachu!',
        precio: '$12000',
        imagen: 'img/switch/pokemon.jpg',
        alt: 'Pokemon Lets Go Pikachu Xbox One',
        detalle: 'Pokémon Lets Go, Pikachu! marca una escisión en las entregas troncales de la franquicia Pokémon, manteniendo el género de rol por turnos y aventuras los mismos pilares de exploración, coleccionismo y combate de los juegos clásicos; pero explorando un público más general y abierto bebiendo directamente de Pokémon GO.',
        consola: 'Nintendo'
    },
    {
        nombre: 'Guardians of The Galaxy',
        precio: '$12000',
        imagen: 'img/ps4/guardians.jpg',
        alt: 'Guardians of The Galaxy PS4',
        detalle: 'Pokémon Lets Go, Pikachu! marca una escisión en las entregas troncales de la franquicia Pokémon, manteniendo el género de rol por turnos y aventuras los mismos pilares de exploración, coleccionismo y combate de los juegos clásicos; pero explorando un público más general y abierto bebiendo directamente de Pokémon GO.',
        consola: 'Playstation'
    },
    {
        nombre: 'Rise of the Tomb Raider',
        precio: '$4000',
        imagen: 'img/xbox/tomb.jpg',
        alt: 'Rise of the Tomb Raider Xbox One',
        detalle: 'La veterana Lara Croft protagoniza este videojuego de acción y supervivencia dentro de la ya conocida readaptación de la saga Tomb Raider que sigue explorando los orígenes de la conocida heroína y aventurera. Esta entrega, de nombre Rise of the Tomb Raider presenta una depurada técnica de animación, mayores áreas de exploración y un nuevo guión.',
        consola: 'Xbox'
    },
];


//////////////////////////////////Carrito LocalStorage////////////////////////////////////////

let carrito = {
    imagenes: [],
	productos: [],
	cantidad: [],
    precio: [],
	total: 0,
};

//////////////////////////////////Maquetado////////////////////////////////////////

let juegos = doc[byClass]("juegos")
let contenedorJuegos = doc[create]('div');
contenedorJuegos[set]('class', 'row text-center fondojuegos')
juegos[0][app](contenedorJuegos);


for (let juegos of aJuegos) {

    let div = doc[create]('div');
    div[set]('class', 'col-12 col-lg-6 col-xl-4 col-xxl-3 mt-1 padre radio juego position-relative');
    let img = doc[create]('img');
    img[set]('class', 'imagenanimacion imagen my-3');
    let nombre = doc[create]('h2');
    nombre[set]('class', 'titulo fs-5 fw-bolder text-dark');
    let consola = doc[create]('h3');
    consola[set]('class', 'titulo fs-6 consola fw-light');
    let alt = doc[create]('p');
    alt[set]('class', 'none');
    let detail = doc[create]('p');
    detail[set]('class', 'none');
    let precio = doc[create]('p');
    precio[set]('class', 'precio fs-4');
    let button = doc[create]('button');
    button[set]('class', 'item-boton btn-lg btn btn-dark btn-outline-primary agregarproducto position-absolute bottom-0 start-50 translate-middle-x botonjuego fw-light');

    contenedorJuegos[app](div);
    div[app](img);
    div[app](nombre);
    div[app](consola);
    div[app](alt);
    div[app](detail);
    div[app](precio);
    div[app](button);

    img.src = juegos.imagen;
    img.alt = juegos.alt;
    nombre.innerHTML = juegos.nombre;
    consola.innerHTML = juegos.consola;
    alt.innerHTML = juegos.alt;
    detail.innerHTML = juegos.detalle;
    precio.innerHTML = juegos.precio;
    button.innerHTML = "Agregar";

}

let botonHome = doc[id]("todos");
let botonPs4 = doc[id]("ps4");
let botonWii = doc[id]("switch");
let botonXbox = doc[id]("xbox");
let botonCarrito = doc[id]("carrito")

botonHome.onclick = Home;
botonPs4.onclick = PlayStation;
botonWii.onclick = Wii;
botonXbox.onclick = Xbox;
botonCarrito.onclick = Carrito;

function Home(){

    for (let game of consola){
        if(botonHome.textContent != game.textContent){
            game.parentNode.style.display = 'block';
            divCarrito[0].style.display = 'none';
        }
    }

    BotonBanner(); 
}

function PlayStation(){

    for (let game of consola){
        if(botonPs4.textContent == game.textContent){
            game.parentNode.style.display = 'block';
        } else {
            game.parentNode.style.display = 'none';
            divCarrito[0].style.display = 'none';
        }
    }

    Propaganda();
    
    let img = doc[query]('.modal').firstElementChild;
        img[set]('src', 'img/ofertas/ps4.jpg');
        img[set]('alt', 'Ofertas PS4');
        img[set]('style', 'height: 40%')

    BotonBanner();
}

function Wii(){
    for (let game of consola){
        if (botonWii.textContent == game.textContent){
            game.parentNode.style.display = 'block';
        } else {
            game.parentNode.style.display = 'none';
            divCarrito[0].style.display = 'none';
        }
    }

    Propaganda();

    let img = doc[query]('.modal').firstElementChild;
        img[set]('src', 'img/ofertas/switch.jpg');
        img[set]('alt', 'Ofertas Switch');
        img[set]('style', 'height: 40%')

    BotonBanner();
}

function Xbox(){
    for (let game of consola){
        if (botonXbox.textContent == game.textContent){
            game.parentNode.style.display = 'block';
        } else {
            game.parentNode.style.display = 'none';
            divCarrito[0].style.display = 'none';
        }
    }

    Propaganda();

    let img = doc[query]('.modal').firstElementChild;
        img[set]('src', 'img/ofertas/xbox.jpg');
        img[set]('alt', 'Ofertas Xbox');
        img[set]('style', 'height: 40%')

    BotonBanner();
}


//////////////////////////////////Banner, Propaganda y Navbar////////////////////////////////////////

let consola = doc[byClass]("consola")
let divCarrito = doc[byClass]("carrito");
divCarrito[0].style.display = 'none';

let aOfertas = [
    'switch.jpg',
    'ps4.jpg',
    'xbox.jpg',
];

let aBotonOfertas = [
    'Lo quiero',
    'Ver Categoria',
    'Ver Juegos',
];

let num = 0;
let banner = doc[id]('ofertas')
banner[set]('class', 'text-center position-relative bg-secondary');
let portada = doc[create]('img');
portada[set]('class', 'img-fluid')
let botonPortada = doc[create]('button');
botonPortada[set]('class', 'item-boton btn btn-lg btn-dark btn-outline-light  position-absolute bottom-0 start-50 translate-middle-x mb-5 botonbanner');
botonPortada.innerHTML = 'comprar';
banner[app](botonPortada);
banner[app](portada);

BotonBanner();

function BotonBanner(){

    num = Math.random() * 2;
    portada[set]('src', `img/banner/${aOfertas[num.toFixed(0)]}`);
    botonPortada.innerHTML = `${aBotonOfertas[num.toFixed(0)]}`;

    if (num.toFixed(0) == 1){
        botonPortada.onclick = PlayStation;

    } else if (num.toFixed(0) == 2){
        botonPortada.onclick = Xbox;

    } else if (num.toFixed(0) == 0){
        botonPortada.onclick = clickagregar;
    }

    doc[id]('ofertas').style.display = 'block';
    
}

function Propaganda(){

    let div = doc[create]('div');
        div[set]('class', 'modal item');

    let img = doc[create]('img');
        img[set]('class', 'imagen');
        div[app](img);
    
    let cerrar = doc[create]('a');
        cerrar[set]('href', '#');
        cerrar.innerHTML = 'X';
        cerrar.onclick = function() {
            div.remove();
        };    
        div[app](cerrar);
    
    main[app](div);

    window.addEventListener("keydown", function (event) {
                
        if(event.code == 'Escape') {
            div.remove();
        }
    }
    ,false
    );

    setInterval(function Propaganda(){
            div.remove();
        }, 10000);
}

function Carrito(){

    for (let game of consola){
        game.parentNode.style.display = 'none'
    }
    divCarrito[0].style.display = 'block';
    doc[id]('ofertas').style.display = 'none';

    let inputCantidad = doc[queryAll]('.Cantidad');

    for (let btn of inputCantidad){

        btn.onclick = function(){

            let cantidad = btn.closest('.shopping-cart-quantity');
            let precio = cantidad.closest('.col-5').previousElementSibling.firstElementChild.firstElementChild.textContent;
            let nombre = cantidad.closest('.col-5').previousElementSibling.previousElementSibling.firstElementChild.lastElementChild.textContent;
            let total = doc[query]('.shopping-cart-total').firstElementChild.lastElementChild.textContent;
            let indice = carrito.productos.indexOf(nombre);

            if (indice != -1) {
                carrito.cantidad[indice];  
    
                if (carrito.cantidad[indice] > 0) {
                    carrito.total = parseInt(precio.substring(1));
                    carrito.cantidad[indice] = parseInt(cantidad.firstElementChild.value); 
                }

            } else {
                carrito.productos.push(nombre);
                carrito.cantidad[indice] = parseInt(cantidad.firstElementChild.value);
            }      

            carrito.total = parseInt(total.substring(1));
            localStorage.carrito = JSON.stringify(carrito);
        }
    }

    let botonesDel = doc[byClass]('Borrar') 
    for (let btn of botonesDel) {

        btn.onclick = function() {
            let titulo = this.closest('.shopping-cart-quantity').parentNode.previousElementSibling.previousElementSibling.firstElementChild.lastElementChild.textContent

            for (let i = 0; i < carrito.productos.length; i++)

            if (titulo == carrito.productos[i]){
                carrito.cantidad.splice(i, 1);
                carrito.precio.splice(i, 1);
                carrito.imagenes.splice(i, 1);
                carrito.productos.splice(i, 1);
                carrito.total = parseInt(doc[query]('.CarritoTotal').textContent.substring(1));

                localStorage.carrito = JSON.stringify(carrito);
            }
        }
    }

}

///////////////////////Modal detalles de producto y galeria/////////////////////////

let main = doc[byName]('main')[0];
let imagenes = contenedorJuegos[byName]('img');

for (let imagen of imagenes){

    imagen.onclick = function() {

        let body = doc[query]('body');
        body[set]('style', 'overflow-y:hidden')
        
        let modal = doc[create]('div');
        modal[set]('class', 'modal padre');

        let div = doc[create]('div');
        div[set]('class', 'fondo position-relative');
        modal[app](div);

        let titulo = doc[create]('h2');
        titulo[set]('class', 'titulomodal titulo position-absolute top-0 start-50 translate-middle-x fs-3 fw-light');
        titulo.innerHTML = this.nextElementSibling.textContent;
        div[app](titulo);

        let fotos = doc[create]('div');
        fotos[set]('class', 'float-left');

        let divReemplazo = doc[create]('div');
        divReemplazo[set]('id', 'foto1');
        divReemplazo[set]('class', 'text-center position-absolute top-0 start-50 translate-middle-x imagenmodal');


        let imgReemplazo = doc[create]('img');
        imgReemplazo[set]('src', this[get]('src'));
        imgReemplazo[set]('alt', this[get]('alt'));
        imgReemplazo[set]('class', 'imagenmodal');

        let galeria = doc[create]('div');
        galeria[set]('id', 'contenedorfotos');

        let ul = doc[create]('ul');
        ul[set]('class', 'd-flex justify-content-center p-0 contenedormodal');

        let li1 = doc[create]('li');
        li1[set]('class', 'mx-2 my-2');
        let li2 = li1.cloneNode();
        let li3 = li1.cloneNode();

        let img1 = doc[create]('img');
        img1[set]('alt', this[get]('alt'));
        img1[set]('style', 'cursor: pointer; height: 150px; width: 120px;')
        img1[set]('class', 'imagen');
        img1[set]('src', this[get]('src'));

        let img2 = doc[create]('img');
        img2[set]('alt', this[get]('alt'));
        img2[set]('style', 'cursor: pointer; height: 150px; width: 248px;');
        img2[set]('src', 'img/modal/' + (this[get]('alt')).replaceAll(' ','-') + '-1.jpg');

        let img3 = doc[create]('img');
        img3[set]('alt', this[get]('alt'));
        img3[set]('style', 'cursor: pointer; height: 150px; width: 248px;');
        img3[set]('src', 'img/modal/' + (this[get]('alt')).replaceAll(' ','-') + '-2.jpg');

        divReemplazo[app](imgReemplazo);
        fotos[app](divReemplazo);
        li1[app](img1);
        li2[app](img2);
        li3[app](img3);
        ul[app](li1);
        ul[app](li2);
        ul[app](li3);
        galeria[app](ul);
        fotos[app](galeria);
        div[app](fotos);

        let precio = doc[create]('p');
        precio[set]('class', 'precio preciomodal');
        precio.innerHTML = this.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.textContent;
        div[app](precio);

        let detalle = doc[create]('p');
        detalle[set]('class', 'text-center fs-6 detallemodal');
        detalle.innerHTML = this.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.textContent;
        div[app](detalle);

        let cerrar = doc[create]('a');
        cerrar[set]('class', 'cerrarmodal')
        cerrar.innerHTML = 'X';
        cerrar[add]('click' , function() {
            body.removeAttribute('style');
        })
        cerrar.onclick = function() {
            modal.remove();
        };

        div[app](cerrar); 

        let button = doc[create]('button');
        button[set]('class',  'item-boton btn-lg btn btn-dark btn-outline-warning agregarproducto agregar botonmodal position-absolute bottom-0 start-50 translate-middle-x fw-light fs-3');
        button.innerHTML = "Agregar al carrito";
        button[add]('click', clickagregar);
        div[app](button); 

        main[app](modal);

        let imagenesjuego = galeria[byTag]('img')
        let contadorfotos = 0;

        if(contadorfotos > 2){
            contadorfotos = 0;
        }

        for (let imagen of imagenesjuego){

            imagen.onclick = function() {

                imgReemplazo.setAttribute('src', this.getAttribute('src'));
                imgReemplazo.setAttribute('alt', this.getAttribute('alt'));
                divReemplazo.appendChild(imgReemplazo);

            }
        }

        if (contadorfotos > 2){
            contadorfotos = 2;
        } else if( contadorfotos < 0){
            contadorfotos = 0;
        }

        window.addEventListener("keydown", function (event) {
                
            if(event.code == 'Escape') {
                modal.remove();
                body.removeAttribute('style');
                window.scrollTo(x,y);
            }
        }
        ,false
        );

        window.addEventListener("keydown", function (event) {

            if(event.code == 'ArrowRight') {
                contadorfotos++;
                if (contadorfotos > 2){
                    contadorfotos = 2;
                }
                
                imgReemplazo.setAttribute('src', imagenesjuego[contadorfotos].getAttribute('src'));
                imgReemplazo.setAttribute('alt', imagenesjuego[contadorfotos].getAttribute('alt'));

            } else if(event.code == 'ArrowLeft'){
                contadorfotos--;
                if( contadorfotos < 0){
                    contadorfotos = 0;
                }
                
                imgReemplazo.setAttribute('src', imagenesjuego[contadorfotos].getAttribute('src'));
                imgReemplazo.setAttribute('alt', imagenesjuego[contadorfotos].getAttribute('alt'));  
            }
        }
        ,false
        );
    
        LocalStorage(img1[get]('src'), precio.textContent, titulo.textContent, button);

    }
}

/////////////////////////////////Funcionalidades////////////////////////////////////

let botonAgregar = doc[queryAll]('.agregarproducto');
botonAgregar.forEach(
    (agregarcarro) => {agregarcarro[add]('click', clickagregar);}
    );

function clickagregar(evento) {

    let boton = evento.target;
    let item = boton.closest('.padre');
    
    let tituloPadre, precioPadre, imagenPadre;

    if (evento.target.textContent == 'Lo quiero'){

        tituloPadre = 'The Legend of Zelda: Links Awakening';
        precioPadre = '$12000';
        imagenPadre = 'img/switch/zelda.jpg';

        let indice = carrito.productos.indexOf(tituloPadre)
        
        if (indice != -1) {
            carrito.cantidad[indice]++;
        } else {
            carrito.precio.push(precioPadre);
            carrito.imagenes.push(imagenPadre);
            carrito.productos.push(tituloPadre);
            carrito.cantidad.push(1);
        }

        let sum = 0;

        for (let i = 0; i < carrito.cantidad.length; i++) {
            sum += carrito.cantidad[i];
        }

        let navCantidad = doc[query]('.navcantidad');
        navCantidad.innerHTML = sum;
        carrito.total += parseInt(precioPadre.substring(1));
        localStorage.carrito = JSON.stringify(carrito);
  
    } else {

        tituloPadre = item[query]('.titulo').textContent;
        precioPadre = item[query]('.precio').textContent;
        imagenPadre = item[query]('.imagen').src;
        console.log(imagenPadre)

    }

    AgregarCompra(tituloPadre, precioPadre, imagenPadre);
}

let contenedorCarrito = doc[query]('.contenedorcarrito');
let tituloProducto = contenedorCarrito[byClass]('Carritotitulo');

function AgregarCompra(tituloPadre, precioPadre, imagenPadre, cantidadStorage) {

    let div = doc[create]('div');
    div[set]('class', 'row mx-0 productoCarrito px-0');

    let producto = doc[create]('div');
    producto[set]('class', 'col-5');

    let cardItem = doc[create]('div');
    cardItem[set]('class', 'shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3');

    let imageProducto = doc[create]('img');
    imageProducto[set]('class', 'shopping-cart-image imagenCarrito');
    imageProducto.src = `${imagenPadre}`;

    let titleProducto = doc[create]('h3');
    titleProducto[set]('class', 'shopping-cart-titulo text-truncate ml-3 mb-0 mx-4 fs-5 Carritotitulo');
    titleProducto.innerHTML = `${tituloPadre}`;

    let valor = doc[create]('div');
    valor[set]('class', 'col-2');

    let cardPrecio = doc[create]('div');
    cardPrecio[set]('class', 'shopping-cart-price d-flex align-items-center h-100 border-bottom');

    let valorPrecio = doc[create]('p');
    valorPrecio[set]('class', 'precio mb-0 ItemPrecio fs-5');
    valorPrecio.innerHTML = `${precioPadre}`;

    let cantidad = doc[create]('div');
    cantidad[set]('class', 'col-5');

    let cardCantidad = doc[create]('div');
    cardCantidad[set]('class', 'shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3 ms-auto px-4');

    for (let i = 0; i < tituloProducto.length; i++) {
        if (tituloProducto[i].innerText == tituloPadre) {

            let Elemento = tituloProducto[i].parentElement.parentElement.parentElement[query]('.Cantidad');
            Elemento.value++;

            TotalCarrito();
            return;
        }
    } 

    let inputCantidad = doc[create]('input');
    inputCantidad[set]('class', 'shopping-cart-quantity-input Cantidad fs-5');
    inputCantidad[set]('type', 'number');
    inputCantidad[set]('value', '1');
    inputCantidad[set]('max', '25');
    inputCantidad[set]('min', '1');


    let subTotal = doc[create]('p');
    subTotal[set]('class', 'precio mb-0 itemSubtotal fs-5');

    if(inputCantidad[get]('value') < cantidadStorage){
        inputCantidad[set]('value', cantidadStorage);
    }

    let buttonCantidad = doc[create]('button');
    buttonCantidad[set]('class', 'btn btn-danger Borrar');
    buttonCantidad[set]('type', 'button');
    buttonCantidad.innerHTML = 'X';

    
    div[app](producto);
    producto[app](cardItem);
    cardItem[app](imageProducto);
    cardItem[app](titleProducto);
    div[app](valor);
    valor[app](cardPrecio);
    cardPrecio[app](valorPrecio);
    div[app](cantidad);
    cantidad[app](cardCantidad);
    cardCantidad[app](inputCantidad);
    cardCantidad[app](subTotal);
    cardCantidad[app](buttonCantidad);   

    contenedorCarrito.append(div);

    div[query]('.Borrar')[add]('click', Remover);
    div[query]('.Cantidad')[add]('click', Cantidad);
    

    TotalCarrito();
}

function Cantidad(evento) {
    let cantidad = evento.target;
    cantidad.value <= 0 ? (cantidad.value = 1) : null;

    TotalCarrito();
}

function Remover(evento) {
    let removerProducto = evento.target;
    removerProducto.closest('.productoCarrito').remove();

    TotalCarrito();
}

let vaciarCarrito = doc[query]('.botonvaciar')
vaciarCarrito[add]('click', clickvaciar);
vaciarCarrito[set]('disabled', '');
vaciarCarrito.onclick = function(){ 

    carrito.cantidad = [];
    carrito.precio = [];
    carrito.imagenes = [];
    carrito.productos = [];
    carrito.total = parseInt(doc[query]('.CarritoTotal').textContent.substring(1));

    localStorage.carrito = JSON.stringify(carrito);

}


let comprar = doc[query]('.botoncompra');
comprar[add]('click', clickformulario);
comprar[set]('disabled', '');

let totalGuardado = '';
let total = 0;
let suma = 0
let navcantidad = doc[query]('.navcantidad');


function clickvaciar() {

    contenedorCarrito.innerHTML = '';
    total = 0;
    suma = 0;
    navcantidad.innerHTML = suma;

    TotalCarrito();
    
}

function TotalCarrito() {

    total = 0;
    let carritoTotal = doc[query]('.CarritoTotal');
    let navPrecio = doc[query]('.navprecio')
    let itemsCarrito = doc[queryAll]('.productoCarrito');

    itemsCarrito.forEach((ComprarItem) => {

        let carritoPrecio = ComprarItem[query]('.ItemPrecio');
        let itemPrecio = Number(carritoPrecio.textContent.replace('$', ''));

        let cantidadElemento = ComprarItem[query]('.Cantidad');
        let cantidadProducto = Number(cantidadElemento.value);

        let subtotalElemento = ComprarItem[query]('.itemSubtotal');
        subtotalElemento.innerHTML = `$${itemPrecio * cantidadProducto}`

        total = total + itemPrecio * cantidadProducto;

        totalGuardado = total;

    });

    suma = 0;
    
    let cantidad = doc[byTag]('input');
    
    for (var i = 0; i < cantidad.length; i++){
        suma += Number(cantidad[i].value);
        navcantidad.innerHTML = suma;

        if (suma > 0){
            comprar.removeAttribute('disabled')
            vaciarCarrito.removeAttribute('disabled')
        }
    }

    carritoTotal.innerHTML = `$${total.toFixed(0)}`;
    navPrecio.innerHTML = `$${total.toFixed(0)}`;


    if (navPrecio.textContent == '$0'){
        navcantidad.innerHTML = 0;
    }

    if(carritoTotal.textContent == '$0'){
        vaciarCarrito[set]('disabled', '');
        comprar[set]('disabled', '');
    }
}

///////////////////////Formulario//////////////////////////

function clickformulario(){

    let modal = doc[create]('div');
    modal[set]('class', 'modal');

    let div = doc[create]('div');
    div[set]('class', 'bg-white container rounded formmodal'); 

    let h2 =  doc[create]('h2');
    h2[set]('class', 'col-10 mt-3 mx-auto');
    h2.innerHTML = 'Datos de Contacto'

    let form = doc[create]('form');
    form[set]('class', 'col-11 mx-auto');
    form[set]('action', '');
    form[set]('method', 'post');
    form[set]('enctype', 'application/x-www-form-urlencoded');

    let nombre = doc[create]('div');
    nombre[set]('class', 'form-floating mb-1');

    let input = doc[create]('input');
    input[set]('type', 'text');
    input[set]('class', 'form-control nombre required');
    input[set]('id', 'floatingInput');
    input[set]('placeholder', 'Nombre');
    input[set]('name', 'Nombre');
    input[set]('required', '');
    input[set]('autocomplete', 'off');

    let label =  doc[create]('label');
    label[set]('for', 'floatingInput');
    label.innerHTML = 'Nombre'

    div[app](h2);
    div[app](form);
    nombre[app](input);
    nombre[app](label);
    form[app](nombre);
    modal[app](div);
    main[app](modal);

    let apellido = nombre.cloneNode(true);
    let inputApellido = apellido.firstElementChild;
    inputApellido[set]('placeholder', 'Apellido');
    inputApellido[set]('name', 'Apellido');
    let labelApellido = apellido.lastElementChild
    labelApellido.innerHTML = 'Apellido'
    form[app](apellido);

    let telefono = nombre.cloneNode(true);
    let inputTelefono = telefono.firstElementChild;
    inputTelefono[set]('type', 'tel');
    inputTelefono[set]('placeholder', 'Telefono');
    inputTelefono[set]('name', 'Telefono');
    inputTelefono.style['border-color'] = 'lightgray';
    inputTelefono[set]('class', 'form-control nombre');
    inputTelefono.removeAttribute('required');
    let labelTelefono = telefono.lastElementChild
    labelTelefono.innerHTML = 'Teléfono'
    form[app](telefono);

    let email = nombre.cloneNode(true);
    let inputEmail = email.firstElementChild;
    inputEmail[set]('type', 'email');
    inputEmail[set]('placeholder', 'nombre@ejemplo.com');
    inputEmail[set]('name', 'Email');
    let labelEmail = email.lastElementChild
    labelEmail.innerHTML = 'Email'
    form[app](email);

    let ciudad = nombre.cloneNode(true);
    let inputCiudad = ciudad.firstElementChild;
    inputCiudad[set]('type', 'text');
    inputCiudad[set]('placeholder', 'Ciudad');
    inputCiudad[set]('name', 'Ciudad');
    inputCiudad[set]('class', 'form-control nombre');
    inputCiudad.style['border-color'] = 'lightgray';
    inputCiudad.removeAttribute('required');
    let labelCiudad = ciudad.lastElementChild;
    labelCiudad.innerHTML = 'Ciudad';
    form[app](ciudad);

    let direccion = nombre.cloneNode(true);
    let inputDireccion = direccion.firstElementChild;
    inputDireccion[set]('type', 'text');
    inputDireccion[set]('placeholder', 'Direccion');
    inputDireccion[set]('name', 'Direccion');
    let labelDireccion = direccion.lastElementChild;
    labelDireccion.innerHTML = 'Dirección';
    form[app](direccion);

    let entrega = nombre.cloneNode(true);
    let inputEntrega = entrega.firstElementChild;
    inputEntrega[set]('type', 'date');
    inputEntrega[set]('placeholder', 'Entrega');
    inputEntrega[set]('name', 'Entrega');
    inputEntrega[set]('min', '2022-02-19');
    let labelEntrega = entrega.lastElementChild;
    labelEntrega.innerHTML = 'Fecha de entrega';
    form[app](entrega);

    let pago = doc[create]('div');
    pago[set]('class', 'form-floating mb-1')

    let select = doc[create]('select');
    select[set]('name', 'pago');
    select[set]('class', 'form-control');
    select[set]('id', 'floatingInput');

    let efectivo = doc[create]('option');
    efectivo[set]('value', 'efectivo');
    efectivo.innerHTML = 'Efectivo - Coordinar con vendedor';

    let tarjeta = efectivo.cloneNode(true);
    tarjeta[set]('value', 'tarjeta');
    tarjeta.innerHTML = 'Tarjeta';

    let labelPago = nombre.lastElementChild.cloneNode(true);
    labelPago.innerHTML = 'Método de pago';

    select[app](efectivo);
    select[app](tarjeta);
    pago[app](select);
    pago[app](labelPago);
    form[app](pago);

    let fieldset =  doc[create]('fieldset');
    fieldset[set]('class', 'none');

    let propietario = nombre.cloneNode(true);
    propietario.firstElementChild[set]('palceholder', 'Propietario');
    propietario.firstElementChild[set]('name', 'Propietario');
    propietario.firstElementChild.removeAttribute('required');
    propietario.lastElementChild.innerHTML = 'Propietario';

    let cardNumber = nombre.cloneNode(true);
    cardNumber.firstElementChild[set]('type', 'number');
    cardNumber.firstElementChild[set]('placeholder', 'CardNumber');
    cardNumber.firstElementChild[set]('name', 'CardNumber');
    cardNumber.firstElementChild.removeAttribute('required');
    cardNumber.lastElementChild.innerHTML = 'Número de Tarjeta';

    let cvv = nombre.cloneNode(true);
    cvv.firstElementChild[set]('type', 'password');
    cvv.firstElementChild[set]('palceholder', 'CVV');
    cvv.firstElementChild[set]('name', 'CVV');
    cvv.firstElementChild[set]('maxlength', '3');
    cvv.firstElementChild.removeAttribute('required');
    cvv.lastElementChild.innerHTML = 'CVV';

    let expiracion = nombre.cloneNode(true);
    expiracion.firstElementChild[set]('type', 'month');
    expiracion.firstElementChild[set]('palceholder', 'Expiracion');
    expiracion.firstElementChild[set]('name', 'Expiracion');
    expiracion.firstElementChild.removeAttribute('required');
    expiracion.lastElementChild.innerHTML = 'Fecha de Expiración';

    let cuotas = pago.cloneNode(false);
    let selectCuotas = pago.firstElementChild.cloneNode(false);
    selectCuotas[set]('name', 'cuotas');
    selectCuotas[set]('class', 'form-control');
    let option = pago.firstElementChild.firstElementChild.cloneNode(false);
    option[set]('value', '1');
    option.innerHTML = '1';
    let option2 = option.cloneNode(true);
    option[set]('value', '3');
    option.innerHTML = '3';
    let option3 = option.cloneNode(true);
    option[set]('value', '6');
    option.innerHTML = '6';
    let option4 = option.cloneNode(true);
    option[set]('value', '12');
    option.innerHTML = '12';
    let option5 = option.cloneNode(true);
    option[set]('value', '18');
    option.innerHTML = '18';

    let labelCuotas = pago.lastElementChild.cloneNode(false);
    labelCuotas[set]('for','floatingInput');
    labelCuotas.innerHTML = 'Cuotas';
    
    selectCuotas[app](option2);
    selectCuotas[app](option3);
    selectCuotas[app](option4);
    selectCuotas[app](option5);
    selectCuotas[app](option);
    cuotas[app](selectCuotas);
    cuotas[app](labelCuotas);
    
    fieldset[app](propietario);
    fieldset[app](cardNumber);
    fieldset[app](cvv);
    fieldset[app](expiracion);
    fieldset[app](cuotas);

    form[app](fieldset);

    let botones = doc[create]('div');
    botones[set]('class', 'd-flex justify-content-between mb-3 mt-1')
    let atras = doc[create]('button');
    atras[set]('type', 'button');
    atras[set]('class', 'btn btn-lg btn-secondary Atras');
    atras.innerHTML = 'Atrás';
    atras[add]('click' , function() {
        body.removeAttribute('style');
    })


    let contenedorBotones = doc[create]('div');
    let limpiar = doc[create]('button');
    limpiar[set]('type', 'reset');
    limpiar[set]('class', 'btn btn-lg btn-light');
    limpiar.innerHTML = 'Limpiar'
    limpiar.onclick = Reset;
    let comprar = doc[create]('button');
    comprar[set]('type', 'submit');
    comprar[set]('class', 'btn btn-success btn-lg Continuar');
    comprar.innerHTML = 'Comprar';
    comprar.onclick = Validacion;

    contenedorBotones[app](limpiar);
    contenedorBotones[app](comprar);
    botones[app](atras);
    botones[app](contenedorBotones);

    form[app](botones);

    select.onclick = function() {
        if(select.value == 'tarjeta'){
            fieldset[set]('class', 'block')
            propietario.firstElementChild[set]('required', '');
            cardNumber.firstElementChild[set]('required', '');
            cvv.firstElementChild[set]('required', '');
            expiracion.firstElementChild[set]('required', '');
            fieldset.disabled = false;
        } else {
            fieldset[set]('class', 'none');
            fieldset.disabled = true;
        }
    };

    atras.onclick = function() {
        modal.remove();
    }

    function Validacion(){

        if(select.value == 'tarjeta'){

            if (propietario.firstElementChild.value == '' || !isNaN(propietario.firstElementChild.value)){
                propietario.firstElementChild.style['border-color'] = 'red';
            } else {
                propietario.firstElementChild.style['border-color'] = 'lightgray';}
    
            if (cardNumber.firstElementChild.value == '' || cardNumber.firstElementChild.value.length != 16 || isNaN(cardNumber.firstElementChild.value)){
                cardNumber.firstElementChild.style['border-color'] = 'red';
                cardNumber.firstElementChild.value = '';
            } else {cardNumber.firstElementChild.style['border-color'] = 'lightgray';}
    
            if (cvv.firstElementChild.value == '' || cvv.firstElementChild.value.length < 3 || isNaN(cvv.firstElementChild.value)){
                cvv.firstElementChild.style['border-color'] = 'red';
                cvv.firstElementChild.value = '';
            } else {cvv.firstElementChild.style['border-color'] = 'lightgray';}
    
            if (expiracion.firstElementChild.value === ''){
                expiracion.firstElementChild.style['border-color'] = 'red';
            } else {expiracion.firstElementChild.style['border-color'] = 'lightgray';}

            ValidacionEfectivo()

            if(input.value != '' 
            & inputApellido.value != '' 
            & inputEmail.value != '' 
            & inputDireccion.value != '' 
            & inputEntrega.value != '' 
            & propietario.firstElementChild.value != '' 
            & cardNumber.firstElementChild.value != '' 
            & cvv.firstElementChild.value != '' 
            & expiracion.firstElementChild.value != ''){
                localStorage.clear();
            }
            
        } else if(select.value == 'efectivo'){

            ValidacionEfectivo()

            if(input.value != '' 
            & inputApellido.value != '' 
            & inputEmail.value != '' 
            & inputDireccion.value != '' 
            & inputEntrega.value != ''){
                localStorage.clear();
            }
        }
        
    }

    function ValidacionEfectivo() {

        if (input.value == '' || !isNaN(input.value)){
            input.style['border-color'] = 'red';
        } else {input.style['border-color'] = 'lightgray';}

        if (inputApellido.value == '' || !isNaN(inputApellido.value)){
            inputApellido.style['border-color'] = 'red';
        } else {inputApellido.style['border-color'] = 'lightgray';}

        if (inputEmail.value.indexOf('@') == -1 || !isNaN(inputEmail.value) || inputEmail.value.indexOf('@') <= 0 ){
            inputEmail.style['border-color'] = 'red';
        } else {inputEmail.style['border-color'] = 'lightgray';}

        if (inputDireccion.value == '' || !isNaN(inputDireccion.value)){
            inputDireccion.style['border-color'] = 'red';
        } else {inputDireccion.style['border-color'] = 'lightgray';}

        if (inputEntrega.value === ''){
            inputEntrega.style['border-color'] = 'red';
        } else {inputEntrega.style['border-color'] = 'lightgray';}
    }


    function Reset(){
        input.style['border-color'] = 'lightgray';
        inputApellido.style['border-color'] = 'lightgray';
        inputEmail.style['border-color'] = 'lightgray';
        inputDireccion.style['border-color'] = 'lightgray';
        inputEntrega.style['border-color'] = 'lightgray';
        propietario.firstElementChild.style['border-color'] = 'lightgray';
        cardNumber.firstElementChild.style['border-color'] = 'lightgray';
        cvv.firstElementChild.style['border-color'] = 'lightgray';
        expiracion.firstElementChild.style['border-color'] = 'lightgray';
        fieldset[set]('class', 'none')
      
    }

    let body = doc[query]('body');
        body[set]('style', 'overflow-y:hidden')

    window.addEventListener("keydown", function (event) {
                
        if(event.code == 'Escape') {
            modal.remove();
            body.removeAttribute('style');
        }
    }
    ,false
    );
}

//////////////////////////////////LocalStorage////////////////////////////////////////

if (localStorage.carrito) {
    carrito = JSON.parse(localStorage.carrito);
} else {
    localStorage.carrito = JSON.stringify(carrito);
}

let botonesAgregar = doc[queryAll]('.agregarproducto')
for (let btn of botonesAgregar){

    let imagen = btn.closest('.padre').firstElementChild[get]('src');
    let nombre = btn.closest('.padre').firstElementChild.nextElementSibling.textContent;
    let precio = btn.previousElementSibling.textContent;

    LocalStorage(imagen, precio, nombre, btn)
}

for (let i = 0; i < carrito.precio.length; i++) {

    carrito.precio[i];
    carrito.productos[i];
    carrito.imagenes[i];
    carrito.cantidad[i];

    AgregarCompra(carrito.productos[i], carrito.precio[i], carrito.imagenes[i], carrito.cantidad[i]);
}

let navPrecio = doc[query]('.navprecio');
let navCantidad = doc[query]('.navcantidad');
let sum = 0;

for (let i = 0; i < carrito.cantidad.length; i++) {
    sum += carrito.cantidad[i];
}

navPrecio.innerHTML = `$${carrito.total}`;
navCantidad.innerHTML = sum;

function LocalStorage(imagen, precio, nombre, btn) {

    if (localStorage.carrito) {
        carrito = JSON.parse(localStorage.carrito);
    } else {
        localStorage.carrito = JSON.stringify(carrito);
    }

    btn.onclick = function() {

        let indice = carrito.productos.indexOf(nombre)
        
        if (indice != -1) {
            carrito.cantidad[indice]++;

        } else {
            carrito.precio.push(precio);
            carrito.imagenes.push(imagen);
            carrito.productos.push(nombre);
            carrito.cantidad.push(1);
        }

        carrito.total += parseInt(precio.substring(1));
        localStorage.carrito = JSON.stringify(carrito);
    }
}

window.onload = function() {
    window.scrollTo(0,0);
}












btnperfil.onclick = function(){

    let home = document.querySelector('#home');
    let section = document.querySelector('section');
    let detalle = document.querySelector('#detalle');
    let perfil = document.querySelector('#perfil');
    let bannerPerfil = document.querySelector('.nameperfil');

    console.log(bannerPerfil);

    bannerPerfil.setAttribute('class', 'container nameperfil d-block');
    detalle.setAttribute('class', 'd-none');
    section.setAttribute('class', 'd-block');
    home.setAttribute('class', 'd-none');
    perfil.setAttribute('class', 'container d-block');

}