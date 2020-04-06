const { parse, walk } = require('abstract-syntax-tree');
const dictionary = require('./dictionary').dictionary;

class SyntaxTreeWrapper {

    constructor() {
        this.tree = undefined;
        this.lexem = {}
    }

    generateSyntaxTree(source) {
        return new Promise((resolve, reject)=>{
            try {
                this.tree = parse(source);
                resolve(this.tree);
            } catch (e) {
                console.error(e.message);
                this.tree = null;
                reject(e);
            }
        })
    }

    generateLexem () {
        return new Promise((resolve, reject)=>{
            try {
                let lexem = {}
                let resultLexem = {};
                walk(this.tree, (node, parent) => {
                    let lexema = dictionary[node.type];
                    debugger
                    if (lexem[lexema.key] === undefined) {
                        lexem[lexema.key] =new Set();
                    }
                    if (lexema.field !== undefined ) {
                        lexem[lexema.key].add(node[lexema.field]);
                    } else {
                        lexem[lexema.key].add(lexema.default);
                    }
                    if (lexema.extension !== undefined) {
                        lexema.extension.forEach(item =>{
                            if (node[item.key] !== null) {
                                lexem[lexema.key].add(item.value);
                            }
                        })
                    }
                });
                for (let key in lexem) {
                    resultLexem[key] = {
                        class: key,
                        values: Array.from(lexem[key])
                    }
                };
                this.lexem = resultLexem;
                resolve(this.lexem);
            } catch (e) {
                console.error(e.message);
                this.lexem = null;
                reject(e);
            }
        })
    }

    get syntaxTree(){
        return this.tree;
    }
}

module.exports = {
    SyntaxTreeWrapper: new SyntaxTreeWrapper()
}