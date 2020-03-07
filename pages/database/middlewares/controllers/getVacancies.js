import Vacancy from '../../models/Vacancy';
import Company from '../../models/Company';

export default (data) => {
    const {  } = data;

    return Vacancy.findAll({ limit: 10, include: [Company] });
};