import Company from '../../models/Company';

export default (data) => {
    Company.sync().then(() => {
        return Company.create({...data });
    });
}