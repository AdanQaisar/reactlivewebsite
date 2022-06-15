import mongoose from 'mongoose';

const myappStructure = mongoose.Schema(
    {
        studentName: String,
        email: String,
    }
);


const myappModel = new mongoose.model('myapp', myappStructure);

export default myappModel; 
