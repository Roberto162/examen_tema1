/*
=========================================
PROYECTO: BARCO PIRATA EN CANVAS
DOCUMENTACIÓN DE OBJETOS
=========================================
*/

window.onload = function () {

    // Obtenemos el elemento canvas por su ID
    const canvas = document.getElementById("miCanvas");

    // Obtenemos el contexto 2D para poder dibujar
    const ctx = canvas.getContext("2d");


    /*
    ==================================================
    OBJETO #1 – FONDO DEL CANVAS
    ==================================================
    Tipo: Rectángulo
    Posición inicial: (0,0)
    Ancho: 200px
    Alto: 500px
    Color: Blanco (#ffffff)
    Función: Crear el fondo base del escenario
    ==================================================
    */
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, 200, 500);


    // Llamamos a la función que dibuja el barco
    dibujarBarco(ctx);
};



function dibujarBarco(ctx) {

    /*
    ==================================================
    OBJETO #2 – CASCO DEL BARCO
    ==================================================
    Tipo: Semielipse (medio óvalo)
    Centro: (250, 280)
    Radio Horizontal (radioX): 140px
    Radio Vertical (radioY): 110px
    Color de relleno: Rojo (#e10600)
    Borde: Negro
    Grosor de línea: 1px
    Ángulo inicial: 0 radianes
    Ángulo final: Math.PI (180°)
    Función: Representar la base estructural del barco
    ==================================================
    */

    // Definimos el centro y radios del casco
    const centroX = 250;
    const centroY = 280;
    const radioX = 140; // Ancho del casco
    const radioY = 110; // Profundidad del casco

    // Iniciamos trazo
    ctx.beginPath();

    // Configuración de colores y borde
    ctx.fillStyle = "#e10600";
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 1;

    /*
    Argumentos de ellipse:
    (x, y, radioX, radioY, rotacion, anguloInicio, anguloFin, sentido)
    */
    ctx.ellipse(
        centroX,
        centroY,
        radioX,
        radioY,
        0,           // Sin rotación
        0,           // Comienza en extremo derecho
        Math.PI,     // Termina en extremo izquierdo
        false        // Dirección normal (horario)
    );

    // Cierra la figura con una línea recta superior
    ctx.closePath();

    // Rellena la figura
    ctx.fill();

    // Dibuja el borde
    ctx.stroke();


/*
==================================================
OBJETO #3 – Triángulo Superior Izquierdo
Tipo: Triángulo
Color: #a82828
Borde: Negro (1px)
Función: Parte decorativa/frontal del casco
Coordenadas:
(110,280) Punta superior
(150,255) Base izquierda
(185,280) Base derecha
==================================================
*/
ctx.beginPath();
ctx.fillStyle = "#a82828"; 
ctx.strokeStyle = "#000000";
ctx.lineWidth = 1;

ctx.moveTo(110, 280);
ctx.lineTo(150, 255);
ctx.lineTo(185, 280);

ctx.closePath();
ctx.fill();
ctx.stroke();



/*
==================================================
OBJETO #4 – Triángulo Superior Central
Tipo: Triángulo
Color: #e10600
Borde: Negro (1px)
Función: Extensión del diseño superior del casco
Coordenadas:
(150,255)
(110,280)
(80,255)
==================================================
*/
ctx.beginPath();
ctx.fillStyle = "#e10600";
ctx.strokeStyle = "#000000";
ctx.lineWidth = 1;

ctx.moveTo(150, 255);
ctx.lineTo(110, 280);
ctx.lineTo(80, 255);

ctx.closePath();
ctx.fill();
ctx.stroke();



/*
==================================================
OBJETO #5 – Triángulo Lateral Izquierdo
Tipo: Triángulo
Color: #a82828
Borde: Negro (1px)
Función: Cierre lateral del casco
Coordenadas:
(80,255)
(80,280)
(110,280)
==================================================
*/
ctx.beginPath();
ctx.fillStyle = "#a82828"; 
ctx.strokeStyle = "#000000";
ctx.lineWidth = 1;

ctx.moveTo(80, 255);
ctx.lineTo(80, 280);
ctx.lineTo(110, 280);

ctx.closePath();
ctx.fill();
ctx.stroke();



/*
==================================================
OBJETO #6 – Triángulo Inferior Externo
Tipo: Triángulo
Color: #a82828
Borde: Negro (1px)
Función: Elemento decorativo junto al barco
Coordenadas:
(110,290)
(80,360)
(130,360)
==================================================
*/
ctx.beginPath();
ctx.fillStyle = "#a82828"; 
ctx.strokeStyle = "#000000";
ctx.lineWidth = 1;

ctx.moveTo(110, 290);
ctx.lineTo(80, 360);
ctx.lineTo(130, 360);

ctx.closePath();
ctx.fill();
ctx.stroke();

 // =====================
// ANCLA
// =====================

/*
==================================================
OBJETO #7 – Base Inferior del Ancla
Tipo: Triángulo
Color: Gris (#8b8b8b)
Borde: Negro (1px)
Función: Parte inferior del ancla (soporte/base)
Coordenadas:
(325,325)
(350,325)
(337,335)
==================================================
*/
ctx.beginPath();
ctx.fillStyle = "#8b8b8b";
ctx.strokeStyle = "#000000";
ctx.lineWidth = 1;

ctx.moveTo(325, 325);
ctx.lineTo(350, 325);
ctx.lineTo(337, 335);

ctx.closePath();
ctx.fill();
ctx.stroke();



/*
==================================================
OBJETO #8 – Círculo Superior del Ancla
Tipo: Círculo
Centro: (338,307)
Radio: 3px
Color: Gris (#8b8b8b)
Borde: Negro (1px)
Función: Parte superior decorativa del ancla
==================================================
*/
ctx.fillStyle = "#8b8b8b";
ctx.strokeStyle = "#000000";
ctx.lineWidth = 1;

ctx.beginPath();
ctx.arc(338, 307, 3, 0, Math.PI * 2);
ctx.stroke();
ctx.closePath();
ctx.fill();



/*
==================================================
OBJETO #9 – Línea Vertical del Ancla
Tipo: Línea
Color: Gris oscuro (#929292)
Grosor: 3px
Función: Cuerpo principal del ancla
Desde: (338,307)
Hasta: (338,327)
==================================================
*/
ctx.fillStyle = "#8b8b8b";
ctx.strokeStyle = "#929292";
ctx.lineWidth = 3;

ctx.beginPath();
ctx.moveTo(338, 307);
ctx.lineTo(338, 327);
ctx.stroke();
ctx.closePath();
ctx.fill();

// =====================
// POPA (estructura gris)
// =====================

/*
==================================================
OBJETO #10 – Estructura Principal de la Popa
Tipo: Triángulo
Color: Azul (#1f4fd1)
Borde: Negro (1px)
Función: Parte trasera elevada del barco
Coordenadas:
(390,280)
(460,259)
(400,310)
==================================================
*/
ctx.beginPath();
ctx.fillStyle = "#1f4fd1"; 
ctx.strokeStyle = "#000000";
ctx.lineWidth = 1;

ctx.moveTo(390, 280);
ctx.lineTo(460, 259);
ctx.lineTo(400, 310);

ctx.closePath();
ctx.fill();
ctx.stroke();



/*
==================================================
OBJETO #11 – Línea Superior de la Popa
Tipo: Línea
Color: Gris oscuro (#302d2d)
Grosor: 4px
Función: Borde superior estructural
Desde: (390,280)
Hasta: (485,252)
==================================================
*/
ctx.fillStyle = "#443d3d";
ctx.strokeStyle = "#302d2d";
ctx.lineWidth = 4;

ctx.beginPath();
ctx.moveTo(390, 280);
ctx.lineTo(485, 252);
ctx.stroke();
ctx.closePath();
ctx.fill();



// =====================
// MAR FILA TRASERA
// =====================

/*
==================================================
OBJETO #12 – Ola 1
Tipo: Triángulo
Color: #62aee0
Coordenadas:
(30,400)
(80,360)
(120,400)
==================================================
*/
ctx.beginPath();
ctx.fillStyle = "#62aee0";
ctx.strokeStyle = "#000000";
ctx.lineWidth = 1;

ctx.moveTo(30, 400);
ctx.lineTo(80, 360);
ctx.lineTo(120, 400);
ctx.closePath();
ctx.fill();
ctx.stroke();



/*
==================================================
OBJETO #13 – Ola 2
Tipo: Triángulo
Color: #7ab6df
Coordenadas:
(105,400)
(170,360)
(222,400)
==================================================
*/
ctx.beginPath();
ctx.fillStyle = "#7ab6df";
ctx.strokeStyle = "#000000";
ctx.lineWidth = 1;

ctx.moveTo(105, 400);
ctx.lineTo(170, 360);
ctx.lineTo(222, 400);
ctx.closePath();
ctx.fill();
ctx.stroke();



/*
==================================================
OBJETO #14 – Ola 3
Tipo: Triángulo
Color: #62cde0
Coordenadas:
(170,400)
(270,350)
(320,400)
==================================================
*/
ctx.beginPath();
ctx.fillStyle = "#62cde0";
ctx.strokeStyle = "#000000";
ctx.lineWidth = 1;

ctx.moveTo(170, 400);
ctx.lineTo(270, 350);
ctx.lineTo(320, 400);
ctx.closePath();
ctx.fill();
ctx.stroke();



/*
==================================================
OBJETO #15 – Ola 4
Tipo: Triángulo
Color: #92e2f0
Coordenadas:
(280,400)
(350,350)
(400,400)
==================================================
*/
ctx.beginPath();
ctx.fillStyle = "#92e2f0";
ctx.strokeStyle = "#000000";
ctx.lineWidth = 1;

ctx.moveTo(280, 400);
ctx.lineTo(350, 350);
ctx.lineTo(400, 400);
ctx.closePath();
ctx.fill();
ctx.stroke();



/*
==================================================
OBJETO #16 – Ola 5
Tipo: Triángulo
Color: #65a2e7
Coordenadas:
(360,400)
(430,350)
(480,400)
==================================================
*/
ctx.beginPath();
ctx.fillStyle = "#65a2e7";
ctx.strokeStyle = "#000000";
ctx.lineWidth = 1;

ctx.moveTo(360, 400);
ctx.lineTo(430, 350);
ctx.lineTo(480, 400);
ctx.closePath();
ctx.fill();
ctx.stroke();

// =====================
// MAR FILA FRONTAL
// =====================

/*
==================================================
OBJETO #17 – Ola Frontal 1
Tipo: Triángulo
Color: #1abc9c
Coordenadas:
(10,440)
(83,380)
(140,440)
==================================================
*/
ctx.beginPath();
ctx.fillStyle = "#1abc9c";
ctx.strokeStyle = "#000000";
ctx.lineWidth = 1;
ctx.moveTo(10, 440);
ctx.lineTo(83, 380);
ctx.lineTo(140, 440);
ctx.closePath();
ctx.fill();
ctx.stroke();



/*
==================================================
OBJETO #18 – Ola Frontal 2
Tipo: Triángulo
Color: #2c97aa
Coordenadas:
(80,440)
(165,375)
(260,440)
==================================================
*/
ctx.beginPath();
ctx.fillStyle = "#2c97aa";
ctx.strokeStyle = "#000000";
ctx.lineWidth = 1;
ctx.moveTo(80, 440);
ctx.lineTo(165, 375);
ctx.lineTo(260, 440);
ctx.closePath();
ctx.fill();
ctx.stroke();



/*
==================================================
OBJETO #19 – Ola Frontal 3
Tipo: Triángulo
Color: #1abc9c
Coordenadas:
(180,440)
(270,380)
(320,440)
==================================================
*/
ctx.beginPath();
ctx.fillStyle = "#1abc9c";
ctx.strokeStyle = "#000000";
ctx.lineWidth = 1;
ctx.moveTo(180, 440);
ctx.lineTo(270, 380);
ctx.lineTo(320, 440);
ctx.closePath();
ctx.fill();
ctx.stroke();



/*
==================================================
OBJETO #20 – Ola Frontal 4
Tipo: Triángulo
Color: #248370
Coordenadas:
(230,440)
(330,380)
(410,440)
==================================================
*/
ctx.beginPath();
ctx.fillStyle = "#248370";
ctx.strokeStyle = "#000000";
ctx.lineWidth = 1;
ctx.moveTo(230, 440);
ctx.lineTo(330, 380);
ctx.lineTo(410, 440);
ctx.closePath();
ctx.fill();
ctx.stroke();



/*
==================================================
OBJETO #21 – Ola Frontal 5
Tipo: Triángulo
Color: #48b889
Coordenadas:
(330,440)
(430,380)
(470,440)
==================================================
*/
ctx.beginPath();
ctx.fillStyle = "#48b889";
ctx.strokeStyle = "#000000";
ctx.lineWidth = 1;
ctx.moveTo(330, 440);
ctx.lineTo(430, 380);
ctx.lineTo(470, 440);
ctx.closePath();
ctx.fill();
ctx.stroke();

/*
==================================================
OBJETO #22 – Mástil 1 (pequeño)
Tipo: Línea vertical
Grosor: 4px
Desde: (80,255)
Hasta: (80,210)
==================================================
*/
ctx.beginPath();
ctx.lineWidth = 4;
ctx.moveTo(80, 255);
ctx.lineTo(80, 210);
ctx.stroke();



/*
==================================================
OBJETO #23 – Mástil 2
Tipo: Línea vertical
Grosor: 6px
Desde: (150,255)
Hasta: (150,75)
==================================================
*/
ctx.beginPath();
ctx.lineWidth = 6;
ctx.moveTo(150, 255);
ctx.lineTo(150, 75);
ctx.stroke();



/*
==================================================
OBJETO #24 – Mástil 3
Tipo: Línea vertical
Grosor: 6px
Desde: (245,280)
Hasta: (245,25)
==================================================
*/
ctx.beginPath();
ctx.lineWidth = 6;
ctx.moveTo(245, 280);
ctx.lineTo(245, 25);
ctx.stroke();



/*
==================================================
OBJETO #25 – Mástil 4
Tipo: Línea vertical
Grosor: 6px
Desde: (340,280)
Hasta: (340,65)
==================================================
*/
ctx.beginPath();
ctx.lineWidth = 6;
ctx.moveTo(340, 280);
ctx.lineTo(340, 65);
ctx.stroke();

//SOGAS 
/*
==================================================
OBJETO #26 – Soga 1
Desde: (80,240) → (150,80)
==================================================
*/
ctx.beginPath();
ctx.lineWidth = 1;
ctx.moveTo(80, 240);
ctx.lineTo(150, 80);
ctx.stroke();



/*
OBJETO #27 – Soga 2
Desde: (250,40) → (150,90)
*/
ctx.beginPath();
ctx.moveTo(250, 40);
ctx.lineTo(150, 90);
ctx.stroke();



/*
OBJETO #28 – Soga 3
Desde: (248,45) → (340,75)
*/
ctx.beginPath();
ctx.moveTo(248, 45);
ctx.lineTo(340, 75);
ctx.stroke();



/*
OBJETO #29 – Soga 4
Desde: (170,270) → (250,90)
*/
ctx.beginPath();
ctx.moveTo(170, 270);
ctx.lineTo(250, 90);
ctx.stroke();



/*
OBJETO #30 – Soga 5
Desde: (280,280) → (350,90)
*/
ctx.beginPath();
ctx.moveTo(280, 280);
ctx.lineTo(350, 90);
ctx.stroke();



/*
OBJETO #31 – Soga 6
Desde: (365,280) → (400,230)
*/
ctx.beginPath();
ctx.moveTo(365, 280);
ctx.lineTo(400, 230);
ctx.stroke();



/*
OBJETO #32 – Soga 7
Desde: (400,165) → (340,110)
*/
ctx.beginPath();
ctx.moveTo(400, 165);
ctx.lineTo(340, 110);
ctx.stroke();



/*
OBJETO #33 – Soga 8
Desde: (460,230) → (485,253)
*/
ctx.beginPath();
ctx.moveTo(460, 230);
ctx.lineTo(485, 253);
ctx.stroke();



/*
OBJETO #34 – Soga 9
Desde: (485,253) → (338,70)
*/
ctx.beginPath();
ctx.moveTo(485, 253);
ctx.lineTo(338, 70);
ctx.stroke();

// ===============================
// VELA RECTANGULAR CENTRAL
// ===============================

/*
==================================================
OBJETO #35 – Vela Central
Tipo: Forma personalizada (curvas + líneas)
Color: #f4f1e8
Función: Vela principal del barco
==================================================
*/
ctx.beginPath();
ctx.fillStyle = "#f4f1e8";
ctx.strokeStyle = "#000000";
ctx.lineWidth = 1;

ctx.moveTo(200, 170);
ctx.lineTo(280, 170);

ctx.quadraticCurveTo(310, 200, 280, 230);
ctx.lineTo(200, 230);
ctx.quadraticCurveTo(210, 190, 200, 170);

ctx.closePath();
ctx.fill();
ctx.stroke();



/*
==================================================
OBJETO #36 – Cabeza Calavera
Tipo: Círculo
Centro: (240,195)
Radio: 18
==================================================
*/
ctx.beginPath();
ctx.fillStyle = "#ffffff";
ctx.arc(240, 195, 18, 0, Math.PI * 2);
ctx.fill();
ctx.stroke();



/*
==================================================
OBJETO #37 – Ojo Izquierdo
Tipo: Círculo
Centro: (232,192)
Radio: 4
==================================================
*/
ctx.beginPath();
ctx.fillStyle = "#000000";
ctx.arc(232, 192, 4, 0, Math.PI * 2);
ctx.fill();



/*
==================================================
OBJETO #38 – Ojo Derecho
Tipo: Círculo
Centro: (248,192)
Radio: 4
==================================================
*/
ctx.beginPath();
ctx.arc(248, 192, 4, 0, Math.PI * 2);
ctx.fill();



/*
==================================================
OBJETO #39 – Nariz
Tipo: Triángulo
Coordenadas:
(240,198)
(235,205)
(245,205)
==================================================
*/
ctx.beginPath();
ctx.moveTo(240, 198);
ctx.lineTo(235, 205);
ctx.lineTo(245, 205);
ctx.closePath();
ctx.fill();



/*
==================================================
OBJETO #40 – Base de Dientes
Tipo: Rectángulo
Posición: (230,205)
Tamaño: 20x8
==================================================
*/
ctx.beginPath();
ctx.fillStyle = "#ffffff";
ctx.rect(230, 205, 20, 8);
ctx.fill();
ctx.stroke();



/*
==================================================
OBJETO #41 – Separaciones de Dientes
Tipo: Líneas verticales
==================================================
*/
ctx.beginPath();
ctx.moveTo(235, 205);
ctx.lineTo(235, 213);

ctx.moveTo(240, 205);
ctx.lineTo(240, 213);

ctx.moveTo(245, 205);
ctx.lineTo(245, 213);

ctx.stroke();



/*
==================================================
OBJETO #42 – Hueso Cruzado 1
Tipo: Línea
Desde: (220,215) → (260,180)
==================================================
*/
ctx.beginPath();
ctx.lineWidth = 2;
ctx.moveTo(220, 215);
ctx.lineTo(260, 180);
ctx.stroke();



/*
==================================================
OBJETO #43 – Hueso Cruzado 2
Tipo: Línea
Desde: (220,180) → (260,215)
==================================================
*/
ctx.beginPath();
ctx.moveTo(220, 180);
ctx.lineTo(260, 215);
ctx.stroke();

// ===============================
// VELA RECTANGULAR IZQUIERDA
// ===============================

/*
==================================================
OBJETO #44 – Vela Izquierda Inferior
Tipo: Forma personalizada (curvas + líneas)
Color: #f4f1e8
Función: Vela lateral inferior izquierda
==================================================
*/
ctx.beginPath();
ctx.fillStyle = "#f4f1e8";
ctx.strokeStyle = "#000000";
ctx.lineWidth = 1;

ctx.moveTo(115, 150);
ctx.lineTo(180, 150);
ctx.quadraticCurveTo(190, 180, 180, 200);
ctx.lineTo(115, 200);
ctx.quadraticCurveTo(120, 190, 120, 170);

ctx.closePath();
ctx.fill();
ctx.stroke();



// ===============================
// VELA RECTANGULAR IZQUIERDA SUPERIOR
// ===============================

/*
==================================================
OBJETO #45 – Vela Izquierda Superior
Tipo: Forma personalizada
Color: #f4f1e8
Función: Vela lateral superior izquierda
==================================================
*/
ctx.beginPath();
ctx.fillStyle = "#f4f1e8";
ctx.strokeStyle = "#000000";
ctx.lineWidth = 1;

ctx.moveTo(118, 100);
ctx.lineTo(177, 100);
ctx.quadraticCurveTo(190, 125, 180, 138);
ctx.lineTo(118, 138);
ctx.quadraticCurveTo(125, 138, 125, 118);

ctx.closePath();
ctx.fill();
ctx.stroke();



// ===============================
// VELA RECTANGULAR CENTRAL SUPERIOR
// ===============================

/*
==================================================
OBJETO #46 – Vela Central Superior
Tipo: Forma personalizada
Color: #e10600
Función: Vela decorativa superior central
==================================================
*/
ctx.beginPath();
ctx.fillStyle = "#e10600";
ctx.strokeStyle = "#000000";
ctx.lineWidth = 1;

ctx.moveTo(200, 85);
ctx.lineTo(280, 85);
ctx.quadraticCurveTo(300, 120, 280, 140);
ctx.lineTo(200, 140);
ctx.quadraticCurveTo(210, 113, 208, 110);

ctx.closePath();
ctx.fill();
ctx.stroke();



/*
==================================================
OBJETO #47 – Decoración Blanca Izquierda
Tipo: Forma personalizada
Color: Blanco
Función: Detalle decorativo interno
==================================================
*/
ctx.beginPath();
ctx.fillStyle = "#ffffff";

ctx.moveTo(220, 85);
ctx.lineTo(235, 85);
ctx.quadraticCurveTo(245, 120, 235, 140);
ctx.lineTo(220, 140);
ctx.quadraticCurveTo(230, 113, 220, 85);

ctx.closePath();
ctx.fill();



/*
==================================================
OBJETO #48 – Decoración Blanca Derecha
Tipo: Forma personalizada
Color: Blanco
Función: Segundo detalle decorativo interno
==================================================
*/
ctx.beginPath();
ctx.fillStyle = "#ffffff";

ctx.moveTo(250, 85);
ctx.lineTo(265, 85);
ctx.quadraticCurveTo(275, 120, 265, 140);
ctx.lineTo(250, 140);
ctx.quadraticCurveTo(260, 113, 250, 85);

ctx.closePath();
ctx.fill();
// ===============================
// VELA RECTANGULAR central superior al superior
// ===============================

ctx.beginPath();
ctx.fillStyle = "#f4f1e8";  // Color beige claro
ctx.strokeStyle = "#000000";
ctx.lineWidth = 1;

// Punto superior izquierdo
ctx.moveTo(220, 50);

// Línea superior (recta)
ctx.lineTo(270, 50);

// Lado derecho curvado hacia adentro
ctx.quadraticCurveTo(
    280, 58,   // Punto de control (mete la curva hacia adentro)
    270, 70    // Punto inferior derecho
);

// Línea inferior (recta)
ctx.lineTo(205, 70);

// Lado izquierdo curvado hacia adentro
ctx.quadraticCurveTo(
    215, 60,   // Punto de control (curva hacia adentro)
    208, 50    // Regresa al inicio
);

ctx.closePath();
ctx.fill();
ctx.stroke();


// ===============================
// VELA ROJA BASE
// ===============================

ctx.beginPath();
ctx.fillStyle = "#e10600"; 
ctx.strokeStyle = "#000000";
ctx.lineWidth = 1;

ctx.moveTo(295, 180);
ctx.lineTo(380, 180);

// Lado derecho curvo
ctx.quadraticCurveTo(400, 210, 380, 240);

ctx.lineTo(295, 240);

// Lado izquierdo curvo
ctx.quadraticCurveTo(315, 205, 295, 180);

ctx.closePath();
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#ffffff";

// Borde superior
ctx.moveTo(310, 180);

// Curva derecha de la franja
ctx.quadraticCurveTo(330, 210, 310, 240);

// Base inferior
ctx.lineTo(325, 240);

// Curva izquierda de la franja
ctx.quadraticCurveTo(345, 210, 325, 180);

ctx.closePath();
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "#ffffff";

ctx.moveTo(335, 180);
ctx.quadraticCurveTo(355, 210, 335, 240);

ctx.lineTo(350, 240);
ctx.quadraticCurveTo(370, 210, 350, 180);

ctx.closePath();
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "#ffffff";

ctx.moveTo(360, 180);
ctx.quadraticCurveTo(380, 210, 360, 240);

ctx.lineTo(372, 240);
ctx.quadraticCurveTo(392, 210, 372, 180);

ctx.closePath();
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "#e10600"; 
ctx.strokeStyle = "#000000";
ctx.lineWidth = 1;

ctx.moveTo(315, 80);
ctx.lineTo(365, 80);

// Lado derecho curvo
ctx.quadraticCurveTo(380, 97, 365, 115);

ctx.lineTo(315, 115);

// Lado izquierdo curvo
ctx.quadraticCurveTo(320, 110, 320, 95);

ctx.closePath();
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#ffffff";

// Parte superior
ctx.moveTo(325, 80);

// Curva derecha (misma lógica que la vela principal)
ctx.quadraticCurveTo(340, 97, 325, 115);

// Parte inferior
ctx.lineTo(335, 115);

// Curva izquierda
ctx.quadraticCurveTo(350, 97, 335, 80);

ctx.closePath();
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "#ffffff";

// Parte superior
ctx.moveTo(345, 80);

// Curva derecha
ctx.quadraticCurveTo(360, 97, 345, 115);

// Parte inferior
ctx.lineTo(355, 115);

// Curva izquierda
ctx.quadraticCurveTo(370, 97, 355, 80);

ctx.closePath();
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "#ffffff";
ctx.strokeStyle = "#000000";
ctx.lineWidth = 1;

// Parte superior (5px debajo de la vela roja pequeña)
ctx.moveTo(300, 120);
ctx.lineTo(380, 120);

// Curva derecha
ctx.quadraticCurveTo(400, 142, 380, 165);

// Parte inferior
ctx.lineTo(300, 165);

// Curva izquierda
ctx.quadraticCurveTo(320, 142, 300, 120);

ctx.closePath();
ctx.fill();
ctx.stroke();

// Cabeza
ctx.beginPath();
ctx.fillStyle = "#ffffff";
ctx.strokeStyle = "#000000";
ctx.lineWidth = 1;

ctx.arc(340, 140, 15, 0, Math.PI * 2);
ctx.fill();
ctx.stroke();

// Ojo izquierdo
ctx.beginPath();
ctx.fillStyle = "#000000";
ctx.arc(334, 138, 3, 0, Math.PI * 2);
ctx.fill();

// Ojo derecho
ctx.beginPath();
ctx.arc(346, 138, 3, 0, Math.PI * 2);
ctx.fill();

ctx.beginPath();
ctx.moveTo(340, 142);
ctx.lineTo(337, 147);
ctx.lineTo(343, 147);
ctx.closePath();
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "#ffffff";
ctx.rect(334, 148, 12, 5);
ctx.fill();
ctx.stroke();

// Líneas verticales dientes
ctx.beginPath();
ctx.moveTo(338, 148);
ctx.lineTo(338, 153);

ctx.moveTo(342, 148);
ctx.lineTo(342, 153);

ctx.stroke();

// Hueso diagonal 1
ctx.beginPath();
ctx.strokeStyle = "#000000";
ctx.lineWidth = 2;
ctx.moveTo(325, 155);
ctx.lineTo(355, 125);
ctx.stroke();

// Hueso diagonal 2
ctx.beginPath();
ctx.moveTo(325, 125);
ctx.lineTo(355, 155);
ctx.stroke();

// function triangulo vela
    ctx.beginPath();
    ctx.fillStyle = "#f4f1e8";  
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 1;

    ctx.moveTo(400, 165);
    ctx.lineTo(400, 230);
    ctx.lineTo(460, 230);

    ctx.closePath();
    ctx.fill();
    ctx.stroke();

// bandera amarilla
ctx.beginPath();
ctx.fillStyle = "#f28c00";
ctx.strokeStyle = "#000000";
ctx.lineWidth = 2;

// Bandera izquierda del mástil
ctx.rect(20, 213, 60, 30);
ctx.fill();
ctx.stroke();

ctx.strokeStyle = "#ffd400";
ctx.lineWidth = 5;
ctx.lineCap = "round";

// Diagonal 1
ctx.beginPath();
ctx.moveTo(30, 220);
ctx.lineTo(70, 237);
ctx.stroke();

// Diagonal 2
ctx.beginPath();
ctx.moveTo(70, 220);
ctx.lineTo(30, 237);
ctx.stroke();

// Bandera negra
ctx.beginPath();
ctx.fillStyle = "#000000";
ctx.strokeStyle = "#000000";
ctx.lineWidth = 2;

ctx.rect(245, 25, 25, 14);
ctx.fill();
ctx.stroke();

ctx.strokeStyle = "#ffffff";
ctx.lineWidth = 2;
ctx.lineCap = "round";

// Diagonal 1
ctx.beginPath();
ctx.moveTo(249, 28);
ctx.lineTo(266, 36);
ctx.stroke();

// Diagonal 2
ctx.beginPath();
ctx.moveTo(266, 28);
ctx.lineTo(249, 36);
ctx.stroke();

//PAISAJE
// 7777777777777777777777
// ☀️ SOL
ctx.beginPath();
ctx.fillStyle = "#f4d03f"; // amarillo suave
ctx.arc(460, 40, 30, 0, Math.PI * 2);
ctx.fill();

// ☁️ NUBE 1
ctx.beginPath();
ctx.fillStyle = "#bfbfbf";

// Círculos que forman la nube
ctx.arc(120, 30, 20, 0, Math.PI * 2);
ctx.arc(140, 30, 25, 0, Math.PI * 2);
ctx.arc(165, 30, 20, 0, Math.PI * 2);
ctx.arc(145, 33, 25, 0, Math.PI * 2);

ctx.fill();

// ☁️ NUBE 2
ctx.beginPath();
ctx.fillStyle = "#bfbfbf";

ctx.arc(50, 100, 15, 0, Math.PI * 2);
ctx.arc(65, 95, 18, 0, Math.PI * 2);
ctx.arc(80, 100, 15, 0, Math.PI * 2);

ctx.fill();

// ☁️ NUBE 3
ctx.beginPath();
ctx.fillStyle = "#bfbfbf";

ctx.arc(410, 80, 18, 0, Math.PI * 2);
ctx.arc(440, 70, 22, 0, Math.PI * 2);
ctx.arc(465, 80, 18, 0, Math.PI * 2);
ctx.arc(440, 90, 20, 0, Math.PI * 2);

ctx.fill();

// ☁️ NUBE 4
ctx.beginPath();
ctx.fillStyle = "#bfbfbf";

ctx.arc(330, 40, 15, 0, Math.PI * 2);
ctx.arc(340, 35, 18, 0, Math.PI * 2);
ctx.arc(360, 40, 15, 0, Math.PI * 2);

ctx.fill();

//PERSONAS
// PIRATA 1 (20px)

// Cabeza
ctx.beginPath();
ctx.fillStyle = "#000000";
ctx.arc(120, 239, 4, 0, Math.PI * 2);
ctx.fill();

// Cuerpo
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = "#000000";
ctx.moveTo(120, 243);
ctx.lineTo(120, 252);
ctx.stroke();

// Brazos
ctx.beginPath();
ctx.moveTo(112, 246);
ctx.lineTo(128, 246);
ctx.stroke();

// Piernas (terminan en 255)
ctx.beginPath();
ctx.moveTo(120, 252);
ctx.lineTo(114, 255);

ctx.moveTo(120, 252);
ctx.lineTo(126, 255);
ctx.stroke();

// Sombrero
ctx.fillRect(114, 232, 12, 4);

// PIRATA 2

// Cabeza
ctx.beginPath();
ctx.fillStyle = "#f4c2c2";
ctx.arc(140, 239, 4, 0, Math.PI * 2);
ctx.fill();

// Pañuelo
ctx.fillStyle = "#e10600";
ctx.fillRect(136, 232, 8, 4);

// Cuerpo
ctx.beginPath();
ctx.strokeStyle = "#000000";
ctx.lineWidth = 2;
ctx.moveTo(140, 243);
ctx.lineTo(140, 252);
ctx.stroke();

// Brazos
ctx.beginPath();
ctx.moveTo(132, 246);
ctx.lineTo(148, 246);
ctx.stroke();

// Piernas
ctx.beginPath();
ctx.moveTo(140, 252);
ctx.lineTo(134, 255);

ctx.moveTo(140, 252);
ctx.lineTo(146, 255);
ctx.stroke();

// PIRATA 3

// Cabeza
ctx.beginPath();
ctx.fillStyle = "#f4c2c2";
ctx.arc(190, 264, 4, 0, Math.PI * 2);
ctx.fill();

// Cuerpo azul
ctx.beginPath();
ctx.strokeStyle = "#1f4e79";
ctx.lineWidth = 3;
ctx.moveTo(190, 268);
ctx.lineTo(190, 277);
ctx.stroke();

// Brazos
ctx.beginPath();
ctx.strokeStyle = "#000000";
ctx.lineWidth = 2;
ctx.moveTo(182, 271);
ctx.lineTo(198, 271);
ctx.stroke();

// Piernas
ctx.beginPath();
ctx.moveTo(190, 277);
ctx.lineTo(184, 280);

ctx.moveTo(190, 277);
ctx.lineTo(196, 280);
ctx.stroke();

// PIRATA 4

// Cabeza
ctx.beginPath();
ctx.fillStyle = "#000000";
ctx.arc(260, 264, 4, 0, Math.PI * 2);
ctx.fill();

// Cuerpo
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = "#000000";
ctx.moveTo(260, 268);
ctx.lineTo(260, 277);
ctx.stroke();

// Brazos
ctx.beginPath();
ctx.moveTo(252, 271);
ctx.lineTo(268, 271);
ctx.stroke();

// Piernas (terminan en 280)
ctx.beginPath();
ctx.moveTo(260, 277);
ctx.lineTo(254, 280);

ctx.moveTo(260, 277);
ctx.lineTo(266, 280);
ctx.stroke();

// Sombrero
ctx.fillRect(254, 257, 12, 4);

// PIRATA 5

// Cabeza
ctx.beginPath();
ctx.fillStyle = "#f4c2c2";
ctx.arc(320, 264, 4, 0, Math.PI * 2);
ctx.fill();

// Pañuelo
ctx.fillStyle = "#e10600";
ctx.fillRect(316, 257, 8, 4);

// Cuerpo
ctx.beginPath();
ctx.strokeStyle = "#000000";
ctx.lineWidth = 2;
ctx.moveTo(320, 268);
ctx.lineTo(320, 277);
ctx.stroke();

// Brazos
ctx.beginPath();
ctx.moveTo(312, 271);
ctx.lineTo(328, 271);
ctx.stroke();

// Piernas
ctx.beginPath();
ctx.moveTo(320, 277);
ctx.lineTo(314, 280);

ctx.moveTo(320, 277);
ctx.lineTo(326, 280);
ctx.stroke();

// PIRATA 6

// Cabeza
ctx.beginPath();
ctx.fillStyle = "#f4c2c2";
ctx.arc(420, 254, 4, 0, Math.PI * 2);
ctx.fill();

// Pañuelo
ctx.fillStyle = "#e10600";
ctx.fillRect(416, 247, 8, 4);

// Cuerpo
ctx.beginPath();
ctx.strokeStyle = "#000000";
ctx.lineWidth = 2;
ctx.moveTo(420, 258);
ctx.lineTo(420, 267);
ctx.stroke();

// Brazos
ctx.beginPath();
ctx.moveTo(412, 261);
ctx.lineTo(428, 261);
ctx.stroke();

// Piernas
ctx.beginPath();
ctx.moveTo(420, 267);
ctx.lineTo(414, 270);

ctx.moveTo(420, 267);
ctx.lineTo(426, 270);
ctx.stroke();

// PIRATA 7

// Cabeza
ctx.beginPath();
ctx.fillStyle = "#f4c2c2";
ctx.arc(260, 154, 4, 0, Math.PI * 2);
ctx.fill();

// Cuerpo azul
ctx.beginPath();
ctx.strokeStyle = "#1f4e79";
ctx.lineWidth = 3;
ctx.moveTo(260, 158);
ctx.lineTo(260, 167);
ctx.stroke();

// Brazos
ctx.beginPath();
ctx.strokeStyle = "#000000";
ctx.lineWidth = 2;
ctx.moveTo(252, 161);
ctx.lineTo(268, 161);
ctx.stroke();

// Piernas
ctx.beginPath();
ctx.moveTo(260, 167);
ctx.lineTo(254, 170);

ctx.moveTo(260, 167);
ctx.lineTo(266, 170);
ctx.stroke();

// PIRATA 8

// Cabeza
ctx.beginPath();
ctx.fillStyle = "#f4c2c2";
ctx.arc(330, 64, 4, 0, Math.PI * 2);
ctx.fill();

// Cuerpo azul
ctx.beginPath();
ctx.strokeStyle = "#1f4e79";
ctx.lineWidth = 3;
ctx.moveTo(330, 68);
ctx.lineTo(330, 77);
ctx.stroke();

// Brazos
ctx.beginPath();
ctx.strokeStyle = "#000000";
ctx.lineWidth = 2;
ctx.moveTo(322, 71);
ctx.lineTo(338, 71);
ctx.stroke();

// Piernas
ctx.beginPath();
ctx.moveTo(330, 77);
ctx.lineTo(324, 80);

ctx.moveTo(330, 77);
ctx.lineTo(336, 80);
ctx.stroke();

}