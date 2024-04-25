import sequelize, {Model} from "sequelize";
import db from '.';
import Schedule from "./Schedule";

class Client extends Model {
    declare id: number
    declare name: string
    declare cpf: number
    declare birthdate: string
}

Client.init({
    cpf:{
        type:sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name:{
        type: sequelize.STRING,
        allowNull: false,
    },
    birthdate:{
        type: sequelize.STRING,
        allowNull: false,
    },
}, {sequelize: db, tableName: "clients", timestamps: false})

// Client.hasMany(Schedule,{foreignKey: 'cpf'})


export default Client;