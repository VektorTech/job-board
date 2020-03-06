import Vacancy from '../../models/Vacancy';

export default (data) => {
    const {  } = data;

    return Vacancy.findAll({ limit: 10 });
};