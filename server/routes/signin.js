import express from "express"
import validator from "validator"

let router = express.Router()

function validateInput(data){
	let errors = {}
	let isValid = true;

	if(!validator.isEmail(data.email)){
		errors.email = "you have inputed a invalid email address."
		isValid = false;
	}

	return {errors, isValid}
}

router.post("/", (req,res)=>{

	const { errors, isValid } = validateInput(req.body)

	if(isValid){
		res.status(200).json({message: "you have successfully logged in"})
	}else{
		res.status(400).json(errors)
	}
})

export default router
