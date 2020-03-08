import Company from '../../models/Company';
import bcrypt from "bcryptjs";

export default (data) => new Promise((resolve, reject) => {
    const { email, password } = data;

    Company.findOne({
        where: {
            email: email
        }
    }).then( company => {
        if( bcrypt.compareSync(password, company.dataValues['password']) )
            resolve(company.dataValues);
    } );
});