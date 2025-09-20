// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array de amigos
let amigos = [];

// --- Utilidades ---
function limpiarResultado() {
  const ul = document.getElementById("resultado");
  if (ul) ul.innerHTML = "";
}

// --- Lógica principal ---
function agregarAmigo() {
  const input = document.getElementById("amigo"); // <-- coincide con index.html
  const nombre = (input?.value || "").trim();

  if (nombre === "") {
    alert("⚠️ Por favor escribe un nombre válido");
    return;
  }

  // Evitar duplicados (case-insensitive)
  const existe = amigos.some(a => a.toLowerCase() === nombre.toLowerCase());
  if (existe) {
    alert("⚠️ Ese nombre ya está en la lista");
    return;
  }

  amigos.push(nombre);
  input.value = "";
  mostrarLista();
  limpiarResultado(); // si ya se había sorteado, borramos el mensaje
}

function mostrarLista() {
  const lista = document.getElementById("listaAmigos");
  if (!lista) return;

  lista.innerHTML = "";
  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("⚠️ Agrega al menos un nombre antes de sortear");
    return;
  }

  // (Opcional) exigir mínimo 2 para que tenga sentido el sorteo
  if (amigos.length < 2) {
    alert("⚠️ Agrega al menos dos nombres para sortear");
    return;
  }

  const indice = Math.floor(Math.random() * amigos.length);
  const ganador = amigos[indice];

  const ulResultado = document.getElementById("resultado"); // es un <ul> en tu HTML
  if (!ulResultado) return;

  ulResultado.innerHTML = ""; // limpiamos
  const li = document.createElement("li");
  li.textContent = `🎉 El amigo secreto es: ${ganador} 🎉`;
  ulResultado.appendChild(li);
}

// Permitir Enter para agregar
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("amigo");
  if (input) {
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") agregarAmigo();
    });
  }
});

