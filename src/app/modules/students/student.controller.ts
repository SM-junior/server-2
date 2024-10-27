import { Request, Response } from 'express';
import { StudentServices } from './student.services';
import { studentValidationSchema } from './student.validation';

const createStudent = async (req: Request, res: Response) => {
    try {
        const { student: studentData } = req.body;
        //zod validation
        const zodValidationData = studentValidationSchema.parse(studentData);

        //studentData-->coming from client side,
        //studentValidationSchema-->it comparing studentData with itself that is coming from client side,
        //zodValidationData-->this is zod validated ready data

        const result = await StudentServices.createStudentToDb(zodValidationData);
        res.status(200).json({
            success: true,
            message: 'Student is created successfully',
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            err: error
        })
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
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            err: error
        })
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
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            err: error
        })
    }

}

export const StudentController = {
    createStudent,
    getAllStudent,
    getSingleStudent
};
