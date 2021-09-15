#!/usr/bin/env node
const fs = require("fs");

const html5 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>`

const filename = process.argv[2];
fs.writeFileSync(`${process.cwd()}/${filename}`, html5);