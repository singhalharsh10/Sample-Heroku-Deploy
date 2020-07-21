const Sequelize = require('sequelize')
const { STRING, BOOLEAN } = require('sequelize')
const { all } = require('sequelize/types/lib/operators')

const db = new Sequelize({
    dialect: 'sqlite',
    storage: __dirname + '/test.db'
})


const Tasks = db.defin('task', {
    id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false

    },
    name: {
        type: Sequelize.DataTypes.STRING(35),
        allowNull: false
    },
    done: {
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: false

    }

})


module.exports = {
    db,
    Tasks
}