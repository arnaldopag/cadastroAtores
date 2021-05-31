function ator(nome,nacionalidade,url){
    this.nome = nome;
    this.nacionalidade = nacionalidade;
    this.url = url;
}

var atores = [{
    'nome': null,
    'nacionalidade': null,
    'url': null,
    }
]
const botao = document.querySelector('button')
botao.addEventListener('click', mostrar)


function mostrar(){
let name = document.querySelector('#nome')
console.log(name.value)
}