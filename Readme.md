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
├── LICENSE                     # Arquivo de licença
├── package.json                # Configuração do npm
├── README.md                   # Arquivo de README
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
   git clone git@github.com:brunosbardelatti/k6_poc.git
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
Onde TIPO_DE_TESTE é um parâmetro opcional que define o tipo de teste a ser executado. Os tipos disponíveis são:

- rampingVus: Realiza um teste de carga onde o número de usuários virtuais (VUs) aumenta gradualmente.
- constantVus: Realiza um teste de carga onde o número de usuários virtuais (VUs) permanece constante ao longo do teste.

### Usando Docker Compose com Grafana
Para executar os testes utilizando Docker Compose e visualizar os resultados no Grafana, execute o script `run_docker-compose_k6_grafana.sh`:

```sh
./run_docker-compose_k6_grafana.sh [TIPO_DE_TESTE]
```
Onde TIPO_DE_TESTE é um parâmetro opcional que define o tipo de teste a ser executado. Os tipos disponíveis são:

- rampingVus: Realiza um teste de carga onde o número de usuários virtuais (VUs) aumenta gradualmente.
- constantVus: Realiza um teste de carga onde o número de usuários virtuais (VUs) permanece constante ao longo do teste.

Após a execução, acesse o dashboard do Grafana em `http://localhost:3000/d/k6/k6-load-testing-results`.

## Relatórios
Os relatórios de teste serão gerados no diretório `reports`. Os tipos de arquivos gerados incluem:

- `index_${timestamp}.html`: Relatório em formato HTML, contendo uma visão detalhada dos testes.
- `summary_${timestamp}.txt`: Resumo em formato de texto simples.
- `summary_${timestamp}.json`: Relatório em formato JSON para fácil integração com outras ferramentas.
- `summary_${timestamp}.csv`: Relatório em formato CSV para análise em ferramentas de planilhas.

Cada arquivo de relatório terá um `timestamp` no final do nome para facilitar a localização em caso de múltiplas execuções. O `timestamp` ajuda a distinguir entre diferentes execuções dos testes. Em caso de erros durante a execução dos testes, verifique o arquivo de log `k6_error.log` que será gerado no mesmo diretório.

## Contribuindo
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## Licença
Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Autor
Bruno Sbardelatti