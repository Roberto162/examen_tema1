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

}
