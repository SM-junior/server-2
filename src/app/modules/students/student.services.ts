import { TStudent } from './student.interface';
import { Student } from './student.model';

const createStudentToDb = async (studentData: TStudent) => {
    //aita build in static method ar belay lagbe
    // const result = await Student.create(student);
    //return result;

    //............custom instance ar belay aita lagbe.............
    // const student = new Student(studentData);
    // if (await student.isUserExists(studentData.id)) {
    //     throw new Error('User is already exists')
    // }
    // const result = await student.save();
    //return result;

    //.............custom static method ar belay aita lagbe.........
    if (await Student.isUserExists(studentData.id)) {
        throw new Error("User is already exists")
    }
    const result = await Student.create(studentData)
    return result;
};

const getAllStudentFromDb = async () => {
    const result = await Student.find();
    return result
}

const getSingleStudentFromDb = async (id: string) => {
    const result = await Student.findOne({ id });
    return result
}

export const StudentServices = {
    createStudentToDb,
    getAllStudentFromDb,
    getSingleStudentFromDb
};
