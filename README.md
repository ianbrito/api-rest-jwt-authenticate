# API Rest Authenticate using JWT


## Rotas

``auth/siginup``

```json
request body
{
  "name": "Ian Azevedo",
  "login": "ian.azevedo",
  "password": "senha"
}
```

```json
response body
{
  "user": {
    "id": 1,
    "name": "Ian Azevedo",
    "login": "ian.azevedo"
  },
  "token": "eyJhbGciOiJIUzI1NiJ9.MQ.sWzoCNYl3ZokV7KwKj1BFYXTKdV3n9-pNZQ4_XtapLA"
}
```

``auth/signin``

```json
request body
{
  "login": "ian.azevedo",
  "password": "senha"
}
```

```json
response body
{
  "user": {
    "id": 1,
    "name": "Ian Azevedo",
    "login": "ian.azevedo"
  },
  "token": "eyJhbGciOiJIUzI1NiJ9.MQ.sWzoCNYl3ZokV7KwKj1BFYXTKdV3n9-pNZQ4_XtapLA"
}
```