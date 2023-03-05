import { query, collection, getDoc, getDocs, where } from 'firebase/firestore';

import ApiService from './api';

export interface ExerciseItem {
  name: string;
}

export default class ExerciseService {
  static async queryExerciseList() {
    return await ApiService.query('exercise');
  }

  static async queryExerciseNameList() {
    return await ApiService.query(`exercise_${ApiService.lang()}`);
  }

  // static async queryWorkExerciseTranslationList(lang: string) {
  //   const querySnapshot = await getDocs(collection(db, `exercise_${lang}`));
  //   return querySnapshot.docs.map((doc) => doc.data());
  // }
}
