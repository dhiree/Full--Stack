import sgMail from '@sendgrid/mail';
import FormData from '../models/formModel.js';
let api = "your-api-key "
sgMail.setApiKey(api);

const submitForm = async (req, res) => {
    const { name, email } = req.body;

    try {
        const newFormData = new FormData({ name, email });
        await newFormData.save();

        const msg = {
            to: email,
            from: 'your-email',
            subject: 'Form Submission Confirmation',
            text: `Hi ${name}, thank you for submitting the form.`,
            html: '<h1>Thank you for your submission!</h1>',
        };

        await sgMail.send(msg);
        res.status(200).json({ message: 'Form submitted and email sent' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Error sending email', error });
    }
};

export default { submitForm };
