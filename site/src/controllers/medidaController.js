var medidaModel = require("../models/medidaModel");

function buscarUltimasMedidas(req, res) {


    var fkUsuario = req.params.fkUsuario;
    var mandoCampo = req.params.mandoCampo

    console.log(`Recuperando as ultimas medidas`);

    medidaModel.buscarUltimasMedidas(fkUsuario, mandoCampo).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarUltimasMedidas1(req, res) {


    var fkUsuario = req.params.fkUsuario;
    var mandoCampo = req.params.mandoCampo

    console.log(`Recuperando as ultimas medidas`);

    medidaModel.buscarUltimasMedidas1(fkUsuario, mandoCampo).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarUltimasMedidas2(req, res) {


    var fkUsuario = req.params.fkUsuario;
    var mandoCampo = req.params.mandoCampo

    console.log(`Recuperando as ultimas medidas`);

    medidaModel.buscarUltimasMedidas2(fkUsuario, mandoCampo).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarUltimasMedidas3(req, res) {


    var fkUsuario = req.params.fkUsuario;
    var mandoCampo = req.params.mandoCampo

    console.log(`Recuperando as ultimas medidas`);

    medidaModel.buscarUltimasMedidas3(fkUsuario, mandoCampo).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarUltimasMedidas4(req, res) {


    var fkUsuario = req.params.fkUsuario;
    var mandoCampo = req.params.mandoCampo

    console.log(`Recuperando as ultimas medidas`);

    medidaModel.buscarUltimasMedidas4(fkUsuario, mandoCampo).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarUltimasMedidas5(req, res) {


    var fkUsuario = req.params.fkUsuario;
    var mandoCampo = req.params.mandoCampo

    console.log(`Recuperando as ultimas medidas`);

    medidaModel.buscarUltimasMedidas5(fkUsuario, mandoCampo).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarUltimasMedidas6(req, res) {


    var fkUsuario = req.params.fkUsuario;
    var mandoCampo = req.params.mandoCampo

    console.log(`Recuperando as ultimas medidas`);

    medidaModel.buscarUltimasMedidas6(fkUsuario, mandoCampo).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarUltimasMedidas7(req, res) {


    var fkUsuario = req.params.fkUsuario;
    var mandoCampo = req.params.mandoCampo

    console.log(`Recuperando as ultimas medidas`);

    medidaModel.buscarUltimasMedidas7(fkUsuario, mandoCampo).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarUltimasMedidas8(req, res) {


    var fkUsuario = req.params.fkUsuario;
    var mandoCampo = req.params.mandoCampo

    console.log(`Recuperando as ultimas medidas`);

    medidaModel.buscarUltimasMedidas8(fkUsuario, mandoCampo).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarUltimasMedidas9(req, res) {


    var fkUsuario = req.params.fkUsuario;
    var mandoCampo = req.params.mandoCampo

    console.log(`Recuperando as ultimas medidas`);

    medidaModel.buscarUltimasMedidas9(fkUsuario, mandoCampo).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarUltimasMedidas10(req, res) {


    var fkUsuario = req.params.fkUsuario;
    var mandoCampo = req.params.mandoCampo

    console.log(`Recuperando as ultimas medidas`);

    medidaModel.buscarUltimasMedidas10(fkUsuario, mandoCampo).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarUltimasMedidas11(req, res) {


    var fkUsuario = req.params.fkUsuario;
    var mandoCampo = req.params.mandoCampo

    console.log(`Recuperando as ultimas medidas`);

    medidaModel.buscarUltimasMedidas11(fkUsuario, mandoCampo).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarMedidasEmTempoReal(req, res) {

    var fkUsuario = req.params.fkUsuario;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoReal(fkUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarUltimasMedidas,
    buscarUltimasMedidas1,
    buscarUltimasMedidas2,
    buscarUltimasMedidas3,
    buscarUltimasMedidas4,
    buscarUltimasMedidas5,
    buscarUltimasMedidas6,
    buscarUltimasMedidas7,
    buscarUltimasMedidas8,
    buscarUltimasMedidas9,
    buscarUltimasMedidas10,
    buscarUltimasMedidas11,
    buscarMedidasEmTempoReal

}