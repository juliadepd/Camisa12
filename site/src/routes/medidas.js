var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:fkUsuario/:mandoCampo", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/ultimas1/:fkUsuario/:mandoCampo", function (req, res) {
    medidaController.buscarUltimasMedidas1(req, res);
});

router.get("/ultimas2/:fkUsuario/:mandoCampo", function (req, res) {
    medidaController.buscarUltimasMedidas2(req, res);
});

router.get("/ultimas3/:fkUsuario/:mandoCampo", function (req, res) {
    medidaController.buscarUltimasMedidas3(req, res);
});

router.get("/ultimas4/:fkUsuario/:mandoCampo", function (req, res) {
    medidaController.buscarUltimasMedidas4(req, res);
});

router.get("/ultimas5/:fkUsuario/:mandoCampo", function (req, res) {
    medidaController.buscarUltimasMedidas5(req, res);
});

router.get("/ultimas6/:fkUsuario/:mandoCampo", function (req, res) {
    medidaController.buscarUltimasMedidas6(req, res);
});

router.get("/ultimas7/:fkUsuario/:mandoCampo", function (req, res) {
    medidaController.buscarUltimasMedidas7(req, res);
});

router.get("/ultimas8/:fkUsuario/:mandoCampo", function (req, res) {
    medidaController.buscarUltimasMedidas8(req, res);
});

router.get("/ultimas9/:fkUsuario/:mandoCampo", function (req, res) {
    medidaController.buscarUltimasMedidas9(req, res);
});

router.get("/ultimas10/:fkUsuario/:mandoCampo", function (req, res) {
    medidaController.buscarUltimasMedidas10(req, res);
});

router.get("/ultimas11/:fkUsuario/:mandoCampo", function (req, res) {
    medidaController.buscarUltimasMedidas11(req, res);
});

router.get("/tempo-real/:fkUsuario/:mandoCampo", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

module.exports = router;