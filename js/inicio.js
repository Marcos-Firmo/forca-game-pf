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
//função para que se o tutorial estiver invisível, mostra ele com fundo escuro e se já estiver visível, esconde tudo.
const botaoTutorial = () => {
    const fundo = document.querySelector(".fundo-preto")
    const tutorial = document.querySelector(".tutorial")
    if(!fundo.classList.contains("ativado")){
        fundo.classList.add("ativado")
        tutorial.classList.add("tutorial-ativado")
    } else {
        fundo.classList.remove("ativado")
        tutorial.classList.remove("tutorial-ativado")
    }
}
