import User from '../../models/User';
import bcrypt from 'bcryptjs';

export default (data) => new Promise((resolve, reject) => {
    const { email, password } = data;

    User.findOne({
        where: {
            email: email
        }
    }).then( user => {
        if( bcrypt.compareSync(password, company.dataValues['password']) )
            resolve(user.dataValues);
    } );
});