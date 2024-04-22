// import path from 'path'

// const fileNameFn = (format: string, name: string, sub?: string) => {
//     if (sub) {
//         if (format === 'es')
//             return `${sub}/${name}.js`
//         else
//             return `${sub}/${name}.${format}`
//     } else {
//         if (format === 'es')
//             return `${name}.js`
//         else
//             return `${name}.${format}`
//     }
// }

// const config = {
//     main: {
//         entry: path.resolve(__dirname, "./src/widgets/index.ts"),
//         fileName: (format) => fileNameFn(format, 'index')
//     },
//     mui: {
//         entry: path.resolve(__dirname, "./src/mui/mui.ts"),
//         fileName: (format) => fileNameFn(format, 'mui'),
//     },
// }

// export const currentConfig = config[process.env.LIB_NAME]

// // if (process.env.NODE_ENV != "development" && currentConfig === undefined)
// //   throw new Error('LIB_NAME is not defined or is not valid')
