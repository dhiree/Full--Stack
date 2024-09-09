import nodemailer from 'nodemailer';
import FormData from '../models/formModel.js';

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'dereck.kassulke16@ethereal.email',
        pass: 'FC7umjypbKX8WDz8n4'
    }
});

const submitForm = async (req, res) => {
    const { name, email } = req.body;

    try {
        const newFormData = new FormData({ name, email });
        await newFormData.save();

        const mailOptions = {
            from: 'bhandaridheere@gmail.com',
            to: email,
            subject: 'Form Submission Confirmation',
            text: `Hi ${name}, thank you for submitting the form.`,
            html: '<h1>Thank you for your submission!</h1>',
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Form submitted and email sent' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Error sending email', error });
    }
};

export default { submitForm };
