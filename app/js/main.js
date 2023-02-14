let livros = [];
const  LivrosAPI = (`https://guilhermeonrails.github.io/casadocodigo/livros.json`);


async function getbuscarLivros (){
    const res = await fetch(LivrosAPI)
    livros = await res.json()
    let livrosDesconto = aplicarDesconto(livros)
    exibirLivros(livrosDesconto)
}

getbuscarLivros()