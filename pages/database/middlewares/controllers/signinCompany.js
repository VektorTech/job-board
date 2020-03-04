import Company from '../../models/Company';

export default (data) => new Promise((resolve, reject) => {
    const { email, password } = data;

    Company.findOne({
        where: {
            email: email
        }
    }).then( company => {
        resolve(company.dataValues);
    } );
});