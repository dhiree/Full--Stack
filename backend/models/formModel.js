import mongoose from 'mongoose';

const formDataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: false
    },
}, { timestamps: true });

export default mongoose.model('FormData', formDataSchema);
