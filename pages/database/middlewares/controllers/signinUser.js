import User from '../../models/User';
import bcrypt from 'bcryptjs';

export default (data) => new Promise((resolve, reject) => {
    const { email, password } = data;

    User.findOne({
        where: {
            email: email
        }
    }).then( async user => {
        if( await bcrypt.compare(password, company.dataValues['password']) ){
            resolve(user.dataValues);
        } else {
            throw new Error("Don't match");
        }
    }).catch(reject);
});