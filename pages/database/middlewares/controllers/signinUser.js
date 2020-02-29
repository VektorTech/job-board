import User from '../../models/User';

export default (data) => new Promise((resolve, reject) => {
    const { email, password } = data;

    User.findOne({
        where: {
            email: email
        }
    }).then( user => {
        resolve(user.dataValues);
    } );
});