// Definindo um array de objetos com as receitas
let receitas = [
    {
        nome: "Bolo de cenoura",
        ingredientes: ["cenoura", "açúcar", "óleo", "farinha de trigo", "fermento em pó", "ovos"],
        preparo: "1. Bata no liquidificador a cenoura, o açúcar, o óleo e os ovos. 2. Adicione a farinha de trigo e o fermento e misture com uma colher. 3. Despeje a massa em uma forma untada e enfarinhada e leve ao forno pré-aquecido a 180 graus por cerca de 30 minutos."
    },
    {
        nome: "Arroz com feijão",
        ingredientes: ["arroz", "feijão", "água", "sal"],
        preparo: "1. Lave o arroz e o feijão e coloque-os em uma panela. 2. Adicione água até cobrir os ingredientes. 3. Tempere com sal a gosto. 4. Leve ao fogo médio até que a água comece a ferver. 5. Abaixe o fogo e deixe cozinhar por cerca de 20 a 30 minutos, ou até que os grãos estejam macios."
    }
];

// Selecionando elementos HTML
let listaReceitas = document.querySelector("#lista-receitas");
let formNovaReceita = document.querySelector("#form-nova-receita");

// Função para exibir as receitas na página
function exibirReceitas() {
    // Limpa a lista de receitas
    listaReceitas.innerHTML = "";

    // Loop através das receitas e adiciona cada uma à lista
    for (let i = 0; i < receitas.length; i++) {
        let receita = receitas[i];
        let itemReceita = document.createElement("li");
        itemReceita.innerHTML = `
            <h3>${receita.nome}</h3>
            <ul>
                ${receita.ingredientes.map(ingrediente => `<li>${ingrediente}</li>`).join("")}
            </ul>
            <p>${receita.preparo}</p>
        `;
        listaReceitas.appendChild(itemReceita);
    }
}

// Função para adicionar uma nova receita
function adicionarReceita() {
    // Seleciona os campos do formulário
    let nome = document.querySelector("#nome-receita").value;
    let ingredientes = document.querySelector("#ingredientes-receita").value.split(",");
    let preparo = document.querySelector("#preparo-receita").value;

    // Cria um novo objeto com os dados da receita
    let novaReceita = {
        nome: nome,
        ingredientes: ingredientes,
        preparo: preparo
    };

    // Adiciona a nova receita ao array de receitas
    receitas.push(novaReceita);

    // Exibe as receitas atualizadas na página
    exibirReceitas();

    // Limpa os campos do formulário
    formNovaReceita.reset();
}

// Adiciona um listener para o evento "submit" do formulário de nova receita
formNovaReceita.addEventListener ("submit"), function(event){}
    event.preventDefault();
    adicionarReceita();

