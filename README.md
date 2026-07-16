# AprendendoTests

Repositório de estudos sobre testes automatizados em JavaScript, explorando duas abordagens diferentes:


Jasmine (testes rodando direto no navegador, sem dependências externas)
Node.js com Mocha, Chai, Sinon e Supertest (testes unitários, de serviço e de API)


Ambos os projetos usam o mesmo exemplo de domínio (uma Calculadora) para demonstrar conceitos como testes unitários, mocks/stubs e testes de integração de API.

Estrutura do projeto

AprendendoTests/
├── Jasmine/
│   └── jasmine-standalone-6.3.0/
│       ├── SpecRunner.html          # Página que executa os testes no navegador
│       ├── src/
│       │   └── Calculadora.js       # Código da calculadora
│       ├── spec/
│       │   └── Calculadora.spec.js  # Testes (specs) do Jasmine
│       └── lib/                     # Biblioteca do Jasmine
│
└── nodeJs/
    ├── server.js                    # Ponto de entrada do servidor Express
    ├── package.json                 # Dependências e scripts
    ├── src/
    │   ├── app.js                   # Configuração da aplicação Express
    │   ├── models/
    │   │   └── Calculadora.js       # Funções da calculadora (somar, subtrair, dividir...)
    │   ├── service/
    │   │   └── CalculadoraService.js
    │   └── controllers/
    │       └── CalculadoraController.js
    └── test/
        ├── Calculadora.test.js            # Testes unitários do model
        ├── CalculadoraService.test.js     # Testes com mock (Sinon)
        └── CalculadoraController.test.js  # Teste de API (Supertest)