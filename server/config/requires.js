require('dotenv').config()

const
    sequelize =     require('./../database/connection'),
    fileUpload =    require('express-fileupload'),
    express =       require('express'),
    app =           express(),
    path =          require('path'),
    jwt =           require('jsonwebtoken'),
    bcrypt =        require('bcrypt'),
    cors =          require('cors'),
    ws =            require('ws'),
    fs =            require('fs');

app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, process.env.UPLOAD_DIR)))
app.use(fileUpload({}))
// app.use('/api', router);
module.exports = {
    sequelize   : sequelize,
    app         : app,
    express     : express,
    path        : path,
    jwt         : jwt,
    bcrypt      : bcrypt,
    ws          : ws,
    fs          : fs
}


