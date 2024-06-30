const mongoose = require('mongoose');

const connectionString ='YOUR_DATABASE_LINK/miniuno';


mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));
