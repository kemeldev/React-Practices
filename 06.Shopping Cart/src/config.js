// en un archivo de config.js se pueden crear variables de entorno, ademas se podrian utilizar aca claves o api keys, pero hay que meter el archivo en el gitIgnore

export const DEVELOPMENT = process.env.NODE_ENV !== 'production'
