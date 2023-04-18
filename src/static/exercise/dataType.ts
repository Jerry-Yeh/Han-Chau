import { LEVEL } from '../../enums/user';
import { JOINT, PART, MUSCLES, MODALITY, PULLPUSH } from '../../enums/exercise';

/**
 * chinese wording: joint[JOINT.MULTIPLE].zh
 *
 * english wording: joint[JOINT.MULTIPLE].en
 */
export const level = {
  [LEVEL.BEGINNER]: {
    en: 'Beginner',
    zh: '健身新手',
  },
  [LEVEL.INTERMEDIATE]: {
    en: 'Intermediate',
    zh: '健身中手',
  },
  [LEVEL.ADVANCED]: {
    en: 'Advanced',
    zh: '健身老手',
  },
};

export const muscles = {
  [MUSCLES.ABDOMINALS]: {
    en: 'Abdominals',
    zh: '腹部',
  },
  [MUSCLES.BACK]: {
    en: 'Back',
    zh: '背部',
  },
  [MUSCLES.BICEPS]: {
    en: 'Biceps',
    zh: '二頭肌',
  },
  [MUSCLES.CLAVES]: {
    en: 'Calves',
    zh: '小腿',
  },
  [MUSCLES.CHEST]: {
    en: 'Chest',
    zh: '胸部',
  },
  [MUSCLES.LEGS]: {
    en: 'Legs',
    zh: '大腿',
  },
  [MUSCLES.LOWERBACK]: {
    en: 'LowerBack',
    zh: '下背肌',
  },
  [MUSCLES.SHOULDERS]: {
    en: 'Shoulders',
    zh: '肩部',
  },
  [MUSCLES.TRICEPS]: {
    en: 'Triceps',
    zh: '三頭肌',
  },
  [MUSCLES.NECK]: {
    en: 'Neck',
    zh: '頸部',
  },
  [MUSCLES.FOREARMS]: {
    en: 'Forearms',
    zh: '前臂',
  },
  [MUSCLES.LOWERABS]: {
    en: 'Lower abs',
    zh: '下腹肌',
  },
  [MUSCLES.OBLIQUESABS]: {
    en: 'Obliques abs',
    zh: '斜腹肌',
  },
  [MUSCLES.TOTALABS]: {
    en: 'Total abs',
    zh: '全腹肌',
  },
  [MUSCLES.UPPERABS]: {
    en: 'Upper abs',
    zh: '上腹肌',
  },
  [MUSCLES.LATDORSI]: {
    en: 'Lat. Dorsi',
    zh: '背闊肌',
  },
  [MUSCLES.LATRHOMBOIDS]: {
    en: 'Lat. Rhomboids',
    zh: '菱形肌',
  },
  [MUSCLES.GASTROCNEMIUS]: {
    en: 'Gastrocnemius',
    zh: '腓腸肌',
  },
  [MUSCLES.SOLEUS]: {
    en: 'Soleus',
    zh: '比目魚肌',
  },
  [MUSCLES.PECTORALIS]: {
    en: 'Pectoralis',
    zh: '胸肌',
  },
  [MUSCLES.HAMSTRINGS]: {
    en: 'Hamstrings',
    zh: '腿後肌',
  },
  [MUSCLES.QUADRICEPS]: {
    en: 'Quadriceps',
    zh: '股四頭',
  },
  [MUSCLES.ERECTORSPINAE]: {
    en: 'Erector Spinae',
    zh: '豎脊肌群',
  },
  [MUSCLES.DELTS]: {
    en: 'Delts',
    zh: '後三角',
  },
  [MUSCLES.ROTATORCUFF]: {
    en: 'Rotator Cuff',
    zh: '肩旋轉肌群',
  },
  [MUSCLES.TRAPS]: {
    en: 'Traps',
    zh: '斜方肌',
  },
  [MUSCLES.GLUTES]: {
    en: 'Glutes',
    zh: '臀肌',
  },
  [MUSCLES.ADDUCTORS]: {
    en: 'Adductors',
    zh: '內收肌',
  },
  [MUSCLES.ABDUCTORS]: {
    en: 'Abductors',
    zh: '外展肌',
  },
  [MUSCLES.ARMS]: {
    en: 'Arms',
    zh: '手臂',
  },
};

export const modality = {
  [MODALITY.FREEWEIGHT]: {
    en: 'Free Weight',
    zh: '自由重量',
  },
  [MODALITY.CABLE]: {
    en: 'Cable',
    zh: '纜繩訓練',
  },
  [MODALITY.MACHINE]: {
    en: 'Machine',
    zh: '機械式器材',
  },
};

export const part = {
  [PART.UPPER]: {
    en: 'Upper',
    zh: '上半身',
  },
  [PART.LOWER]: {
    en: 'Lower',
    zh: '下半身',
  },
  [PART.CORE]: {
    en: 'Core',
    zh: '核心',
  },
};

export const pushPull = {
  [PULLPUSH.PUSH]: {
    en: 'push',
    zh: '推',
  },
  [PULLPUSH.PULL]: {
    en: 'pull',
    zh: '拉',
  },
  [PULLPUSH.STATIC]: {
    en: 'static',
    zh: '靜態',
  },
};

export const joint = {
  [JOINT.MULTIPLE]: {
    en: 'Multiple',
    zh: '多關節',
  },
  [JOINT.SINGLE]: {
    en: 'Single',
    zh: '單關節',
  },
};
