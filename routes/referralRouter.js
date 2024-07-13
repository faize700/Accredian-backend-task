// referralRouter.js

const express = require('express');
const { PrismaClient } = require('@prisma/client');
const { body, validationResult } = require('express-validator');

const prisma = new PrismaClient();
const router = express.Router();

router.post('/referral', [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Email is invalid'),
    body('referredName').notEmpty().withMessage('Referred name is required'),
    body('referredEmail').isEmail().withMessage('Referred email is invalid'),
    body('course').notEmpty().withMessage('Course is required')
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, referredName, referredEmail, course } = req.body;

    console.log("Referral Data Comming from frontend for Posting:- ", req.body);

    try {
        const newReferral = await prisma.referral.create({
            data: {
                name,
                email,
                referredName,
                referredEmail,
                course
            }
        });
        res.status(201).json(newReferral);
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            // Handle known Prisma errors
            res.status(400).json({ error: 'Prisma client error: ' + error.message });
        } else {
            // Handle other errors
            console.error('Error creating referral:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
});

router.get('/referrals', async (req, res) => {
    try {
        const referrals = await prisma.referral.findMany();
        res.status(200).json(referrals);
    } catch (error) {
        console.error('Error fetching referrals:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
