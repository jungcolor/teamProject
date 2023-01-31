/**
 * User Model
 * @param {Sequelize} 
 * @param {DataTypes}  
 * 이름, 나이, 결혼여부, 자기소개, 생성일
 */

module.exports = (Sequelize, DataTypes) => {
    return Sequelize.define("user", {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nickName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        create_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('now()')
        }
    }, {
        timestamps: false,
        underscored: true
    });
}