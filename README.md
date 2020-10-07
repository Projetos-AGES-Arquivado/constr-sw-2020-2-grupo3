# Construção de Software - Grupo 3

## Estudo de Caso

Grupo responsável pela parte de avaliações do projeto da disciplina.



Yaml gerado pelo https://editor.swagger.io/
swagger: "2.0"
info:
  description: "API de Avaliações."
  version: "1.0.0"
  title: "Swagger Avaliações"
basePath: "/api/v1"
schemes:
- "https"
- "http"
paths:
  /avaliacoes:
    get:
      tags:
      - "avaliacoes"
      summary: "Lista todas as avaliações."
      description: ""
      operationId: "getAllAvaliations"
      consumes:
      - "application/json"
      produces:
      - "application/json"
      parameters:
      - name: "query"
        in: "query"
        description: "Query"
        type: "string"
      responses:
        "200":
          description: "OK"
          schema:
            type: "object"
            items:
              $ref: "#/definitions/Avaliacao"
    
    post:
      tags:
      - "avaliacoes"
      summary: "Insere uma avaliação."
      description: ""
      operationId: "addAvaliations"
      consumes:
      - "application/json"
      produces:
      - "application/json"
      parameters:
      - in: "body"
        name: "avaliacao"
        required: true
        schema:
          $ref: "#/definitions/Avaliacao"
      responses:
        "200":
          description: "CREATED"
          schema:
            type: "object"
            items:
              $ref: "#/definitions/Avaliacao"
        "302":
          description: "FOUND: objeto já existente"
          
  /avaliacoes/{id}:
    get:
      tags:
      - "avaliacoes"
      summary: "Lista uma avaliação passando o id."
      description: ""
      operationId: "getAvaliationById"
      produces:
      - "application/json"
      parameters:
      - name: "id"
        in: "path"
        description: "ID da avaliacao"
        required: true
        type: "integer"
      responses:
        "200":
          description: "OK"
          schema:
            type: "object"
            items:
              $ref: "#/definitions/Avaliacao"
    
    delete:
      tags:
      - "avaliacoes"
      summary: "Deleta uma avaliação passando o id."
      description: ""
      operationId: "deleteAvaliationById"
      produces:
      - "application/json"
      parameters:
      - name: "id"
        in: "path"
        description: "ID da avaliacao"
        required: true
        type: "integer"
      responses:
        "200":
          description: "OK"
        "404":
          description: "NOT FOUND: objeto não encontrado"
                  
    put:
      tags:
      - "avaliacoes"
      summary: "Atualiza uma avaliação."
      description: ""
      operationId: "updateAvaliations"
      consumes:
      - "application/json"
      produces:
      - "application/json"
      parameters:
      - name: "id"
        in: "path"
        description: "ID da avaliacao"
        required: true
        type: "integer"
      - in: "body"
        name: "avaliacao"
        required: true
        schema:
          $ref: "#/definitions/Avaliacao"
      responses:
        "200":
          description: "OK"
        "404":
          description: "NOT FOUND: objeto não encontrado"
    
    patch:
      tags:
      - "avaliacoes"
      summary: "Atualiza parcialmente uma avaliação."
      description: ""
      operationId: "patchAvaliations"
      consumes:
      - "application/json"
      produces:
      - "application/json"
      parameters:
      - name: "id"
        in: "path"
        description: "ID da avaliacao"
        required: true
        type: "integer"
      - in: "body"
        name: "avaliacao"
        required: true
        schema:
          $ref: "#/definitions/Avaliacao"
      responses:
        "200":
          description: "OK"
        "404":
          description: "NOT FOUND: objeto não encontrado"

definitions:
  Questao:
    type: "object"
    properties:
      enunciado:
        type: "string"
      resposta:
        type: "string"

  Avaliacao:
    type: "object"
    properties:
      nome:
        type: "string"
      peso:
        type: "number"
      grau:
        type: "number"
      descricao:
        type: "string"
      questoes:
        type: "array"
        items:
          $ref: "#/definitions/Questao"