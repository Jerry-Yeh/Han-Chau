import dayjs from 'dayjs';

import { GENDER, AMOUNT } from '~/enums/user';
import { LEVEL, CHALLENGE, CHALLENGEWEIGHTED, CHALLENGERANGE } from '~/enums/exercise';

import type { User } from '~/pages/Onboarding/interface';
import type { Exercise } from '~/static/exercise/data';
import type { WorkoutPlanTemplateExercise } from './exercise';

const getAge = (birth: number): number => {
  return dayjs(Date.now()).diff(birth, 'year');
};

export const getBMR = (user: User): number | null => {
  if (user.weight && user.height && user.birth) {
    const age = getAge(user.birth);

    switch (user.gender) {
      case GENDER.MALE:
        return 88.362 + 13.397 * user.weight + 4.799 * user.height - 5.677 * age;
      case GENDER.FEMALE:
        return 447.593 + 9.247 * user.weight + 3.098 * user.height - 4.33 * age;
      default:
        return null;
    }
  } else {
    return null;
  }
};

export const getTDEE = (user: User): number | null => {
  const bmr = getBMR(user);
  const bmrMapping: { [key in AMOUNT]: number } = {
    [AMOUNT.BEDRIDDEN]: 1.2,
    [AMOUNT.SEDENTARY]: 1.3,
    [AMOUNT.LIGHT]: 1.375,
    [AMOUNT.MODERATE]: 1.55,
    [AMOUNT.HEAVY]: 1.725,
    [AMOUNT.ATHLETE]: 1.9,
  };

  if (bmr && user.amount) {
    return bmr * bmrMapping[user.amount];
  } else {
    return null;
  }
};

export const getPlanChallenge = (
  exerciseList: Array<Exercise & WorkoutPlanTemplateExercise>,
): CHALLENGE => {
  if (exerciseList.length === 0) return 0;

  let beginner = 0;
  let intermediate = 0;
  let advanced = 0;

  exerciseList.forEach((exercise) => {
    switch (exercise.level) {
      case LEVEL.BEGINNER:
        beginner++;
        break;
      case LEVEL.INTERMEDIATE:
        intermediate++;
        break;
      case LEVEL.ADVANCED:
        advanced++;
        break;
    }
  });

  const result =
    (beginner * CHALLENGEWEIGHTED.BEGINNER +
      intermediate * CHALLENGEWEIGHTED.INTERMEDIATE +
      advanced * CHALLENGEWEIGHTED.ADVANCED) /
    (CHALLENGEWEIGHTED.BEGINNER + CHALLENGEWEIGHTED.INTERMEDIATE + CHALLENGEWEIGHTED.ADVANCED);

  if (result < CHALLENGERANGE.ONE) {
    return CHALLENGE.EASY;
  } else if (CHALLENGERANGE.ONE <= result && result <= CHALLENGERANGE.TWO) {
    return CHALLENGE.MEDIUM;
  } else {
    return CHALLENGE.HARD;
  }
};
