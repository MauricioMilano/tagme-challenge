# Desafio Tagme

## Contador de Receitas - Coco Bambu

Para iniciar o Front-end execute:

```sh
bash init-backend.sh
```

Isso irá subir uma imagem docker executando a solução Front-end.

O mesmo acontecerá com o backend, iniciando uma imagem docker. Para isso, execute:

```sh
bash init-backend.sh
```


Caso o docker não funcione, pode rodar da seguinte forma:
- frontend
```sh
cd frontend-executable
npm install
npm start
```
- backend
```sh
cd backend
npm install
# caso queira rodar em desenvolvimento
# npm start
npm run start:prod
```