import { Schema, model } from 'mongoose';
import {
    // StudentMethods,
    StudentModel,
    TGuardian,
    TLocalGuardian,
    TStudent,
    TUserName,
} from './student.interface';
import config from '../../config';
import bcrypt from 'bcrypt';

const userNameSchema = new Schema<TUserName>({
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

const guardianSchema = new Schema<TGuardian>({
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

const localGuardianSchema = new Schema<TLocalGuardian>({
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

//inbuilt static method ar belay aita hobe
// const studentSchema = new Schema<TStudent>({

//custom instance method ar belay aita hobe
// const studentSchema = new Schema<TStudent, StudentModel, StudentMethods>({

//custom static method ar belay aita hohbe
// const studentSchema = new Schema<TStudent, StudentModel>({

const studentSchema = new Schema<TStudent, StudentModel>({
    id: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
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

//....middleware ke sobar upore declear korte hobei hobe
//...........mongoose middleware/hooks...............shudhu atotukui
studentSchema.pre('save', async function (next) {
    const user = this;
    user.password = await bcrypt.hash(user.password, Number(config.bcrypt_salt_round))
    next();
})

//ai modelta shudhu inbuilt static method ar belay lagbe
// export const Student = model<TStudent>('Student', studentSchema);


//...................custom instance methods...................................
// ar ai modelta shudu custom intance ar belay lagbe
// studentSchema.methods.isUserExists = async function (id: string) {
//     const existingUser = await Student.findOne({ id });
//     return existingUser;
// }
// export const Student = model<TStudent, StudentModel>('Student', studentSchema);

//...................custom static methods.....................................
studentSchema.statics.isUserExists = async function (id: string) {
    const existingUser = await Student.findOne({ id });
    return existingUser;
}
export const Student = model<TStudent, StudentModel>('Student', studentSchema);





