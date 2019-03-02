import typescript from 'rollup-plugin-typescript';

export default {
  entry: './src/Main.jsx',
  dest: './bundle.js',
  format: 'iife',
  plugins: [
    typescript()
  ],
  external: ['react','react-dom','socket.io-client'],
  globals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'socket.io-client': 'io'
  }
}