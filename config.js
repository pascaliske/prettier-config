/**
 * @type {import("prettier").Options}
 */
const config = {
    arrowParens: 'avoid',
    bracketSpacing: true,
    printWidth: 100,
    semi: false,
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'all',
    overrides: [
        {
            files: ['*.code-*'],
            options: {
                parser: 'json',
            },
        },
        {
            files: ['*rc'],
            options: {
                parser: 'json',
                tabWidth: 2,
            },
        },
        {
            files: ['*.json', '*.md', '*.yml', '*.yml.example', '*.yaml', '*.yaml.example'],
            options: {
                tabWidth: 2,
            },
        },
        {
            files: ['*.php'],
            options: {
                braceStyle: '1tbs',
                trailingCommaPHP: true,
            },
        },
    ],
}

module.exports = config
