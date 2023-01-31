/**
 * Board 테이블 만들기  
 * @param {Sequelize} 
 * @param {DataTypes} 
 * 작성자, 작성날짜, 타이틀, 내용
 */

module.exports = (Sequelize, DataTypes) => {
    return Sequelize.define("board", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        contents: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        writer: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('now()')
        }
    }, {
        timestamps: false,
        underscored: true
    });
}