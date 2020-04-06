const dictionary = {
    Program : {
        key: "Program",
        field: "sourceType"
    },
    VariableDeclaration : {
        key: "VariableDeclaration",
        field: "kind"
    },
    VariableDeclarator : {
        key : "VariableDeclarator",
        default: "="
    },
    Literal : {
        key : "Literal",
        field: "value"
    },
    Identifier : {
        key : "Identifier",
        field : "name"
    },
    IfStatement : {
        key: "IfStatement",
        default: "if ()",
        extension: [
            {
                key: "alternate",
                value: "else"
            }
        ]
    },
    BinaryExpression : {
        key: "BinaryExpression",
        field: "operator",
    },
    BlockStatement : {
        key : "BlockStatement",
        default: "{}"
    },
    ExpressionStatement : {
        key : "ExpressionStatement",
        default : "="
    },
    AssignmentExpression : {
        key: "AssignmentExpression",
        field: "operator"
    },
    UpdateExpression: {
        key: "UpdateExpression",
        field: "operator",
    }
}

module.exports = {
    dictionary : dictionary
}
