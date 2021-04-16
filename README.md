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

Após as 2 aplicações subirem, você pode visualizar [Clicando aqui](http://localhost:8080/).

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

### Credenciais da aplicação
- usuario: admin
- senha: password

OBS: É necessário que as portas 8080 e 3003 estejam livres para que as aplicações possam subir.