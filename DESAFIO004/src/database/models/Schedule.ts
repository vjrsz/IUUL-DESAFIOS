import sequelize, {Model} from "sequelize";
import db from '.';
import Client from "./Client";

class Schedule extends Model {
    declare id: number
    declare cpf: number
    declare date: string
    declare hourInit: string
    declare hourEnd: string
}

Schedule.init({
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    cpf: {
        type: sequelize.INTEGER,
        allowNull: false,
        references:{
            model: 'clients',
            key: 'cpf',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    date: {
        type: sequelize.STRING,
        allowNull: false
    },
    hourInit: {
        type: sequelize.STRING,
        allowNull: false
    },
    hourEnd: {
        type: sequelize.STRING,
        allowNull: false
    },
}, {sequelize: db, tableName: "schedules", timestamps: false})

Schedule.belongsTo(Client, {
    foreignKey: 'cpf'
})

export default Schedule;