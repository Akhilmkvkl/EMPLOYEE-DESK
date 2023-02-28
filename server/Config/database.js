

const mongoose = require('mongoose')


module.exports = {
    connectToDb: () => {
        mongoose.connect('mongodb://localhost:27017/Employeedesk')
            .then(() => {
                console.log("Connected to db");
                
            })
            .catch((error) => {
                console.log(error);
                

            })
    }
}