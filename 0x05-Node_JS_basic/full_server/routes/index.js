import { Router } from 'express';
import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

const baseRoutes = Router();
const studentRoutes = Router();


baseRoutes.get('', AppController.getHomePage);

studentRoutes.get('/', StudentsController.getAllStudents);
studentRoutes.get('/:major', StudentsController.getAllStudentsByMajor);

export default  { baseRoutes, studentRoutes };
