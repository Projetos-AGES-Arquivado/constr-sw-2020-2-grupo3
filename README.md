# Construção de Software - Grupo 3

## Estudo de Caso

- Grupo responsável pela parte de avaliações do projeto da disciplina.

## Arquivo Swagger do projeto

- Para acessar o swagger do projeto é necessário inserir o arquivo _swagger.yaml_ do projeto no editor do swagger.

- https://editor.swagger.io/

- [Abrir arquivo Swagger do projeto](public/swagger.yaml)

# Execução Desenvolvimento

- Execução das dependências de ambiente

        docker-compose -f docker-compose.dev.yml up -d

- Execução das dependências do projeto

        npm install

- Execução da API

        npm run dev

# Execução Produção

- Build da imagem do projeto

        ./scripts/build.sh

- Execução do projeto em conjunto com o ambiente

        docker-compose up -d

- Verificação do estado do projeto

        ./scripts/health-check.sh