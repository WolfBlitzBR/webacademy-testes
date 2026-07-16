const { expect } = require('chai')
const CalculadoraService = require('../src/service/CalculadoraService')
const sinon = require('sinon')
const calculadora = require('../src/models/Calculadora')

describe('Calculadora Service com Mock', () =>{

    afterEach(() => {
        sinon.restore()
    })

    it('deve dividir dois números', () => {

        const stub = sinon.stub(calculadora, 'dividir')
        stub.returns(5)

        const resultado = CalculadoraService.dividir(10,2)
         
        sinon.assert.calledOnce(stub)
        sinon.assert.calledWithExactly(stub,10,2)
        expect(resultado).to.equal(5)
    })

    it('deve lançar erro ao dividir por zero', () => {

        const stub = sinon.stub(calculadora, 'dividir')

        expect(() => {
             CalculadoraService.dividir(10,0)
        }).to.throw('Divisor não pode ser zero')

        sinon.assert.notCalled(stub)
    })
})