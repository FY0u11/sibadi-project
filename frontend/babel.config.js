module.exports = {
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-transform-react-jsx',
    '@babel/plugin-syntax-jsx'
  ],
  presets: [['@babel/preset-env', { targets: { node: 'current' } }]]
}
