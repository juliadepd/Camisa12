var database = require("../database/config");

function buscarUltimasMedidas(fkUsuario, mandoCampo) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas}
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,  
                        momento,
                        CONVERT(varchar, momento, 108) as momento_grafico
                    from medida
                    where fk_aquario = ${fkUsuario}
                    order by id desc`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
            instrucaoSql = `select campeonato, mandoCampo, resultadoPartida, avg(golsPro) as golsPro, avg(golsContra) as golsContra, avg(escanteios) as escanteios, avg(cartoesAmarelos) as cartoesAmarelos, 
            fkUsuario from Partida join Usuario on fkUsuario = idUsuario where fkUsuario = '${fkUsuario}' and campeonato = 'brasileirao' and mandoCampo = '${mandoCampo}';`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidas1(fkUsuario, mandoCampo) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas}
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,  
                        momento,
                        CONVERT(varchar, momento, 108) as momento_grafico
                    from medida
                    where fk_aquario = ${fkUsuario}
                    order by id desc`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select mandoCampo, fkUsuario, count(resultadoPartida) as vitorias from Partida join Usuario 
        on fkUsuario = idUsuario where fkUsuario = '${fkUsuario}' and campeonato = 'brasileirao' and mandoCampo = '${mandoCampo}' 
        and resultadoPartida = 'vitoria' group by ResultadoPartida ;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidas2(fkUsuario, mandoCampo) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas}
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,  
                        momento,
                        CONVERT(varchar, momento, 108) as momento_grafico
                    from medida
                    where fk_aquario = ${fkUsuario}
                    order by id desc`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select mandoCampo, fkUsuario, count(resultadoPartida) as empates from Partida join Usuario on fkUsuario = idUsuario where fkUsuario = '${fkUsuario}'
         and campeonato = 'brasileirao' and mandoCampo = '${mandoCampo}' and resultadoPartida = 'empate' group by ResultadoPartida ;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidas3(fkUsuario, mandoCampo) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas}
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,  
                        momento,
                        CONVERT(varchar, momento, 108) as momento_grafico
                    from medida
                    where fk_aquario = ${fkUsuario}
                    order by id desc`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select mandoCampo, fkUsuario, count(resultadoPartida) as derrotas from Partida join Usuario on fkUsuario = idUsuario where fkUsuario = '${fkUsuario}'
         and campeonato = 'brasileirao' and mandoCampo = '${mandoCampo}' and resultadoPartida = 'derrota' group by ResultadoPartida ;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidas4(fkUsuario, mandoCampo) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas}
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,  
                        momento,
                        CONVERT(varchar, momento, 108) as momento_grafico
                    from medida
                    where fk_aquario = ${fkUsuario}
                    order by id desc`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
            instrucaoSql = `select campeonato, mandoCampo, resultadoPartida, avg(golsPro) as golsPro, avg(golsContra) as golsContra, avg(escanteios) as escanteios, avg(cartoesAmarelos) as cartoesAmarelos, 
            fkUsuario from Partida join Usuario on fkUsuario = idUsuario where fkUsuario = '${fkUsuario}' and campeonato = 'copabr' and mandoCampo = '${mandoCampo}';`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidas5(fkUsuario, mandoCampo) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas}
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,  
                        momento,
                        CONVERT(varchar, momento, 108) as momento_grafico
                    from medida
                    where fk_aquario = ${fkUsuario}
                    order by id desc`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select mandoCampo, fkUsuario, count(resultadoPartida) as vitorias from Partida join Usuario 
        on fkUsuario = idUsuario where fkUsuario = '${fkUsuario}' and campeonato = 'copabr' and mandoCampo = '${mandoCampo}' 
        and resultadoPartida = 'vitoria' group by ResultadoPartida ;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidas6(fkUsuario, mandoCampo) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas}
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,  
                        momento,
                        CONVERT(varchar, momento, 108) as momento_grafico
                    from medida
                    where fk_aquario = ${fkUsuario}
                    order by id desc`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select mandoCampo, fkUsuario, count(resultadoPartida) as empates from Partida join Usuario on fkUsuario = idUsuario where fkUsuario = '${fkUsuario}'
         and campeonato = 'copabr' and mandoCampo = '${mandoCampo}' and resultadoPartida = 'empate' group by ResultadoPartida ;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidas7(fkUsuario, mandoCampo) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas}
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,  
                        momento,
                        CONVERT(varchar, momento, 108) as momento_grafico
                    from medida
                    where fk_aquario = ${fkUsuario}
                    order by id desc`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select mandoCampo, fkUsuario, count(resultadoPartida) as derrotas from Partida join Usuario on fkUsuario = idUsuario where fkUsuario = '${fkUsuario}'
         and campeonato = 'copabr' and mandoCampo = '${mandoCampo}' and resultadoPartida = 'derrota' group by ResultadoPartida ;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidas8(fkUsuario, mandoCampo) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas}
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,  
                        momento,
                        CONVERT(varchar, momento, 108) as momento_grafico
                    from medida
                    where fk_aquario = ${fkUsuario}
                    order by id desc`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
            instrucaoSql = `select campeonato, mandoCampo, resultadoPartida, avg(golsPro) as golsPro, avg(golsContra) as golsContra, avg(escanteios) as escanteios, avg(cartoesAmarelos) as cartoesAmarelos, 
            fkUsuario from Partida join Usuario on fkUsuario = idUsuario where fkUsuario = '${fkUsuario}' and campeonato = 'libertadores' and mandoCampo = '${mandoCampo}';`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidas9(fkUsuario, mandoCampo) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas}
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,  
                        momento,
                        CONVERT(varchar, momento, 108) as momento_grafico
                    from medida
                    where fk_aquario = ${fkUsuario}
                    order by id desc`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select mandoCampo, fkUsuario, count(resultadoPartida) as vitorias from Partida join Usuario 
        on fkUsuario = idUsuario where fkUsuario = '${fkUsuario}' and campeonato = 'libertadores' and mandoCampo = '${mandoCampo}' 
        and resultadoPartida = 'vitoria' group by ResultadoPartida ;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidas10(fkUsuario, mandoCampo) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas}
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,  
                        momento,
                        CONVERT(varchar, momento, 108) as momento_grafico
                    from medida
                    where fk_aquario = ${fkUsuario}
                    order by id desc`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select mandoCampo, fkUsuario, count(resultadoPartida) as empates from Partida join Usuario on fkUsuario = idUsuario where fkUsuario = '${fkUsuario}'
         and campeonato = 'libertadores' and mandoCampo = '${mandoCampo}' and resultadoPartida = 'empate' group by ResultadoPartida ;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function buscarUltimasMedidas11(fkUsuario, mandoCampo) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas}
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,  
                        momento,
                        CONVERT(varchar, momento, 108) as momento_grafico
                    from medida
                    where fk_aquario = ${fkUsuario}
                    order by id desc`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select mandoCampo, fkUsuario, count(resultadoPartida) as derrotas from Partida join Usuario on fkUsuario = idUsuario where fkUsuario = '${fkUsuario}'
         and campeonato = 'libertadores' and mandoCampo = '${mandoCampo}' and resultadoPartida = 'derrota' group by ResultadoPartida ;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(fkUsuario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 1
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,  
                        CONVERT(varchar, momento, 108) as momento_grafico, 
                        fk_aquario 
                        from medida where fk_aquario = ${fkUsuario} 
                    order by id desc`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
                        fk_aquario 
                        from medida where fk_aquario = ${fkUsuario} 
                    order by id desc limit 1`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
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
