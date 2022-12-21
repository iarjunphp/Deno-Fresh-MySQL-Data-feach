import { DataTypes, Model } from 'denodb/mod.ts';

class User extends Model {

    static table = 'users';

    static timestamps = true;

    // static defaults = {
    //     name: 'Something About Us',
    // };
      
    static fields = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            // unique: true,
            allowNull: false,
        },
        accountType:DataTypes.INTEGER,
        gender: DataTypes.STRING,
        dateOfBirth: DataTypes.DATE,
        password: DataTypes.STRING,
        phoneNumber: DataTypes.STRING,
        emailVerifiedAt: DataTypes.DATETIME,
        token: DataTypes.STRING,
        profilePicture: DataTypes.STRING
    };
}

export default User