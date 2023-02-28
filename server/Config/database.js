

const mongoose = require('mongoose')


module.exports = {
    connectToDb: () => {
        mongoose.connect(`${process.env.mongoURL}/Employeedesk`)
            .then(() => {
                console.log("Connected to db");
                
            })
            .catch((error) => {
                console.log(error);
                

            })
    }
}