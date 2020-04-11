import Company from '../../models/Company';
import bcrypt from "bcryptjs";

export default (data) => new Promise((resolve, reject) => {
    const { email, password } = data;

    Company.findOne({
        where: {
            email: email
        }
    }).then( async company => {
        if( await bcrypt.compare(password, company.dataValues['password']) )
            resolve(company.dataValues);
        else 
            throw new Error("Don't match");
    } ).catch(reject);
});