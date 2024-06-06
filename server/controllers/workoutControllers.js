import { Workout } from "../models/Workout.js";
import mongoose from "mongoose";

export const getAllWorkouts = async (req, res) => {
    const user_id = req.user;
    try {
        const response = await Workout.find({ userId: user_id });
        // console.log(response);
        res.status(200).json({ data: response });
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

export const getSingleWorkout = async (req, res) => {
    const user_id = req.user;
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such Workout' });
    }

    try {
        const workout = await Workout.findOne({ _id: id, userId: user_id });

        if (!workout) {
            return res.status(404).json({ error: 'No such Workout' });
        }

        res.status(200).json({ data: workout });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


export const addWorkout = async (req, res) => {
    console.log(req.body);
    const user_id = req.user;
    try {
        const response = await Workout.create({ ...req.body, userId: user_id });
        res.status(201).json({ data: response });
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

export const updateWorkout = async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(404).json('No such Workout');
        }
        const response = await Workout.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true, runValidators: true })
        if (!response) {
            return res.status(404).json('No such Workout');
        }
        res.status(200).json({ data: response });
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

export const deleteWorkout = async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(404).json('No such Workout');
        }
        const response = await Workout.findByIdAndDelete(req.params.id);
        if (!response) {
            return res.status(404).json('No such Workout');
        }
        res.status(204).json({ data: {} })
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}