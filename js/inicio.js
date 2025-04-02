// função para alternar a cor da seção de créditos
const botaoCreditos = () => {
    // seleciona o elemento com a classe ".fundo-preto"
    const fundo = document.querySelector(".fundo-preto");
    
    // seleciona o elemento com a classe ".creditos")
    const creditos = document.querySelector(".creditos");
    
    // checa se o fundo não contém a classe "ativado"
    if(!fundo.classList.contains("ativado")) {
        // se não tiver, adiciona a classe "ativado" ao fundo
        fundo.classList.add("ativado");
        
        // adiciona a classe "creditos-ativado" à seção de créditos
        creditos.classList.add("creditos-ativado");
    } else {
        // caso a classe "ativado" já esteja no fundo, remove ela
        fundo.classList.remove("ativado");
        
        // função para remover a classe "creditos-ativado" da seção de créditos
        creditos.classList.remove("creditos-ativado");
    }
}
