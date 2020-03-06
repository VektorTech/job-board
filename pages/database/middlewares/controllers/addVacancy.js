import Vacancy from '../../models/Vacancy';

export default (data) => {
    Vacancy.sync().then(() => {
        return Vacancy.create({ ...data });
    });
}