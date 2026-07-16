const request = require('supertest')
const { expect } = require('chai')
const app = require('../src/app');
const { response } = require('express');

describe('Teste API calculadora', () => {
    it('Calculadora deve retornar status 200',async ()=>{
         const resposta = await request(app)
         .post('/calculadora/dividir')
         .send({
            a: 10,
            b: 2
         })
         expect(resposta.status).to.equal(200)
         expect(resposta.body.resultado).to.equal(5)
    });
})