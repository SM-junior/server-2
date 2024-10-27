import { Schema, model } from 'mongoose';
import {
    Guardian,
    LocalGuardian,
    Student,
    UserName,
} from './student.interface';

const userNameSchema = new Schema<UserName>({
    firstName: {
        type: String,
        Required: [true, 'First Name is required'],
        trim: true
    },
    lastName: {
        type: String,
        required: [true, 'Last Name is required'],
        trim: true
    },
    middleName: {
        type: String,
        trim: true
    },
});

const guardianSchema = new Schema<Guardian>({
    fatherName: {
        type: String,
        required: true,
        trim: true
    },
    fatherOccupation: {
        type: String,
        required: true,
        trim: true
    },
    fatherContactNo: {
        type: String,
        required: true,
        trim: true
    },
    motherName: {
        type: String,
        required: true,
        trim: true
    },
    motherOccupation: {
        type: String,
        required: true,
        trim: true
    },
    motherContactNo: {
        type: String,
        required: true,
        trim: true
    },
});

const localGuardianSchema = new Schema<LocalGuardian>({
    name: {
        type: String,
        required: true,
        trim: true
    },
    occupation: {
        type: String,
        required: true,
        trim: true
    },
    contact: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
});

const studentSchema = new Schema<Student>({
    id: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    name: {
        type: userNameSchema,
        required: [true, 'Name is required']
    },
    gender: {
        type: String,
        trim: true,
        required: [true, 'Gender is required'],
        enum: {
            values: ['male', 'female', 'other'],
            message: '{VALUE} is not supported'
        }
    },
    dateOfBirth: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        trim: true,
        unique: true
    },
    contactNo: {
        type: String,
        required: [true, 'Contact no is required'],
        trim: true,
    },
    emergencyContactNo: {
        type: String,
        required: true,
        trim: true,
    },
    bloodGroup: {
        type: String,
        trim: true,
        required: true,
        enum: {
            values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
            message: '{VALUE} is not supported'
        }
    },
    presentAddress: {
        type: String,
        required: true,
    },
    permanentAddress: {
        type: String,
        required: true,
    },
    guardian: {
        type: guardianSchema,
        required: true
    },
    localGuardian: {
        type: localGuardianSchema
    },
    profileImage: {
        type: String,
    },
    isActive: {
        type: String,
        trim: true,
        enum: {
            values: ['active', 'blocked'],
        },
        default: 'active'
    },
});

export const StudentModel = model<Student>('Student', studentSchema);


