import express from "express"
import validator from "validator"
import isEmpty from "lodash/isEmpty"

let router = express.Router()

function validateInput(data){
	let errors = {}

	if(validator.isEmpty(data.keyword)){
		errors.errorMsg = "There is no keyword."
	}

	return {
		errors,
		isValid : isEmpty(errors)
	}
}

router.post("/",(req, res) => {
		
	const { errors, isValid } = validateInput(req.body);

	if(!isValid){
		res.status(400).json(errors);
	}
})

export default router