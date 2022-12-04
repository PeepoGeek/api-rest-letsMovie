import express from "express";
import { body } from 'express-validator';

import { login, register } from "../controllers/auth.controller"
import { validationResultsCheck } from "../middlewares/validationResults";

const router = express.Router()

router.post('/login', [body('email', "Wrong mail format").trim().normalizeEmail().isEmail(),
body('password', "Wrong password format").trim().isLength({ min: 8 }).isAlphanumeric()

], login)

router.post('/register', [body('email', "Wrong mail format").trim().normalizeEmail().isEmail(),
body('password', "Wrong password format").trim().isLength({ min: 8 }).isAlphanumeric()

], validationResultsCheck, register)
export default router;