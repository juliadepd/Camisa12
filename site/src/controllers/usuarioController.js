var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    usuarioModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function login(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    var senha = req.body.senhaServer;

    if (idUsuario == undefined) {
        res.status(400).send("Seu nome de usuário está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        
        usuarioModel.login(idUsuario, senha)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Nome de usuário e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var idUsuario = req.body.idUsuarioServer
    var nome = req.body.nomeServer;
    var tel = req.body.telServer;
    var senha = req.body.senhaServer;
    var time =  req.body.timeServer; 

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (tel == undefined) {
        res.status(400).send("Seu telefone está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (idUsuario == undefined) {
        res.status(400).send("Seu nome de usuário está undefined!");
    } else if (time == undefined) {
        res.status(400).send("Seu time está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(idUsuario, nome, tel, senha, time)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function trocar(req, res) {
    var fkTime = req.body.timeServer;
    var idUsuario = req.body.idServer;

    // Faça as validações dos valores
    if (fkTime == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (idUsuario == undefined) {
        res.status(400).send("Seu telefone está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.trocar(fkTime, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function partida(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var campeonato = req.body.campeonatoServer;
    var mandoCampo = req.body.mandoCampoServer;
    var resultadoPartida = req.body.resultadoPartidaServer;
    var golsPro = req.body.golsProServer;
    var golsContra =  req.body.golsContraServer;  
    var escanteios =  req.body.escanteiosServer; 
    var cartoesAmarelos =  req.body.cartoesAmarelosServer; 
    var fkUsuario = req.body.fkUsuarioServer;

    // Faça as validações dos valores
    if (campeonato == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (mandoCampo == undefined) {
        res.status(400).send("Seu telefone está undefined!");
    } else if (resultadoPartida == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (golsPro == undefined) {
        res.status(400).send("Seu nome de usuário está undefined!");
    } else if (golsContra == undefined) {
        res.status(400).send("Seu time está undefined!");
    } else if (escanteios == undefined) {
        res.status(400).send("Seu time está undefined!");
    } else if (cartoesAmarelos == undefined) {
        res.status(400).send("Seu time está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.partida(campeonato, mandoCampo, resultadoPartida, golsPro, golsContra, escanteios, cartoesAmarelos, fkUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    login,
    cadastrar,
    listar,
    testar,
    trocar,
    partida,
}