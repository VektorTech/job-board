import Company from '../../models/Company';

export default (data) => {
    const { id, email, password, name, description, website, phone, address, logo } = data;

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