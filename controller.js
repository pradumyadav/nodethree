const { first, second, third, four } = require("./allcallbackFuntion")
const middle = require("./middle")

    const controller = require("express").Router()

    controller .get("/first",middle,first)

    controller .get("/second",second)

    controller .get("/third",middle,third)

    controller .get("/four",four)


        module.exports=controller ;