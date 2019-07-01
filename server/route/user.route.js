//  用户
module.exports = function (app) {
    const user = require('../controller/user.controller');

    //  新增用户
    app.post('/user/add', user.create);

    //  根据用户名和密码查询用户
    app.post('/user/validate', user.validate);

    //  修改密码
    app.put('/user/update/:userId', user.updatePassWord);

    app.get('/user/test', (req, res) => {
        res.send(
            [{
                title: "TEST",
                description: "Hi there! How are you?"
            }]
        )
    })
};