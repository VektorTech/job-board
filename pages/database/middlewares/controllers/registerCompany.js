import Company from '../database/model/Company';

export default () => {
    const { id, email, password, name, description, website, phone, address, logo } = req.body;

    Company.sync().then(() => {
        return User.create({
            id,
            email,
            password,
            name,
            description,
            website,
            phone,
            address,
            logo
        });
    });
}