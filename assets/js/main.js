window.onload = function () {

    const canvas = document.getElementById("miCanvas");
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, 200, 500);

    dibujarBarco(ctx);
};

function dibujarBarco(ctx) {
    // Definimos el centro y radios del óvalo
    const centroX = 250;
    const centroY = 280;
    const radioX = 140; // Ancho del casco
    const radioY = 110; // Profundidad del casco

    ctx.beginPath();
    ctx.fillStyle = "#e10600";
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 1;

    /* Argumentos de ellipse:
       (x, y, radioX, radioY, rotacion, anguloInicio, anguloFin)
    */
    ctx.ellipse(
        centroX, 
        centroY, 
        radioX, 
        radioY, 
        0,           // Sin rotación
        0,           // Empieza en el extremo derecho (0 radianes)
        Math.PI,     // Termina en el extremo izquierdo (180 grados)
        false        // Sentido de las agujas del reloj
    );

    // Cerramos la parte superior con una línea recta
    ctx.closePath(); 
    
    ctx.fill();
    ctx.stroke();


// funcion triangulo
ctx.beginPath();
    ctx.fillStyle = "#a82828"; 
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 1;

    ctx.moveTo(110, 280);   // Punta superior
    ctx.lineTo(150, 255);   // Base izquierda
    ctx.lineTo(185, 280);   // Base derecha

    ctx.closePath();
    ctx.fill();
    ctx.stroke();

   // function triangulo2
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


    // function triangulo3
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

 // =====================
// ANCLA
// =====================
    // function ancla
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


    /* Círculo superior */
    ctx.fillStyle = "#8b8b8b";
   ctx.strokeStyle = "#000000";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(338, 307, 3, 0, Math.PI * 2);
    ctx.stroke();
     ctx.closePath();
    ctx.fill();

/* Línea vertical */
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
 // function triangulo3
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

    ctx.fillStyle = "#443d3d";
   ctx.strokeStyle = "#302d2d";
    ctx.lineWidth = 4;
ctx.beginPath();
ctx.moveTo(390, 280);
ctx.lineTo(485, 252);
ctx.stroke();
 ctx.closePath();
    ctx.fill();


    // ===== MAR FILA TRASERA =====

// Ola 1
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

// Ola 2
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

// Ola 3
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

// Ola 4
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

// Ola 5
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

// ===== MAR FILA FRONTAL =====

// Ola 1
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

// Ola 2
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

// Ola 3
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

// Ola 4
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

// Ola 5
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

//Mastiles
ctx.fillStyle = "#3d3a3a";
   ctx.strokeStyle = "#3b3939";
    ctx.lineWidth = 4;
ctx.beginPath();
ctx.moveTo(80, 255);
ctx.lineTo(80, 210);
ctx.stroke();
 ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "#3d3a3a";
   ctx.strokeStyle = "#3b3939";
    ctx.lineWidth = 6;
ctx.beginPath();
ctx.moveTo(150, 255);
ctx.lineTo(150, 75);
ctx.stroke();
 ctx.closePath();
    ctx.fill();
     
    ctx.fillStyle = "#3d3a3a";
   ctx.strokeStyle = "#3b3939";
    ctx.lineWidth = 6;
ctx.beginPath();
ctx.moveTo(245, 280);
ctx.lineTo(245, 25);
ctx.stroke();
 ctx.closePath();
    ctx.fill();


     ctx.fillStyle = "#3d3a3a";
   ctx.strokeStyle = "#3b3939";
    ctx.lineWidth = 6;
ctx.beginPath();
ctx.moveTo(340, 280);
ctx.lineTo(340, 65);
ctx.stroke();
 ctx.closePath();
    ctx.fill();

//SOGAS
ctx.fillStyle = "#3d3a3a";
   ctx.strokeStyle = "#3b3939";
    ctx.lineWidth = 1;
ctx.beginPath();
ctx.moveTo(80, 240);
ctx.lineTo(150, 80);
ctx.stroke();
 ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "#3d3a3a";
   ctx.strokeStyle = "#3b3939";
    ctx.lineWidth = 1;
ctx.beginPath();
ctx.moveTo(250, 40);
ctx.lineTo(150, 90);
ctx.stroke();
 ctx.closePath();
    ctx.fill();
ctx.fillStyle = "#3d3a3a";
   ctx.strokeStyle = "#3b3939";
    ctx.lineWidth = 1;
ctx.beginPath();
ctx.moveTo(248, 45);
ctx.lineTo(340, 75);
ctx.stroke();
 ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "#3d3a3a";
   ctx.strokeStyle = "#3b3939";
    ctx.lineWidth = 1;
ctx.beginPath();
ctx.moveTo(170, 270);
ctx.lineTo(250, 90);
ctx.stroke();
 ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "#3d3a3a";
   ctx.strokeStyle = "#3b3939";
    ctx.lineWidth = 1;
ctx.beginPath();
ctx.moveTo(280, 280);
ctx.lineTo(350, 90);
ctx.stroke();
 ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "#3d3a3a";
   ctx.strokeStyle = "#3b3939";
    ctx.lineWidth = 1;
ctx.beginPath();
ctx.moveTo(365, 280);
ctx.lineTo(400, 230);
ctx.stroke();
 ctx.closePath();
    ctx.fill();

ctx.fillStyle = "#3d3a3a";
   ctx.strokeStyle = "#3b3939";
    ctx.lineWidth = 1;
ctx.beginPath();
ctx.moveTo(400, 165);
ctx.lineTo(340, 110);
ctx.stroke();
 ctx.closePath();
    ctx.fill();

ctx.fillStyle = "#3d3a3a";
   ctx.strokeStyle = "#3b3939";
    ctx.lineWidth = 1;
ctx.beginPath();
ctx.moveTo(460, 230);
ctx.lineTo(485, 253);
ctx.stroke();
 ctx.closePath();
    ctx.fill();

ctx.fillStyle = "#3d3a3a";
   ctx.strokeStyle = "#3b3939";
    ctx.lineWidth = 1;
ctx.beginPath();
ctx.moveTo(485, 253);
ctx.lineTo(338, 70);
ctx.stroke();
 ctx.closePath();
    ctx.fill();

// ===============================
// VELA RECTANGULAR central
// ===============================

ctx.beginPath();
ctx.fillStyle = "#f4f1e8";  // Color beige claro
ctx.strokeStyle = "#000000";
ctx.lineWidth = 1;

// Punto superior izquierdo
ctx.moveTo(200, 170);

// Línea superior (recta)
ctx.lineTo(280, 170);

// Lado derecho curvado hacia adentro
ctx.quadraticCurveTo(
    310, 200,   // Punto de control (mete la curva hacia adentro)
    280, 230    // Punto inferior derecho
);

// Línea inferior (recta)
ctx.lineTo(200, 230);

// Lado izquierdo curvado hacia adentro
ctx.quadraticCurveTo(
    210, 190,   // Punto de control (curva hacia adentro)
    200, 170    // Regresa al inicio
);

ctx.closePath();
ctx.fill();
ctx.stroke();

// Cabeza
ctx.beginPath();
ctx.fillStyle = "#ffffff";
ctx.strokeStyle = "#000000";
ctx.lineWidth = 1;

ctx.arc(240, 195, 18, 0, Math.PI * 2);
ctx.fill();
ctx.stroke();

// Ojo izquierdo
ctx.beginPath();
ctx.fillStyle = "#000000";
ctx.arc(232, 192, 4, 0, Math.PI * 2);
ctx.fill();

// Ojo derecho
ctx.beginPath();
ctx.arc(248, 192, 4, 0, Math.PI * 2);
ctx.fill();

ctx.beginPath();
ctx.moveTo(240, 198);
ctx.lineTo(235, 205);
ctx.lineTo(245, 205);
ctx.closePath();
ctx.fill();

// Base dientes
ctx.beginPath();
ctx.fillStyle = "#ffffff";
ctx.rect(230, 205, 20, 8);
ctx.fill();
ctx.stroke();

// Separaciones dientes
ctx.beginPath();
ctx.moveTo(235, 205);
ctx.lineTo(235, 213);

ctx.moveTo(240, 205);
ctx.lineTo(240, 213);

ctx.moveTo(245, 205);
ctx.lineTo(245, 213);

ctx.stroke();

ctx.strokeStyle = "#000000";
ctx.lineWidth = 2;

// Hueso 1
ctx.beginPath();
ctx.moveTo(220, 215);
ctx.lineTo(260, 180);
ctx.stroke();

// Hueso 2
ctx.beginPath();
ctx.moveTo(220, 180);
ctx.lineTo(260, 215);
ctx.stroke();
// ===============================
// VELA RECTANGULAR izquierda
// ===============================

ctx.beginPath();
ctx.fillStyle = "#f4f1e8";  // Color beige claro
ctx.strokeStyle = "#000000";
ctx.lineWidth = 1;

// Punto superior izquierdo
ctx.moveTo(115, 150);

// Línea superior (recta)
ctx.lineTo(180, 150);

// Lado derecho curvado hacia adentro
ctx.quadraticCurveTo(
    190, 180,   // Punto de control (mete la curva hacia adentro)
    180, 200    // Punto inferior derecho
);

// Línea inferior (recta)
ctx.lineTo(115, 200);

// Lado izquierdo curvado hacia adentro
ctx.quadraticCurveTo(
    120, 190,   // Punto de control (curva hacia adentro)
    120, 170    // Regresa al inicio
);

ctx.closePath();
ctx.fill();
ctx.stroke();

// ===============================
// VELA RECTANGULAR izquierda superior
// ===============================

ctx.beginPath();
ctx.fillStyle = "#f4f1e8";  // Color beige claro
ctx.strokeStyle = "#000000";
ctx.lineWidth = 1;

// Punto superior izquierdo
ctx.moveTo(118, 100);

// Línea superior (recta)
ctx.lineTo(177, 100);

// Lado derecho curvado hacia adentro
ctx.quadraticCurveTo(
    190, 125,   // Punto de control (mete la curva hacia adentro)
    180, 138    // Punto inferior derecho
);

// Línea inferior (recta)
ctx.lineTo(118, 138);

// Lado izquierdo curvado hacia adentro
ctx.quadraticCurveTo(
    125, 138,   // Punto de control (curva hacia adentro)
    125, 118    // Regresa al inicio
);

ctx.closePath();
ctx.fill();
ctx.stroke();

// ===============================
// VELA RECTANGULAR central superior
// ===============================

ctx.beginPath();
ctx.fillStyle = "#e10600"
ctx.strokeStyle = "#000000";
ctx.lineWidth = 1;

// Punto superior izquierdo
ctx.moveTo(200, 85);

// Línea superior (recta)
ctx.lineTo(280, 85);

// Lado derecho curvado hacia adentro
ctx.quadraticCurveTo(
    300, 120,   // Punto de control (mete la curva hacia adentro)
    280, 140    // Punto inferior derecho
);

// Línea inferior (recta)
ctx.lineTo(200, 140);

// Lado izquierdo curvado hacia adentro
ctx.quadraticCurveTo(
    210, 113,   // Punto de control (curva hacia adentro)
    208, 110    // Regresa al inicio
);

ctx.closePath();
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "#ffffff";

// Parte superior
ctx.moveTo(220, 85);
ctx.lineTo(235, 85);

// Curva derecha interna
ctx.quadraticCurveTo(245, 120, 235, 140);

// Parte inferior
ctx.lineTo(220, 140);

// Curva izquierda interna
ctx.quadraticCurveTo(230, 113, 220, 85);

ctx.closePath();
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "#ffffff";

// Parte superior
ctx.moveTo(250, 85);
ctx.lineTo(265, 85);

// Curva derecha interna
ctx.quadraticCurveTo(275, 120, 265, 140);

// Parte inferior
ctx.lineTo(250, 140);

// Curva izquierda interna
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



}