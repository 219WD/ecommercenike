class Producto {
    constructor(
        id,
        marca,
        modelo,
        categoria,
        talle,
        imagen,
        precio
    ) {
        this.id = id;
        this.marca = marca;
        this.modelo = modelo;
        this.categoria = categoria;
        this.talle = talle;
        this.imagen = imagen;
        this.precio = precio;
    }
}

const productos = JSON.parse(localStorage.getItem("productos")) || [];

const inicializacion = () => {
    const data = [{
        id: 1,
        marca: "nike",
        modelo: "dunk",
        categoria: "low",
        talle: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        imagen: "https://nikearprod.vtexassets.com/arquivos/ids/498450-800-800?v=638151117878670000&width=800&height=800&aspect=true",
        precio: 83.999,
    },
    {
        id: 2,
        marca: "nike",
        modelo: "dunk",
        categoria: "low",
        talle: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        imagen: "https://nikearprod.vtexassets.com/arquivos/ids/532085-800-800?v=638161388297170000&width=800&height=800&aspect=true",
        precio: 74.999,
    },
    {
        id: 3,
        marca: "nike",
        modelo: "dunk",
        categoria: "high",
        talle: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        imagen: "https://nikearprod.vtexassets.com/arquivos/ids/532014-800-800?v=638161387218070000&width=800&height=800&aspect=true",
        precio: 87.999,
    },
    {
        id: 4,
        marca: "nike",
        modelo: "dunk",
        categoria: "low",
        talle: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        imagen: "https://nikearprod.vtexassets.com/arquivos/ids/532071-800-800?v=638161388110970000&width=800&height=800&aspect=true",
        precio: 74.999,
    },
    {
        id: 5,
        marca: "nike",
        modelo: "dunk",
        categoria: "low",
        talle: [5, 5.5, 6, 6.5, 7, 7.5, 8],
        imagen: "https://nikearprod.vtexassets.com/arquivos/ids/531049-800-800?v=638161373370830000&width=800&height=800&aspect=true",
        precio: 74.999,
    },
    {
        id: 6,
        marca: "nike",
        modelo: "dunk",
        categoria: "niño",
        talle: [3, 3.5, 4, 4.5, 5, 5.5, 6],
        imagen: "https://nikearprod.vtexassets.com/arquivos/ids/628346-800-800?v=638210580627870000&width=800&height=800&aspect=true",
        precio: 44.999,
    },
    {
        id: 7,
        marca: "jordan",
        modelo: "retro 1",
        categoria: "high",
        talle: [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        imagen: "https://nikearprod.vtexassets.com/arquivos/ids/702731-800-800?v=638233931477530000&width=800&height=800&aspect=true",
        precio: 99.999,
    },
    {
        id: 8,
        marca: "jordan",
        modelo: "retro 1",
        categoria: "mid",
        talle: [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        imagen: "https://nikearprod.vtexassets.com/arquivos/ids/531140-800-800?v=638161374684830000&width=800&height=800&aspect=true",
        precio: 103.999,
    },
    {
        id: 9,
        marca: "jordan",
        modelo: "retro 3",
        categoria: "mid",
        talle: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        imagen: "https://nikearprod.vtexassets.com/arquivos/ids/698254-800-800?v=638229571158970000&width=800&height=800&aspect=true",
        precio: 143.999,
    },
    {
        id: 10,
        marca: "jordan",
        modelo: "retro 5",
        categoria: "high",
        talle: [7, 7.5, 8, 8.5, 10, 10.5, 11.5, 12],
        imagen: "https://nikearprod.vtexassets.com/arquivos/ids/532359-800-800?v=638161392071800000&width=800&height=800&aspect=true",
        precio: 155.999,
    },
    {
        id: 11,
        marca: "jordan",
        modelo: "dubzero",
        categoria: "mid",
        talle: [6, 6.5, 7.5, 8.5, 9, 10, 10.5, 11.5, 13],
        imagen: "https://nikearprod.vtexassets.com/arquivos/ids/528864-800-800?v=638161343074170000&width=800&height=800&aspect=true",
        precio: 115.999,
    },
    {
        id: 12,
        marca: "jordan",
        modelo: "legacy",
        categoria: "low",
        talle: [7, 8, 8.5, 9],
        imagen: "https://nikearprod.vtexassets.com/arquivos/ids/378779-800-800?v=638138927048800000&width=800&height=800&aspect=true",
        precio: 103.999,
    },
    {
        id: 13,
        marca: "jordan",
        modelo: "retro 3",
        categoria: "high",
        talle: [7, 7.5, 9.5, 10, 10.5, 11, 11.5, 12, 13],
        imagen: "https://nikearprod.vtexassets.com/arquivos/ids/157554-800-800?v=638086307297900000&width=800&height=800&aspect=true",
        precio: 143.999,
    },
    {
        id: 14,
        marca: "jordan",
        modelo: "retro 6",
        categoria: "high",
        talle: [5, 5.5, 6, 6.5, 7],
        imagen: "https://nikearprod.vtexassets.com/arquivos/ids/158958-800-800?v=638086326697770000&width=800&height=800&aspect=true",
        precio: 143.999,
    },
    {
        id: 15,
        marca: "nike",
        modelo: "force",
        categoria: "niño",
        talle: [3, 4.5, 5, 5.5, 6, 6.5, 7],
        imagen: "https://nikearprod.vtexassets.com/arquivos/ids/453918-800-800?v=638149301781930000&width=800&height=800&aspect=true",
        precio: 56.999,
    },
    {
        id: 16,
        marca: "nike",
        modelo: "force",
        categoria: "low",
        talle: [5.5, 6, 6.5, 8.5, 10.5, 11, 12],
        imagen: "https://nikearprod.vtexassets.com/arquivos/ids/629256-800-800?v=638210595101330000&width=800&height=800&aspect=true",
        precio: 83.999,
    },
    {
        id: 17,
        marca: "nike",
        modelo: "force",
        categoria: "mid",
        talle: [8, 8.5, 10.5, 11, 11.5, 13],
        imagen: "https://nikearprod.vtexassets.com/arquivos/ids/658672-800-800?v=638221810286670000&width=800&height=800&aspect=true",
        precio: 93.999,
    },
    {
        id: 18,
        marca: "nike",
        modelo: "force",
        categoria: "low",
        talle: [5, 5.5, 6, 6.5, 7, 7.5, 8],
        imagen: "https://nikearprod.vtexassets.com/arquivos/ids/408190-800-800?v=638143141211500000&width=800&height=800&aspect=true",
        precio: 87.999,
    },
    {
        id: 19,
        marca: "nike",
        modelo: "force",
        categoria: "mid",
        talle: [7, 9, 10.5, 11],
        imagen: "https://nikearprod.vtexassets.com/arquivos/ids/531800-800-800?v=638161384321300000&width=800&height=800&aspect=true",
        precio: 93.999,
    },
    {
        id: 20,
        marca: "nike",
        modelo: "force",
        categoria: "niño",
        talle: [5, 5.5],
        imagen: "https://nikearprod.vtexassets.com/arquivos/ids/439665-800-800?v=638145706057400000&width=800&height=800&aspect=true",
        precio: 43.999,
    },
    // {
    //     id: 21,
    //     marca: "nike",
    //     modelo: "huarache",
    //     categoria: "niño",
    //     talle: [3.5, 4, 5, 5.5],
    //     imagen: "https://nikearprod.vtexassets.com/arquivos/ids/699319/DH4439_102_A_PREM.jpg?v=638229667208170000",
    //     precio: 53.999,
    // },
    // {
    //     id: 22,
    //     marca: "nike",
    //     modelo: "huarache",
    //     categoria: "low",
    //     talle: [5, 5.5, 8.5, 10, 10.5, 11],
    //     imagen: "https://nikearprod.vtexassets.com/arquivos/ids/311675/DR0286_100_A_PREM.jpg?v=638122463309300000",
    //     precio: 93.999,
    // },
    // {
    //     id: 23,
    //     marca: "nike",
    //     modelo: "huarache",
    //     categoria: "low",
    //     talle: [9, 9.5, 11, 12],
    //     imagen: "https://nikearprod.vtexassets.com/arquivos/ids/647947/DQ8031_101_A_PREM.jpg?v=638212459962300000",
    //     precio: 97.999,
    // },
    // {
    //     id: 24,
    //     marca: "nike",
    //     modelo: "force",
    //     categoria: "low",
    //     talle: [5, 5.5, 6, 7, 7.5, 8, 9.5],
    //     imagen: "https://nikearprod.vtexassets.com/arquivos/ids/597264/DV0486_100_A_PREM.jpg?v=638187285738430000",
    //     precio: 99.999,
    // },
    // {
    //     id: 25,
    //     marca: "nike",
    //     modelo: "huarache",
    //     categoria: "niño",
    //     talle: [5, 5.5, 6],
    //     imagen: "https://nikearprod.vtexassets.com/arquivos/ids/422637/DM0863_001_A_PREM.jpg?v=638143979231470000",
    //     precio: 42.999,
    // },
    // {
    //     id: 26,
    //     marca: "nike",
    //     modelo: "air max",
    //     categoria: "low",
    //     talle: [8.5, 9, 10, 10.5, 11, 11.5, 12],
    //     imagen: "https://nikearprod.vtexassets.com/arquivos/ids/702265/FB8915_600_A.jpg?v=638233918879400000",
    //     precio: 117.999,
    // },
    // {
    //     id: 27,
    //     marca: "nike",
    //     modelo: "air max 90",
    //     categoria: "low",
    //     talle: [7, 7.5, 8, 10, 10.5, 11],
    //     imagen: "https://nikearprod.vtexassets.com/arquivos/ids/455087/DV1734_100_A_PREM.jpg?v=638149320198930000",
    //     precio: 97.999,
    // },
    // {
    //     id: 28,
    //     marca: "nike",
    //     modelo: "air max",
    //     categoria: "niño",
    //     talle: [3, 3.5, 4, 4.5, 5, 5.5, 6],
    //     imagen: "https://nikearprod.vtexassets.com/arquivos/ids/658109/CW4554_101_A_PREM.jpg?v=638221802895230000",
    //     precio: 52.999,
    // },
    // {
    //     id: 29,
    //     marca: "nike",
    //     modelo: "air max 97",
    //     categoria: "low",
    //     talle: [7, 7.5, 8, 9, 9.5, 10],
    //     imagen: "https://nikearprod.vtexassets.com/arquivos/ids/455554/DZ5348_288_A_PREM.jpg?v=638149327767330000",
    //     precio: 125.999,
    // },
    // {
    //     id: 30,
    //     marca: "nike",
    //     modelo: "air max 97",
    //     categoria: "low",
    //     talle: [6, 6.5, 7.5, 8.5, 9, 10, 10.5, 11.5, 13],
    //     imagen: "https://nikearprod.vtexassets.com/arquivos/ids/530037/DM0011_004_A_PREM.jpg?v=638161359207600000",
    //     precio: 122.999,
    // },
    // {
    //     id: 31,
    //     marca: "nike",
    //     modelo: "air max vapormax",
    //     categoria: "niño",
    //     talle: [5, 5.5, 6, 6.5, 7],
    //     imagen: "https://nikearprod.vtexassets.com/arquivos/ids/379239/DC4112_002_A_PREM.jpg?v=638138933097630000",
    //     precio: 136.999,
    // },
    // {
    //     id: 32,
    //     marca: "nike",
    //     modelo: "air max 97",
    //     categoria: "low",
    //     talle: [5, 5.5, 6, 7, 8],
    //     imagen: "https://nikearprod.vtexassets.com/arquivos/ids/156922/DM8588_400_A_PREM-hei-3144-wid-3144-fmt.jpg?v=638086298709130000",
    //     precio: 125.999,
    // },
    ];

    data.forEach((item) => {
        let prod = new Producto(
            item.id,
            item.marca,
            item.modelo,
            item.categoria,
            item.talle,
            item.imagen,
            item.precio
        );

        productos.push(prod);
    });
    localStorage.setItem("productos", JSON.stringify(productos));
};

//CAPTURAMOS EL CONTENEDOR
let contenedor = document.querySelector(".contenedor");

//CREAMOS LAS CARD CON LOS OBJETOS
const listarProductos = () => {
    contenedor.innerHTML = "";
    productos.forEach((item) => {
        let columna = document.createElement("div");
        columna.classList = "zapatillas";

        let tarjeta = `
            <div class="zapatillas">
                <div class="contenedor-img">
                    <img src="${item.imagen}" class="img-card" alt="${item.marca}">
                </div>
                <div class="info">
                    <h2>${item.marca} ${item.modelo}</h2> 
                    <p>Zapatillas ${item.categoria}</p>   
                    <h2>$${item.precio}</h2>
                    <button class="overlayOpen" data-id="${item.id}">VER PRODUCTO</button>
                </div>
            </div>
        `;

        columna.innerHTML = tarjeta;
        contenedor.appendChild(columna);
    });
};

if (productos.length === 0) {
    inicializacion();
}

listarProductos();


//PRODUCTO (OVERLAY)

document.querySelectorAll("button.overlayOpen").forEach((button) => {
    button.addEventListener("click", () => {
        const productoId = parseInt(button.dataset.id);
        const producto = productos.find((p) => p.id === productoId);

        const overlay = document.createElement("div");
        overlay.classList.add("producto");

        // Crea los botones de selección de talles
        const talleButtons = producto.talle.map((talle) => `<button class="talle">${talle}</button>`).join('');

        overlay.innerHTML = `
            <div class="contenedor-img-producto">
                <img src="${producto.imagen}" class="img-card" alt="${producto.marca}">
            </div>
            <div class="info-producto">
                <h2 class="titulo-producto">${producto.marca} <span>${producto.modelo}</span></h2> 
                <p class="categoria-producto">Zapatillas ${producto.categoria}</p>   
                <div class="talles">
                ${talleButtons}
                </div>
                <h2 class="precio-producto">$${producto.precio}</h2>
                <button class="agregarCarrito">AGREGAR AL CARRITO</button>
                <button class="overlayClose">[x]</button>
            </div>
        `;

        document.body.appendChild(overlay);


        //CREAMOS LA ANIMACION DEL OVERLAY
        const tl = new TimelineMax({ paused: true });
        tl.from(".producto", {
            y: "-100vh",
        });

        tl.reverse();

        document.addEventListener("click", function (event) {
            if (event.target.classList.contains("overlayOpen") || event.target.classList.contains("overlayClose")) {
                tl.reversed(!tl.reversed());
            }
        });
    });
});



//SEARCH

document.addEventListener("DOMContentLoaded", function () {
    const searchIcon = document.querySelector(".search");

    searchIcon.addEventListener("click", function () {
        const menuSearch = document.querySelector(".menu-search");

        // CREAMOS INPUT Y BUTTON
        const input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("placeholder", "Buscar...");

        const button = document.createElement("button");
        button.textContent = "Buscar";
        button.classList = "button-search"


        // AGREGAMOS EVENTOS AL BUTTON
        button.addEventListener("click", function () {
            const searchTerm = input.value.toLowerCase();

            // EJECUTAR LAS FUNCIONES DE BUSQUEDA
            const resultadosMarca = productos.filter(producto => buscarPorMarca(producto, searchTerm));
            const resultadosTalle = productos.filter(producto => buscarPorTalle(producto, parseFloat(searchTerm)));
            const resultadosModelo = productos.filter(producto => buscarPorModelo(producto, searchTerm));

            const resultados = [...resultadosMarca, ...resultadosTalle, ...resultadosModelo];

            listarResultados(resultados);
        });

        //AGREGAMOS EL MENU DE SEARCH
        menuSearch.innerHTML = "";
        menuSearch.appendChild(input);
        menuSearch.appendChild(button);
    });
});

//LISTAMOS LOS RESULTADOS DEL SEARCH
function listarResultados(resultados) {
    contenedor.innerHTML = "";
    resultados.forEach((item) => {
        let columna = document.createElement("div");
        columna.classList = "zapatillas";

        let tarjeta = `
            <div class="zapatillas">
                <div class="contenedor-img">
                    <img src="${item.imagen}" class="img-card" alt="${item.marca}">
                </div>
                <div class="info">
                    <h2>${item.marca} ${item.modelo}</h2> 
                    <p>Zapatillas ${item.categoria}</p>   
                    <h2>$${item.precio}</h2>
                    <button class="overlayOpen" data-id="${item.id}">VER PRODUCTO</button>
                </div>
            </div>
        `;

        columna.innerHTML = tarjeta;
        contenedor.appendChild(columna);
    });
}

//FUNCIONES PARA EL SEARCH

function buscarPorMarca(producto, marca) {
    return producto.marca.toLowerCase().includes(marca);
}

function buscarPorTalle(producto, talle) {
    return producto.talle.includes(talle);
}

function buscarPorModelo(producto, modelo) {
    return producto.modelo.toLowerCase().includes(modelo);
}

//ANIMACION DEL SEARCH (LUPITA)
document.addEventListener("DOMContentLoaded", function () {
    const menuSearch = document.querySelector(".menu-search");
    const searchIcon = document.querySelector(".search");
    let isSearchOpen = false;
    const tlMenuSearch = new TimelineMax({ paused: true });
    tlMenuSearch.from(menuSearch, { y: "-100vh" });

    // ESCONDEMOS EL DIV
    menuSearch.style.display = "none";

    //CAMBIAMOS LA LUPITA A CLOSE
    searchIcon.addEventListener("click", function () {
        if (isSearchOpen) {
            tlMenuSearch.reverse();
            searchIcon.innerHTML = `<ion-icon name="search-sharp"></ion-icon>`;
        } else {
            tlMenuSearch.play();
            menuSearch.style.display = "flex";
            searchIcon.innerHTML = `<ion-icon name="close-sharp"></ion-icon>`;
        }
        isSearchOpen = !isSearchOpen;
    });
});