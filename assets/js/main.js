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

}
