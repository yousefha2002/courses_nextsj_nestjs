import { Sequelize } from 'sequelize-typescript';
import { User } from 'src/modules/user/entities/user.entity';

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
        const sequelize = new Sequelize({
            dialect: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '2838293yo',
            database: 'clinic_db',
        });
        sequelize.addModels([User]);
        await sequelize.sync({ alter: false });
        return sequelize;
        },
    },
];