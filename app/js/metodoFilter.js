const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click',filtrarLivros))

function filtrarLivros () {
        const elementBTN = document.getElementById(this.id)
        const categoria = elementBTN.value
        let livrosFiltrados = categoria == 'disponivel' ? livros.filter(livro => livro.quantidade > 0) : livros.filter(livro => livro.categoria == categoria )

       exibirLivros(livrosFiltrados)
       if(categoria == 'disponivel'){
        exibirValorTotalDosLivros()
       }
    }
   
function  exibirValorTotalDosLivros(){
        elementoComValorTotalDisponiveis.innerHTML = `
        <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">299,00</span></p>
      </div>`
}


