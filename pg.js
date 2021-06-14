class Coment {
    constructor(nome, mensagem) {
        this.nome = nome;
        this.mensagem = mensagem;

    }
}

class UI {
    addComent(coment) {
        const comentList = document.getElementById('coment-list');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="div-coment">
                <div class="text-coment">
                     ${coment.nome} : ${coment.mensagem}<br>
                    <a href="#" name="delete">Excluir</a>
                </div>
            </div>
            
        `;
        comentList.appendChild(element);
    }

    resetForm() {
        document.getElementById('coment-form').reset();
    }

    deleteComent(element) {
        if (element.name === 'delete') {
            element.parentElement.parentElement.remove();
        }
    }


}

document.getElementById('coment-form').addEventListener('submit', function(e) {

    const nome = document.getElementById('nome').value,
        mensagem = document.getElementById('mensagem').value;

    // cria novo obj
    const coment = new Coment(nome, mensagem);

    // cria nova ui
    const ui = new UI();

    // validacao
    if (nome === '' || mensagem === '') {

        alert("Digite informações válidas!");
        return false;

    }

    // salva/adiciona o comentario
    ui.addComent(coment);
    ui.resetForm();

    e.preventDefault();
});

document.getElementById('coment-list')
    .addEventListener('click', function(e) {
        const ui = new UI();
        ui.deleteComent(e.target);
        e.preventDefault();
    });




// Dropdown navbar
// alterna entre ocultar e mostrar o conteúdo 
function myFunction() {
    document.getElementById("mydrop").classList.toggle("show");
}

// Feche a lista suspensa se o usuário clicar fora dela
window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
        var mydrop = document.getElementById("mydrop");
        if (mydrop.classList.contains('show')) {
            mydrop.classList.remove('show');
        }
    }
}



// pop-up
function abrir(id) {
    document.getElementById(id).style.display = "block";
}

function fechar(id) {
    document.getElementById(id).style.display = "none";
}
