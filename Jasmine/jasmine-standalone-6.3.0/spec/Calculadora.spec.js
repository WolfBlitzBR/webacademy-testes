describe('Testando o método somar', () => {
    let calc;

    beforEach(()=> calc=new Calculadora());

    it('deve somar', ()=>{
        expect(calc.somar(10,5)).toBe(15);
    });

    it ('deve subtrair', ()=>{
        expect(calc.subtrair(10,5)).toBe(5);
    })

    it ('deve multiplicar', ()=>{
        expect(calc.multiplicar(10,5)).toBe(50);
    })

    it ('deve dividir', ()=>{
        expect(calc.dividir(10,5)).toBe(2);
    })

    it ('deve lançar erro', ()=>{
        expect(()=> calc.dividir(10,0)).toThrowError('Não é possível dividir por zero');
    });
    
})