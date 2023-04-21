import { query, collection, getDoc, getDocs, where, addDoc, doc } from 'firebase/firestore';

import ApiService from './api';

import type { Nullable } from '~/typings/utils';

export interface Exercise {
  id: number;
  nameEn: string;
  nameZh: string;
  level: number;
  muscles: number[];
  modality: number;
  upperLowerCore: number;
  pushPull: number;
  joint: number;
  url: Nullable<string>;
  start: Nullable<number>;
  end: Nullable<number>;
}

export interface WorkoutPlan {
  id?: string;
  userId: string;
  name: string;
  exerciseIdList: number[];
}

export default class ExerciseService {
  static async queryExerciseList() {
    return (await ApiService.query('exercise')) as Exercise[];
  }

  static async addWorkoutPlan(workoutPlan: WorkoutPlan) {
    return await addDoc(collection(ApiService.db, 'workoutPlans'), workoutPlan);
  }

  static async queryWorkoutPlans(userId: string) {
    const snapshot = await getDocs(
      query(collection(ApiService.db, 'workoutPlans'), where('userId', '==', userId)),
    );

    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as WorkoutPlan[];
  }
}
