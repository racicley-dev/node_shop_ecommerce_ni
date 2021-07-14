const connection = require("./mongo").connection

const nomeCollection = 'produtos'

function salvar(novoProduto) {
    //produtos shop
    const conexao =  connection();
    return conexao.collection(nomeCollection).insertOne(novoProduto)
        .then(result => {
            console.log(`O produto ${novoProduto} foi adicionado com sucesso! Resultado: ${result}`)
        })
        .catch(erro => {
            console.log(`Erro ${erro} ao salvar o produto ${novoProduto} na nuvem.`);
            throw erro;
        });
}

function recuperar(produto) {
    const conexao = connection()
    console.log(`Buscando produto: ${produto}`)
    return conexao.collection(nomeCollection).find({_nome:produto}).next()
    .then(resultado => {
        console.log(`Produto ${resultado} encontrrado!`)
        return resultado;
    })
    .catch(error => {
        console.log(`Ocorreu um erro ao recuperar ${produto} : ${error}`);
        throw error;
    })
}

function recuperarTodos(){
    const conexao = connection()
    return conexao.collection(nomeCollection).find().toArray()
    .then(resultados => {
        return resultados
    })
    .catch(error => {
        console.log(`Erro ao recuperar os produtos do banco: ${error}`);
        throw error;
    });
}

module.exports.salvarProduto = salvar
module.exports.recuperarProduto = recuperar
module.exports.recuperarTodosProdutos = recuperarTodos