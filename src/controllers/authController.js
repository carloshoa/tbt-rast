import { Router } from 'express';
import * as yup from 'yup';

const router = Router();

router.post('/register', async (req, res, next) => {
  try {
    console.log(req.body);

    const schema = yup.object().shape({
      name: yup.string().required('Required Field').min(3, ' Minimum of 3 characters').max(100, 'Maximum of 100 characters'),
      email: yup.string().required('Required Field').email('Must have a email format'),
      password: yup.string().required('Required Field').min(6, 'Minimum of 6 characters').max(150, 'Maximum of 150 characters'),
    });

    await schema.validate(req.body, { abortEarly: false });

    res.status(201).json(req.body);
  } catch (error) {
    next(error);
  }
});

router.post('/login', (req, res, next) => {
  try {
    console.log(req.body);

    res.status(200).json(req.body);
  } catch (error) {
    next(error);
  }
});

export default router;
