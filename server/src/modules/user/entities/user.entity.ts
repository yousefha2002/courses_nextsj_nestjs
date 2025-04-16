import { Column, Model, Table, DataType, HasMany, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { UserRole } from 'src/common/enums/roles';

@Table({ tableName: 'users' })
export class User extends Model {
    @Column({ allowNull: false, autoIncrement: true, primaryKey: true })
    id: number;

    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    email: string;

    @Column({ type: DataType.STRING, allowNull: false })
    password: string;

    @Column({ type: DataType.STRING })
    username: string;

    @Column({ 
        type: DataType.STRING,
        defaultValue:"https://cdn-icons-png.flaticon.com/512/149/149071.png" })
    image: string;

    @Column({
        type: DataType.DATEONLY,
        allowNull: false,
    })
    birthdate: string;

    @Column({
        type: DataType.ENUM,
        values: Object.values(UserRole),
        allowNull: false
    })
    role: UserRole;
}
