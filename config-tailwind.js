/**
 * @type {import("prettier").Options}
 */
const config = require('./config')

/**
 * @type {import("prettier").Options}
 */
const override = {
    plugins: ['prettier-plugin-tailwindcss'],
}

module.exports = { ...config, ...override }
