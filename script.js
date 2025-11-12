// Datos con rutas de imágenes locales (usan los nombres de los archivos que subiste)
const catalogData = {
    Pistolas: [
        { id: "Glock17", model: "Glock 17 Gen5", caliber: "9mm Parabellum", mechanism: "Semiautomática", price: "300 USD", imageUrl: "images/images.jpeg", detailUrl: "detalle.html?id=Glock17", description: "La pistola de servicio más popular del mundo, conocida por su fiabilidad y durabilidad. Es un arma ligera y precisa." },
        { id: "SigP226", model: "Sig Sauer P226", caliber: ".40 S&W", mechanism: "Semiautomática DA/SA", price: "500 USD", imageUrl: "images/Sig_P226_PM_Equinox.jpg", detailUrl: "detalle.html?id=SigP226", description: "Utilizada por fuerzas especiales alrededor del mundo, se destaca por su precisión y el sistema de doble/simple acción." },
        { id: "Beretta92", model: "Beretta 92FS", caliber: "9mm Parabellum", mechanism: "Semiautomática", price: "650 USD", imageUrl: "images/images (1).jpeg", detailUrl: "detalle.html?id=Beretta92", description: "Pistola emblemática del ejército de EEUU (M9). Diseño clásico de cañón abierto que reduce el riesgo de fallos." }
    ],
    Revolveres: [
        { id: "SWM686", model: "S&W M686", caliber: ".357 Magnum", mechanism: "Doble Acción", price: "1100 USD", imageUrl: "images/images (2).jpeg", detailUrl: "detalle.html?id=SWM686", description: "Revólver potente y versátil, ideal para tiro deportivo y defensa personal, con capacidad para 7 cartuchos." },
        { id: "TaurusJudge", model: "Taurus Judge", caliber: ".45 Colt / .410", mechanism: "Doble Acción", price: "780 USD", imageUrl: "images/REV.-TAURUS-410_JUDGE-1200x1200.jpg", detailUrl: "detalle.html?id=TaurusJudge", description: "Único en su clase, puede disparar cartuchos de revólver y cartuchos de escopeta Calibre .410, excelente para defensa en el campo." }
    ],
    Escopetas: [
        { id: "Remington870", model: "Remington 870", caliber: "Calibre 12", mechanism: "Corredera (Pump)", price: "620 USD", imageUrl: "images/14046_1.jpg", detailUrl: "detalle.html?id=Remington870", description: "Una de las escopetas de corredera más vendidas y confiables de todos los tiempos. Uso táctico y deportivo." },
        { id: "BenelliM4", model: "Benelli M4", caliber: "Calibre 12", mechanism: "Semiautomática", price: "2400 USD", imageUrl: "images/images (3).jpeg", detailUrl: "detalle.html?id=BenelliM4", description: "Escopeta militar semiautomática usada por el Cuerpo de Marines de EE. UU. Destaca por su sistema de pistón de gas autoajustable." }
    ],
    Rifles: [
        { id: "AR15", model: "AR-15 Estándar", caliber: "5.56x45mm", mechanism: "Semiautomático", price: "1500 USD", imageUrl: "images/images (4).jpeg", detailUrl: "detalle.html?id=AR15", description: "Plataforma de rifle moderna y modular, extremadamente popular en el mercado civil por su personalización y bajo retroceso." },
        { id: "Remington700", model: "Remington 700", caliber: ".308 Win", mechanism: "Cerrojo", price: "980 USD", imageUrl: "images/Remington_Model_700.jpeg", detailUrl: "detalle.html?id=Remington700", description: "Rifle de cerrojo clásico, estándar de oro para rifles de caza y tiro de precisión. Conocido por su acción extremadamente precisa." }
    ],
    Subfusiles: [
        { id: "MP5", model: "H&K MP5 (Civil)", caliber: "9mm Parabellum", mechanism: "Semiautomático", price: "2900 USD", imageUrl: "images/images (5).jpeg", detailUrl: "detalle.html?id=MP5", description: "Versión civil de un subfusil legendario, famoso por su sistema de retroceso retardado que ofrece gran control." },
        { id: "CZScorpion", model: "CZ Scorpion Evo 3", caliber: "9mm Parabellum", mechanism: "Semiautomático", price: "1350 USD", imageUrl: "images/images (6).jpeg", detailUrl: "detalle.html?id=CZScorpion", description: "Diseño moderno y modular, popular por su tamaño compacto, ergonomía y cargadores de alta capacidad." }
    ]
};


// 1. Función para crear la tarjeta de producto con enlace y imagen
function createProductCard(weapon) {
    const link = document.createElement('a');
    link.classList.add('product-link');
    link.href = weapon.detailUrl; 
    link.target = "_blank"; 

    const card = document.createElement('div');
    card.classList.add('product-card');

    // Usamos el nombre del archivo local en la ruta
    card.innerHTML = `
        <img src="${weapon.imageUrl}" alt="${weapon.model}" class="product-image">
        <h3 class="product-title">${weapon.model}</h3>
        <p class="product-detail"><strong>Calibre:</strong> <span class="caliber">${weapon.caliber}</span></p>
        <p class="product-detail"><strong>Mecanismo:</strong> ${weapon.mechanism}</p>
        <div class="price">${weapon.price}</div>
        <button class="buy-button">Añadir al Carrito</button>
    `;
    
    link.appendChild(card);
    
    return link;
}

// 2. Función para cargar el catálogo
function loadCatalog(category) {
    const contentDiv = document.getElementById(category);
    
    contentDiv.innerHTML = `<h2>${contentDiv.querySelector('h2').textContent}</h2><div class="product-grid"></div>`;
    
    const productGrid = contentDiv.querySelector('.product-grid');
    
    if (catalogData[category]) {
        catalogData[category].forEach(weapon => {
            productGrid.appendChild(createProductCard(weapon));
        });
    }
}

// 3. Función para manejar el cambio de pestañas
function openCategory(evt, categoryName) {
    let i, tabcontent, tabbuttons;

    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].classList.remove("active-content");
    }

    tabbuttons = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabbuttons.length; i++) {
        tabbuttons[i].classList.remove("active");
    }

    document.getElementById(categoryName).style.display = "block";
    document.getElementById(categoryName).classList.add("active-content");
    evt.currentTarget.classList.add("active");

    loadCatalog(categoryName);
}

// 4. Inicialización al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("Pistolas").style.display = "block";
    loadCatalog('Pistolas');
});