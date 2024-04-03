const {CustomAPIError} = require('../error/custom-error')

const errorHandlerMiddleware = (err, req, res, next) => {
    if(err instanceof CustomAPIError){
        return res.status(err.statusCode).json({msg: err.message})
    }
    res.status(500).json({msg: 'Something went wrong please try again!'})
}

module.exports = errorHandlerMiddleware