import User from '../database/model/User';

export const register = (req, res, next) => {
  const { email, password, name, sex, phone, address, avatar } = req.body;

  User.sync().then(() => {
      return User.create({
        email,
        password,
        name,
        sex,
        phone,
        address,
        avatar
      });
  });
}