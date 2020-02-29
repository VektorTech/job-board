import User from '../../models/User';

export default (data) => {
    const { id, email, password, name, sex, phone, address, avatar } = data;

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
}