import globals from "globals";
import pluginJs from "@eslint/js";
import pluginJest from "eslint-plugin-jest";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        it: "readonly",
        describe: "readonly",
        expect: "readonly",
        module: "writable",
      },
    },
    plugins: {
      jest: pluginJest,
    },
    rules: {
      "prefer-const": "warn",
      "no-irregular-whitespace": "error",
    },
  },
  eslintConfigPrettier,
  pluginJs.configs.recommended,
];
