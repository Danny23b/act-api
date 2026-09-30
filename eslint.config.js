const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
    {
        ignores: ["eslint.config.js"]
    },

    js.configs.recommended,

    {
        files: ["datos.js"],
        languageOptions: {
            globals: {
                ...globals.browser
            }
        }
    },

    {
        files: ["operaciones.js"],
        languageOptions: {
            globals: {
                ...globals.node
            }
        }
    },

    {
        files: ["operaciones.test.js"],
        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.jest
            }
        }
    }
];