const mongoose = require('mongoose');
let con = 'mongodb+srv://jhonprevitera:jhonprevitera@cluster0.kkzzawy.mongodb.net/?retryWrites=true&w=majority'


async function main()
{
    mongoose.connect(con);
    console.log('concectado fdp');
}

main().catch(err => console.log(err));

mongoose.Promise = global.Promise;

module.exports = mongoose;