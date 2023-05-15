import {
  query,
  collection,
  getDocs,
  where,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  getDoc,
} from 'firebase/firestore';

import ApiService from './api';
import { UPPERLOWERCORE, MODALITY, MUSCLES, MUSCLEGROUP } from '~/enums/exercise';
import { upperLowerCore, modality, muscles } from '~/static/exercise/dataType';
import { store } from '~/store';
import { getLanguage } from '~/store/features/language';
import { exerciseList, Exercise } from '~/static/exercise/data';
import { getPlanChallenge } from '~/services/formula';

import type { WorkoutPlan } from '~/pages/Exercise/interface';
import Api from './axios';

export interface PlanExerciseData {
  id: number;
  exerciseId: number;
  sets: number;
  reps: number;
}

export interface WorkoutPlanData {
  id?: string;
  userId: string;
  name: string;
  exerciseList: PlanExerciseData[];
}

export type CompleteExerciseData = PlanExerciseData & Omit<Exercise, 'id'>;

export default class ExerciseService {
  // static async queryExerciseList() {
  //   return (await ApiService.query('exercise')) as Exercise[];
  // }

  static async addPlan(workoutPlan: WorkoutPlanData): Promise<string> {
    return await addDoc(collection(ApiService.db, 'workoutPlans'), workoutPlan).then((response) => {
      return response.id;
    });
  }

  static async queryPlanList(userId: string): Promise<WorkoutPlanData[]> {
    const snapshot = await getDocs(
      query(collection(ApiService.db, 'workoutPlans'), where('userId', '==', userId)),
    );

    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as WorkoutPlanData[];
  }

  static async queryPlan(planId: string): Promise<WorkoutPlanData> {
    const snapshot = await getDoc(doc(ApiService.db, 'workoutPlans', planId));

    return { id: planId, ...snapshot.data() } as WorkoutPlanData;
  }

  static async deletePlan(planId: string) {
    return await deleteDoc(doc(ApiService.db, 'workoutPlans', planId));
  }

  static async updatePlanName(planId: string, planName: string) {
    return await updateDoc(doc(ApiService.db, 'workoutPlans', planId), { name: planName });
  }

  static async addExerciseToPlan(planId: string, exerciseList: PlanExerciseData[]) {
    return await updateDoc(doc(ApiService.db, 'workoutPlans', planId), {
      exerciseList,
    });
  }

  static async editExerciseInPlan(planId: string, exerciseList: PlanExerciseData[]) {
    // Firestore can not edit specific data in an array.
    return await updateDoc(doc(ApiService.db, 'workoutPlans', planId), {
      exerciseList,
    });
  }

  static async deleteExerciseInPlan(planId: string, exerciseList: PlanExerciseData[]) {
    // Firestore can not delete data of an array by index.
    return await updateDoc(doc(ApiService.db, 'workoutPlans', planId), {
      exerciseList,
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

  static transExerciseFromRawData(data: PlanExerciseData): CompleteExerciseData {
    const exerciseData = exerciseList.find(
      (exerciseData) => exerciseData.id === data.exerciseId,
    ) as Exercise;

    return { ...exerciseData, ...data };
  }

  static calculatePlan(exerciseList: CompleteExerciseData[]) {
    return {
      challenge: getPlanChallenge(exerciseList),
      upperLowerCoreList: exerciseList.reduce((acc: UPPERLOWERCORE[], cur) => {
        if (!acc.includes(cur.upperLowerCore)) {
          acc.push(cur.upperLowerCore);
        }
        return acc;
      }, []),
      modalityList: exerciseList.reduce((acc: MODALITY[], cur) => {
        if (!acc.includes(cur.modality)) {
          acc.push(cur.modality);
        }
        return acc;
      }, []),
    };
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
      exerciseList: data.exerciseList.map((exercise) => this.transExerciseFromRawData(exercise)),
    };

    return {
      id: id as string,
      ...rest,
      ...this.calculatePlan(rest.exerciseList),
    };
  }

  static transExerciseToRawData(exercise: CompleteExerciseData): PlanExerciseData {
    const { id, exerciseId, sets, reps } = exercise;

    return { id, exerciseId, sets, reps };
  }

  static transPlanToRawData(data: WorkoutPlan): WorkoutPlanData {
    // To improve the clarity of database data.
    const { id, userId, name, exerciseList } = data;

    return {
      id,
      userId,
      name,
      exerciseList: exerciseList.map((item) => this.transExerciseToRawData(item)),
    };
  }

  static getExerciseImageUrl(imageName: string): string {
    return `https://storage.cloud.google.com/${
      import.meta.env.VITE_STORAGE_BUCKET
    }/exercise/${imageName}`;
  }
}
