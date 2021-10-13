const argv = require('./config/yargs.js')
const { crearArchivo } = require('./helpers/multiplicar.js')

console.clear()

// console.log('base: yargs', argv.base)

// console.log(argv)
// const [, , arg3 = 'base=5'] = process.argv
// const [ , base] = arg3.split('=')
// const  base = 4
crearArchivo(argv.base, argv.listar, argv.hasta)
  .then(nombreArchivo => console.log(nombreArchivo, 'Creado'))
  .catch(err => console.log(err))