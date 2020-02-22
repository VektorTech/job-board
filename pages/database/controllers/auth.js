import User from '../model/User';

export const register = () => {
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