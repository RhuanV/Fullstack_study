import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs", // Necessário para usar require/module.exports no Node
      globals: {
        ...globals.node,
        ...globals.jest, // Caso você já esteja pensando nos testes da Parte 4
      },
    },
    rules: {
      // Regras exigidas no Full Stack Open:
      indent: ["error", 2],
      eqeqeq: "error",
      "no-trailing-spaces": "error",
      "object-curly-spacing": ["error", "always"],
      "arrow-spacing": ["error", { before: true, after: true }],
      // 'linebreak-style': ['error', 'unix'],
      // 'quotes': ['error', 'single'],
      // 'semi': ['error', 'never'],
      // 'no-unused-vars': 'warn',
      'no-console': 'off',
    },
  },
  {
    // Ignora pastas que não devem ser verificadas
    ignores: ["dist/**", "node_modules/**", "build/**"],
  },
];
