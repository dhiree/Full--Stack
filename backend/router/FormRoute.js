import express from 'express';
import formController from '../controller/formController.js'

const router = express.Router();

router.post('/', formController.submitForm);

export default router;
