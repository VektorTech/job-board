import Vacancy from '../../models/Vacancy';

export default (data) => {
    // const {
    //     title,
    //     salary,
    //     start,
    //     time,
    //     location,
    //     description,
    //     company
    // } = data;

    Vacancy.sync().then(() => {
        return Vacancy.create({ ...data });
    });
}