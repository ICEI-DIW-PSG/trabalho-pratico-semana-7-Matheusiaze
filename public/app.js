
const obras = [
    {
        id: "viagem-das-rochas",
        titulo: "Viagem das rochas",
        imagem: "imagens/viagemdasrochas.jpg",
        descricao: "Descrição detalhada da Viagem das rochas."
    },
    {
        id: "ultima-ceia",
        titulo: "Última Ceia",
        imagem: "imagens/santa.jpg",
        descricao: "Descrição detalhada da Última Ceia."
    },
    {
        id: "homem-vitruviano",
        titulo: "Homem Vitruviano",
        imagem: "imagens/homem vitruviano.webp",
        descricao: "Descrição detalhada do Homem Vitruviano."
    },
    {
        id: "anunciacao",
        titulo: "A Anunciação",
        imagem: "imagens/anunciacao.jpg",
        descricao: "Descrição detalhada da Anunciação."
    },
    {
        id: "monalisa",
        titulo: "Monalisa",
        imagem: "imagens/mona.jpg",
        descricao: "Descrição detalhada da Monalisa."
    },
    {
        id: "dama-com-arminho",
        titulo: "Dama com Arminho",
        imagem: "imagens/Dama com Arminho.jpg",
        descricao: "Descrição detalhada da Dama com Arminho."
    },
    {
        id: "giz-vermelho",
        titulo: "Retrato de um homem em giz vermelho",
        imagem: "imagens/Retrato de um homem em giz vermelho.jpg",
        descricao: "Descrição detalhada do Retrato de um homem em giz vermelho."
    },
    {
        id: "virgem-e-menino",
        titulo: "A Virgem e o Menino com Santa Ana",
        imagem: "imagens/A Virgem e o Menino com Santa Ana.jpg",
        descricao: "Descrição detalhada da Virgem e o Menino com Santa Ana."
    }
];

function exibirObras() {
    const container = document.querySelector(".row");

    obras.forEach((obra) => {
        const col = document.createElement("div");
        col.classList.add("col");

        col.innerHTML = `
            <div class="imgs">
                <a href="detalhes.html?id=${encodeURIComponent(obra.id)}" class="btn p-0">
                    <img src="${obra.imagem}" alt="${obra.titulo}" class="img-fluid rounded">
                    <h3>${obra.titulo}</h3>
                </a>
            </div>
        `;

        container.appendChild(col);
    });
}

function exibirDetalhes() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    const containerDetalhes = document.getElementById('detalhes');
    if (!containerDetalhes) return;

    if (!id) {
        containerDetalhes.innerHTML = "<p>ID do item não fornecido.</p>";
        return;
    }

    const obra = obras.find(o => o.id === id);

    if (!obra) {
        containerDetalhes.innerHTML = "<p>Obra não encontrada.</p>";
        return;
    }

    containerDetalhes.innerHTML = `
        <h2>${obra.titulo}</h2>
        <img src="${obra.imagem}" alt="${obra.titulo}" class="img-fluid rounded mb-3" style="max-width:400px;">
        <p>${obra.descricao}</p>
        <a href="index.html" class="btn btn-primary mt-3">Voltar para Home</a>
    `;
}

document.addEventListener("DOMContentLoaded", () => {
    if (window.location.pathname.endsWith("index.html") || window.location.pathname === "/" || window.location.pathname.endsWith("/")) {
        exibirObras();
    } else if (window.location.pathname.endsWith("detalhes.html")) {
        exibirDetalhes();
    }
});
