const { DataTypes } = require('sequelize')
const sequelize = require("../../config/db"),
    UserModel = require('../user')

const Todo = sequelize.define('Todo', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    nom: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    status: {
        type: DataTypes.ENUM('publish', 'updated', 'finish'),
        allowNull: false,
        defaultValue: 'publish'
    },

    isEnabled: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: UserModel,
            key: 'id'
        }
    }
}, {timestamps: true})

Todo.belongsTo(UserModel, {
    foreignKey: 'userId',
    as: 'todo_belongsTo_user',
    // The possible choices are RESTRICT, CASCADE, NO ACTION, SET DEFAULT and SET NULL
    // onDelete: "RESTRICT",  Default is SET NULL
    // onUpdate: "RESTRICT",     Default is CASCADE
})
UserModel.hasMany(Todo, {
    foreignKey: 'userId',
    as: 'user_has_one_todo'
})
//Product.sync({ force: true })
// update User table if exist without delete
// await Product.sync({ alter: true });
// drop and create User table
// await Product.sync({ force: true });
// create User table if not exist
module.exports = Todo
