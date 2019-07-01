const env = require('./env.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
    host: env.host, //数据库地址
    dialect: env.dialect, //制定数据库类型
    // operatorsAliases: false,
    insecureAuth: true,
    pool: {
        max: env.max, // 连接池中最大连接数量
        min: env.pool.min, // 连接池中最小连接数量
        acquire: env.pool.acquire,
        idle: env.pool.idle // 如果一个线程 10 秒钟内没有被使用过的话，那么就释放线程
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// 引入表模型
db.user = require('../model/user.model')(sequelize, Sequelize);
db.file = require('../model/file.model')(sequelize, Sequelize);

module.exports = db;