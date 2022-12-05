const ApiError = require('../error/apiError')

class UserController {

    registration = async (req, res) => {

    }

    login = async (req, res) => {
        
    }

    check = async (req, res, next) => {
        const {id} = req.query
        if(!id) {
            return next(ApiError.badRequest('Не указан ID'))
        }
        res.json(id)
    }

}


module.exports = new UserController()