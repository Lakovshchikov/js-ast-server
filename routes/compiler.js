const express = require('express');
const SyntaxTreeWrapper = require("../src/compiler").SyntaxTreeWrapper;
const writeFile = require("../src/fileManager/").writeData;


function compile(req, res) {
    SyntaxTreeWrapper.generateSyntaxTree(req.body.src)
        .then(tree => {
            writeFile("SyntaxTree", tree, ()=>{
                res.json(tree)
            })
        })
        .catch(e => {
            res.json(e)
        })
}

function lexem(req, res) {
    SyntaxTreeWrapper.generateLexem()
        .then(lexem => {
            writeFile("Lexem", lexem, ()=>{
                res.json(lexem)
            })
        })
        .catch(e => {
            res.json(e)
        })
}

module.exports = {
    compile: compile,
    lexem: lexem
}