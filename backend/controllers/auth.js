const User = require('../model/User');

const register = () => {
    User.sync().then(() => {
        return User.create({
          email: '',
          password: '',
          name: '',
          sex: '',
          phone: '',
          address: '',
          avatar: ''
        });
    }).then();
}

module.exports = {
  register: register
}