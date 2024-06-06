import { Router } from "express";
import {
    getAllWorkouts,
    getSingleWorkout,
    addWorkout,
    updateWorkout,
    deleteWorkout
} from "../controllers/workoutControllers.js";
import { requireAuth } from "../middleware/requireAuth.js";

const router = Router();

router.use(requireAuth);

router.get('/workouts', getAllWorkouts)

router.get('/workouts/:id', getSingleWorkout)

router.post('/workouts', addWorkout)

router.patch('/workouts/:id', updateWorkout)

router.delete('/workouts/:id', deleteWorkout)

export default router;