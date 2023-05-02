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
  arrayUnion,
} from 'firebase/firestore';

import ApiService from './api';
import { UPPERLOWERCORE, MODALITY, MUSCLES, MUSCLEGROUP } from '~/enums/exercise';
import { upperLowerCore, modality, muscles } from '~/static/exercise/dataType';
import { store } from '~/store';
import { getLanguage } from '~/store/features/language';
import { exerciseList, Exercise } from '~/static/exercise/data';
import { getPlanChallenge } from '~/services/formula';

import type { WorkoutPlan } from '~/pages/Exercise/interface';
import { theme } from 'antd';

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

  static async addExerciseToPlan(planId: string, exercise: PlanExerciseData) {
    return await updateDoc(doc(ApiService.db, 'workoutPlans', planId), {
      exerciseList: arrayUnion(exercise),
    });
  }

  static getPlanUpperLowerCoreText(upperLowerCoreList: UPPERLOWERCORE[]) {
    const state = store.getState();
    const language = getLanguage(state);

    return upperLowerCoreList.map((id) => upperLowerCore[id][language]).join('/');
  }

  static getPlanModalityText(modalityList: MODALITY[]) {
    const state = store.getState();
    const language = getLanguage(state);

    return modalityList.map((id) => modality[id][language]).join('/');
  }

  static getExerciseMusclesText(muscleList: Array<MUSCLES | MUSCLEGROUP>) {
    const state = store.getState();
    const language = getLanguage(state);

    return muscleList.map((id) => muscles[id][language]).join('、');
  }

  static transExerciseFromRawData(data: PlanExerciseData): PlanExerciseData & Exercise {
    const exerciseData = exerciseList.find(
      (exerciseData) => exerciseData.id === data.id,
    ) as Exercise;

    return { ...data, ...exerciseData };
  }

  static transPlanFromRawData(data: WorkoutPlanData): WorkoutPlan {
    /**
     * Translating database data types to match UI requirements.
     *
     * result: Get raw data from the exercises.
     * return: Calculate other data of the plan.
     */
    const { id, ...rest } = {
      ...data,
      exerciseList: data.exerciseList.map((exercise) => {
        return this.transExerciseFromRawData(exercise);
      }),
    };

    return {
      id: id as string,
      ...rest,
      challenge: getPlanChallenge(rest.exerciseList),
      upperLowerCoreList: rest.exerciseList.reduce((acc: UPPERLOWERCORE[], cur) => {
        if (!acc.includes(cur.upperLowerCore)) {
          acc.push(cur.upperLowerCore);
        }
        return acc;
      }, []),
      modalityList: rest.exerciseList.reduce((acc: MODALITY[], cur) => {
        if (!acc.includes(cur.modality)) {
          acc.push(cur.modality);
        }
        return acc;
      }, []),
    };
  }

  static transPlanToRawData(data: WorkoutPlan): WorkoutPlanData {
    // To improve the clarity of database data.
    const { id, userId, name, exerciseList, ...planRest } = data;

    return {
      id,
      userId,
      name,
      exerciseList: exerciseList.map(({ id, sets, reps, ...rest }) => ({ id, sets, reps })),
    };
  }

  static getExerciseImageUrl(imageName: string): string {
    return `https://storage.cloud.google.com/${
      import.meta.env.VITE_STORAGE_BUCKET
    }/exercise/${imageName}`;
  }
}
