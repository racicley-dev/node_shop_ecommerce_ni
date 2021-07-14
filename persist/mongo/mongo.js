const mongodb = require('mongodb')

const client = mongodb.MongoClient;

let _conexao;

//cria a conexao com o banco de dados em nuvem e armazena na 
const mongoConnect = client.connect('mongodb+srv://thiago:061195@cluster0.tzdzo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' )
.then(result => {
    _conexao = result.db()
    console.log("Conectado ao Cluster com sucesso.")
})
.catch(erro => {
    console.log(`Erro ao conectar ao MongoDB: ${erro}`)
    throw erro
});

const getConexao = () => {
    if(_conexao) {
        return _conexao;
    } else {
        throw 'Conexao com o banco nao inicializada.'
    }
}

module.exports.connect = mongoConnect;
module.exports.connection = getConexao