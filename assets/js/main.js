/**
 * -----------------------------------------------------------
 * Aplicación: Examen Tema 1 - API Canvas 2D
 * Autor: Jesus Roberto Hernandez
 * Fecha: 2026
 * Descripción:
 * Dibujo de un colibrí utilizando al menos 30 figuras básicas
 * mediante la API Canvas 2D.
 * -----------------------------------------------------------
 */

window.onload = function () {
    const canvas = document.getElementById("miCanvas");
    const ctx = canvas.getContext("2d");

    dibujarFondo(ctx);
    dibujarFlor(ctx);
    dibujarColibri(ctx);
};

/* ============================= */
/* FUNCIONES DE DIBUJO           */
/* ============================= */

function dibujarFondo(ctx) {
    // Fondo base
    ctx.fillStyle = "#dff3f5";
    ctx.fillRect(0, 0, 500, 500);
}

function dibujarFlor(ctx) {
    // Aquí empezaremos a hacer pétalos con círculos
}

function dibujarColibri(ctx) {
    // Aquí organizaremos:
    // - cuerpo
    // - alas
    // - cabeza
    // - pico
    // - cola
}
function redibujar() {
    const canvas = document.getElementById("miCanvas");
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    dibujarFondo(ctx);
    dibujarFlor(ctx);
    dibujarColibri(ctx);
}