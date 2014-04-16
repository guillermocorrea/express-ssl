express-ssl
===========

Boiler plate code setting up an https server with nodejs + express

To start first create key.pem and cert.pem files:

Create key.pem file:

```
openssl req -newkey rsa:2048 -new -nodes -keyout key.pem -out csr.pem
```

Create cert.pem file:

```
openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key.pem -out cert.pem
```

Then enter:

```
npm install
node server.js
```

Browse to htpps://localhost:1343/
