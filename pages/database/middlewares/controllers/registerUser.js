import User from '../../models/User';

export default (data) => {
    User.sync().then(() => {
        return User.create({ ...data });
    });
}