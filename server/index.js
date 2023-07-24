const reqs = require('./config/requires');
const fs = require("fs");
const path = require("path");
const start = async () => {
    try {
        fs.access(path.resolve(__dirname, process.env.UPLOAD_DIR), (e) => {
            if (e){
                fs.mkdir(path.join(__dirname, process.env.UPLOAD_DIR), (e) => {})
            }
        })
        await reqs.sequelize.authenticate();
        await reqs.sequelize.sync();
        reqs.app.listen(process.env.PORT, () => console.log(`Server started on ${process.env.HOST}:${process.env.PORT}`))
    } catch (e) {
        console.log(e)
    }
}
start();