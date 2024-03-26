var express = require("express");
const { body } = require("express-validator");
const Empleado = require("../public/javascripts/classes");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/", function (req, res, next) {
  res.send("done")
  let nuevoEmpleado = new Empleado(
    req.body.id,
    req.body.nombre,
    req.body.apellido,
    req.body.salario,
    req.body.eps,
    req.body.arl,
    req.body.fin,
    req.body.feg,
    req.body.fna
  );
});

module.exports = router;
