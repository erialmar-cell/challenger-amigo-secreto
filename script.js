let amigos = [];

function agregarAmigo() {
    const inputNombre = document.querySelector('.input-name');
    const nombre = inputNombre.value.trim();

    if (nombre === '') {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }

    amigos.push(nombre);
    mostrarAmigos();
    inputNombre.value = '';
}

function sortearAmigoSecreto() {
    if (amigos.length < 2) {
        alert("Necesitas al menos 2 amigos para sortear.");
        return;
    }

    
    const amigoSecretoIndex = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[amigoSecretoIndex];

    const resultadoDiv = document.querySelector('#resultado');
    resultadoDiv.innerHTML = ''; 

    
    const p = document.createElement('p');
    p.textContent = `¡El AMIGO SECRETO es: ${amigoSecreto.toUpperCase()}!`;
    p.classList.add('result-list'); 
    resultadoDiv.appendChild(p);

    
    amigos = [];
    mostrarAmigos();
}

function mostrarAmigos() {
    const listaAmigosUl = document.querySelector('#listaAmigos');
    listaAmigosUl.innerHTML = '';
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigosUl.appendChild(li);
    });
}
