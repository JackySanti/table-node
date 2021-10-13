const fs = require('fs')
const color = require('colors')

// const crearArchivo = async(base = 5) => {
//   console.log('==============')
//   console.log(` Tabla del ${base} `)
//   console.log('==============')

//   let salida = ''

//   for (i = 1; i <= 10; i++) {
//     salida += (`${base} X ${i} = ${i * base}\n`)
//   }
//   console.log(salida)

//   fs.writeFileSync(`tabla-${base}.txt`, salida)

//   return `Tabla del ${base} ha sido creada`
// }

// const crearArchivo = (base = 5) => {

//   return new Promise((resolve, reject) =>{
//     console.log('==============')
//     console.log(` Tabla del ${base} `)
//     console.log('==============')

//     let salida = ''

//     for (i = 1; i <= 10; i++) {
//       salida += (`${base} X ${i} = ${i * base}\n`)
//     }
//     console.log(salida)

//     fs.writeFileSync(`tabla-${base}.txt`, salida)

//     resolve(`Tabla del ${base} ha sido creada`)
//   })
// }

const crearArchivo = async (base = 5, listado, hasta) => {

  try{
    let salida = ''

    for (i = 1; i <= hasta; i++) {
      salida += (`${base} X ${i} = ${i * base}\n`)
    }
    if(listado == true){
      console.log('=============='.cyan)
      console.log(` Tabla del ${base} `.rainbow)
      console.log('=============='.cyan)
      console.log(salida.blue)
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)

    return `Tabla del ${base} ha sido creada`.green
  }

  catch(err){
    throw err
  }
}

module.exports = {
  crearArchivo
}