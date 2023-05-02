import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, getDocs } from 'firebase/firestore';
import { getFunctions } from 'firebase/functions';
export default class ApiService {
  static firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
    measurementId: import.meta.env.VITE_MEASUREMENTID,
  };
  static app = initializeApp(this.firebaseConfig);
  static db = getFirestore(this.app);
  static functions = getFunctions(this.app);

  static lang(): string {
    switch (navigator.language) {
      case 'zh-TW':
        return 'zh';
      case 'en-US':
        return 'en';
      default:
        return 'zh';
    }
  }

  static async query(collectionName: string) {
    const querySnapshot = await getDocs(query(collection(this.db, collectionName)));

    return querySnapshot.docs.map((doc) => doc.data());
  }
}
