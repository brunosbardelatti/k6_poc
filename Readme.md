# K6 Load Testing Project

## Descrição do Projeto
Este projeto é uma prova de conceito (PoC) para testes de carga utilizando o K6. Ele inclui a configuração de um ambiente de teste com Docker e Docker Compose, integração com Grafana para visualização de resultados e scripts de automação para facilitar a execução dos testes.

## Estrutura do Projeto
A estrutura do projeto está organizada da seguinte forma:

```
K6_POC/
├── reports/                    # Diretório para relatórios (criado automaticamente após a execução)
├── src                         # Código-fonte
│   ├── config
│   │   └── options.js          # Opções de configuração do K6
│   ├── dashboards
│   │   └── k6-load-testing-results_rev3.json  # Dashboard do Grafana
│   ├── data_test
│   │   └── dados.csv           # Dados de teste
│   ├── grafana
│   │   ├── grafana-dashboard
│   │   │   └── grafana-dashboard.yaml   # Configuração do dashboard do Grafana
│   │   └── grafana-datasource
│   │       └── grafana-datasource.yaml  # Configuração da fonte de dados do Grafana
│   ├── tests
│   │   ├── arquivoDeTeste.js   # Script de teste K6
│   │   └── arquivoDeTestePost.js # Outro script de teste K6
│   ├── utils
│   │   ├── config.js           # Configurações adicionais
│   │   └── report.js           # Utilitário para relatórios
│   └── main.js                 # Script principal de execução dos testes
├── Docker-compose.yml          # Configuração do Docker Compose
├── Dockerfile                  # Dockerfile para criar a imagem do K6
├── package.json                # Configuração do npm
├── run_docker_k6.sh            # Script para executar testes com Docker
└── run_docker-compose_k6_grafana.sh  # Script para executar testes com Docker Compose e Grafana
```

## Requisitos
- Docker
- Docker Compose
- Node.js (para gerenciamento de pacotes npm)

## Instalação
1. Clone o repositório:
   ```sh
   git clone <URL do Repositório>
   cd K6_POC
   ```

2. Instale as dependências do npm:
   ```sh
   npm install
   ```

## Executando os Testes

### Usando Docker
Para executar os testes utilizando Docker, execute o script `run_docker_k6.sh`:

```sh
./run_docker_k6.sh [TIPO_DE_TESTE]
```

Onde `TIPO_DE_TESTE` é um parâmetro opcional que define o tipo de teste a ser executado (por padrão, é `rampingVus`).

### Usando Docker Compose com Grafana
Para executar os testes utilizando Docker Compose e visualizar os resultados no Grafana, execute o script `run_docker-compose_k6_grafana.sh`:

```sh
./run_docker-compose_k6_grafana.sh [TIPO_DE_TESTE]
```

Após a execução, acesse o dashboard do Grafana em `http://localhost:3000/d/k6/k6-load-testing-results`.

## Relatórios
Os relatórios de teste serão gerados no diretório `reports`. Em caso de erros durante a execução dos testes, verifique o arquivo de log `k6_error.log` no mesmo diretório.

## Contribuindo
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## Licença
Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Autor
Bruno Sbardelatti




To do 

separa o contexto do if presente na Main
testar o grafana
implementar segundo teste(home)

revisar o Readme.md



K6_POC/
├── reports/ (será criado automaticamente após a execução)
├── src
│ ├── config
│ │ └── options.js
│ ├── dashboards
│ │ └── k6-load-testing-results_rev3.json
│ ├── data_test
│ │ └── dados.csv
│ ├── grafana
│ │ └── grafana-dashboard
│ │ | └── grafana-dashboard.yaml
│ │ └── grafana-datasource
│ │ | └── grafana-datasource.yaml
│ ├── tests
│ │ ├── arquivoDeTeste.js
│ │ ├── arquivoDeTestePost.js
│ ├── utils
│ │ ├── config.js
│ │ └── report.js
│ └── main.js
├── Docker-compose.yml
├── Dockerfile
├── package.json
├── run_docker_k6.sh
└── run_docker-compose_k6_grafana.sh


