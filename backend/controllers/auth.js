const User = require('../model/User');

const register = () => {
    User.sync().then(() => {
        // Now the `users` table in the database corresponds to the model definition
        return User.create({
          firstName: 'John',
          lastName: 'Hancock'
        });
    }).then();
}

module.exports = {
  register: register
}