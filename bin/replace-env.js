var fs = require('fs');
var path = require('path');

const yml = fs.readFileSync(path.resolve(__dirname, '..', 'style.yml'), {encoding: 'utf-8'})
const data = yml.replace(/\$GITHUB_REPOSITORY/g, process.env.GITHUB_REPOSITORY)
fs.writeFileSync(path.resolve(__dirname, '..', 'style.yml'), data)
