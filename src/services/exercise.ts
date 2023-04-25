import {
  query,
  collection,
  getDoc,
  getDocs,
  where,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
} from 'firebase/firestore';

import ApiService from './api';
import { UPPERLOWERCORE } from '~/enums/exercise';
import { upperLowerCore } from '~/static/exercise/dataType';
import { store } from '~/store';
import { getLanguage } from '~/store/features/language';

import type { Exercise } from '~/static/exercise/data';

export interface PlanExerciseData {
  id: number;
  sets: number;
  reps: number;
}

export interface WorkoutPlanData {
  id?: string;
  userId: string;
  name: string;
  exerciseList: PlanExerciseData[];
}

export default class ExerciseService {
  static async queryExerciseList() {
    return (await ApiService.query('exercise')) as Exercise[];
  }

  static async addWorkoutPlan(workoutPlan: WorkoutPlanData) {
    return await addDoc(collection(ApiService.db, 'workoutPlans'), workoutPlan);
  }

  static async queryWorkoutPlans(userId: string) {
    const snapshot = await getDocs(
      query(collection(ApiService.db, 'workoutPlans'), where('userId', '==', userId)),
    );

    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as WorkoutPlanData[];
  }

  static async deleteWorkoutPlan(planId: string) {
    return await deleteDoc(doc(ApiService.db, 'workoutPlans', planId));
  }

  static async updateWorkoutPlanName(planId: string, planName: string) {
    return await updateDoc(doc(ApiService.db, 'workoutPlans', planId), { name: planName });
  }

  static getPlanUpperLowerCore(upperLowerCoreList: UPPERLOWERCORE[]) {
    const state = store.getState();
    const language = getLanguage(state);

    return upperLowerCoreList.map((id) => upperLowerCore[id][language]).join('/');
  }
}
