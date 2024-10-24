import { Request, Response } from 'express';
import { StudentServices } from './student.services';

const createStudent = async (req: Request, res: Response) => {
    try {
        const { student: studentData } = req.body;
        const result = await StudentServices.createStudentToDb(studentData);
        res.status(200).json({
            success: true,
            message: 'Student is created successfully',
            data: result,
        });
    } catch (error) {
        console.log(error);
    }
};

const getAllStudent = async (req: Request, res: Response) => {
    try {
        const result = await StudentServices.getAllStudentFromDb();
        res.status(200).json({
            success: true,
            message: 'Students are retrieved successfully',
            data: result,
        });
    } catch (error) {
        console.log(error);
    }
}

const getSingleStudent = async (req: Request, res: Response) => {
    try {
        const { studentId } = req.params;
        const result = await StudentServices.getSingleStudentFromDb(studentId);
        res.status(200).json({
            success: true,
            message: 'Student is retrieved successfully',
            data: result,
        });
    } catch (error) {
        console.log(error);
    }

}

export const StudentController = {
    createStudent,
    getAllStudent,
    getSingleStudent
};
