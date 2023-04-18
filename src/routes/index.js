const list = require('./list');
const site = require('./site')

function route(app) {
    
    app.use('/', site);
    app.use('/ListProduct', list);
}

module.exports = route;
