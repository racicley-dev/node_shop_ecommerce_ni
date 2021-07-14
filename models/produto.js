const conexaoBD = require('../persistencia/mongo').getConexao

class Produto{
    constructor(nome, preco, descricao, imagem){
        this._nome = nome
        this._preco = preco
        this._descricao = descricao
        this._imagemUrl = imagem
    }

    get nome(){
        return this._nome
    }

    get preco(){
        return this._preco
    }

    get descricao(){
        return this._descricao
    }

    get imagem() {
        return this._imagemUrl
    }

    set nome(novoNome){
        this._nome = novoNome
    }

    set preco(novoPreco){
        this._preco = novoPreco
    }
}

module.exports = Produto