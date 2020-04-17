const valid_string_1 = "let a = 0;\n" +
    "var c = \"3\";\n" +
    "let b;\n" +
    "if (a !== c){\n" +
    " b = true\n" +
    "} else {\n" +
    " b = false\n" +
    "}"

const valid_string_2 = "let a = 0;";

const invalid_string_1 = "Строка с не валидными значениями";

module.exports = {
    valid_string_1: valid_string_1,
    valid_string_2: valid_string_2,
    invalid_string_1: invalid_string_1
}
