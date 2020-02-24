import User from '../database/model/User';

export const register = (req, res, next) => {
  const { id, email, password, name, sex, phone, address, avatar } = req.body;

  User.sync().then(() => {
      return User.create({
        id,
        email,
        password,
        name,
        sex,
        phone,
        address,
        avatar
      });
  });

  return next();
}