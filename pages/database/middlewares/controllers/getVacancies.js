import Vacancy from '../../models/Vacancy';
import Company from '../../models/Company';
import Sequelize from 'sequelize';
const Op = Sequelize.Op;

export default (data) => {
    return Vacancy.findAll({
        where: {
            category: {
                [Op.like]: data["Categories"].toLowerCase() || '%'
            },
            title: {
                [Op.like]: data["Search"] ? "%"+data["Search"]+"%" : "%"
            },
            time: {
                [Op.like]: data["Job Type"].substring(0,4) || "%"
            },
            salary: {
                [Op.between]: data["Salary Range"] ? data["Salary Range"].replace(/[\$\s,]/g,'').split('-') : [0,1000000]
            },
        }, 
        limit: 10,
        include: [Company] 
    });
};