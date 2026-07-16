const CalculadoraService = require ('../service/CalculadoraService')

function dividir(req,res){
    try{
        const {a, b} = req.body;
        const resultado = CalculadoraService.dividir(a,b)
        return res.status(200).json({resultado})
    }catch (error) {
        return res.status(400).json({
            erro: error.message
        })
    }
}
module.exports = {
    dividir
}