# client

## Project setup

``` 
npm install
```

### Compiles and hot-reloads for development

``` 
npm run serve
```

### Compiles and minifies for production

``` 
npm run build
```

### Lints and fixes files

``` 
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### Deploy app to Heroku

1. Run

``` 
npm install express --save
```

2. Create server.js at root folder

3. Paste following code to server.js

``` 
var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
app = express();
app.use(serveStatic(__dirname + "/dist"));
var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started ' + port);
```

4. Edit package.json

``` 
"scripts": {

    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint",
    "postinstall": "npm run build",
    "start": "node server.js"

  }, 
```
