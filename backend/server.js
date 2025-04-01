import express from 'express';
import cors from 'cors';
import employeeRoutes from './routes/employeeRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/employees', employeeRoutes);

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
