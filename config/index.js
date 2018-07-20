const devConfig = require('./dev');
const prodConfig = require('./prod');

module.exports = {
  getConfig() {
    if(process.env.NODE_ENV === 'production') {
      return prodConfig;
    } else {
      return devConfig;
    }
  }
}
