#!/usr/bin/env node
const fs = require("fs");

const html5 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Touch5</title>
    <link rel="stylesheet" href="css/style.css">
    <script src="js/script.js" defer="true"></script>
</head>
<body>
    <h1 class="title">Hello World!</h1>
</body>
</html>`;

const css3 = `body{
    display: flex;
    justify-content: center;
    align-items: center;
    background: #1f222d;
    weight: 100vw;
    height: 100vh;
}
.title{
    font-size: 80px;
    color: #E5E9F0;
}`;

fs.writeFileSync(`${process.cwd()}/index.html`, html5);
fs.mkdirSync(`${process.cwd()}/css`);
fs.mkdirSync(`${process.cwd()}/js`);
fs.mkdirSync(`${process.cwd()}/img`);
fs.writeFileSync(`${process.cwd()}/css/style.css`, css3);
fs.writeFileSync(`${process.cwd()}/js/script.js`, '');
