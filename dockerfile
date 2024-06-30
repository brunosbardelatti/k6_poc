# Use a imagem oficial do K6 como base
FROM grafana/k6:latest

# Defina o diretório de trabalho
WORKDIR /k6

# Copie todos os arquivos do projeto para o contêiner
COPY . .

CMD ["run", "/k6/src/main.js"]
