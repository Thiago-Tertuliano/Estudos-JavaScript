import express from 'express';
import { StudentController } from './controllers/StudentController';
import { CourseController } from './controllers/CourseController';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const studentController = new StudentController();
const courseController = new CourseController();

app.use('/students', studentController.router);
app.use('/courses', courseController.router);

app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.listen(PORT, () => console.log(`School Management API running on port ${PORT}`));

export default app;
