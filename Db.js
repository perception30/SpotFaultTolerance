const mongoose = require('mongoose');
const config = require('./config');
mongoose.connect('config.DB_SERVER',
  { useNewUrlParser: true });

const WorkLoad = mongoose.model('WorkLoad', { name: String });

const workLoad = new WorkLoad({ name: 'Scientific Application' });
workLoad.save().then(() => console.log('worked!'));
