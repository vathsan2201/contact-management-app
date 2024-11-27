const {constants} = require("../constants.js")
const errorHandler = (err,req,res,next) => {
    const statusCode = res.statusCode ? res.statusCode : 500
    
    switch (statusCode) {
        case constants.validation_error:
            res.json({title: 'Validation Failed',message: err.message, stackTrace: err.stack})
            break;
        
        case constants.unauthorized:
            res.json({title: "Unauthorized", message: err.message, stackTrace:err.stack})    
            break

        case constants.forbidden:
            res.json({title: "Forbidden", message:err.message, stackTrace:err.stack})    
            break
        
        case constants.not_found:
            res.json({title: "Not Found", message:err.message, stackTrace: err.stack})    
            break

        case constants.server_error:
            res.json({title: "Server_Error", message:err.message, stackTrace: err.stack})
            
        default:
            break
    }
}

module.exports = errorHandler