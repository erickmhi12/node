const argv = require('./config/yargs').argv;
const colors = require('colors');


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then((result) => {
            console.log(`Archivo creado: ` + colors.rainbow(` ${ result }`));
        }).catch((err) => {
            console.log(err)
        });
        break;
    default:
        console.log('Comando no reconocido');
        break;
}

// let base = '5';

// // console.log(process.argv);
// let argv2 = process.argv;
// // let parametro = argv[2];
// // let base = parametro.split('=')[1];

// console.log('limite', argv.limite);