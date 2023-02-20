import firebase from 'firebase/compat/app';
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithRedirect,
  onAuthStateChanged,
  getRedirectResult,
  signInWithCustomToken,
} from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, setDoc, doc } from 'firebase/firestore';
import { getFunctions, httpsCallable } from 'firebase/functions';

import { parseJwt } from './utiles';
import { LOGIN } from '~/enums/user';

import type { User } from '~/pages/Onboarding/interface';

export default class Auth {
  /** Firebase initialize */
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
  static auth = getAuth();
  static functions = getFunctions(this.app);

  static setSignInType = (type: string) => {
    localStorage.setItem('signInType', type);
  };

  /** Google */
  static signInWithGoogle = async () => {
    const googleAuthProvider = new GoogleAuthProvider();
    googleAuthProvider.setCustomParameters({ prmopt: 'select_account' });
    this.setSignInType(LOGIN.GOOGLE);
    signInWithRedirect(this.auth, googleAuthProvider);
  };

  /** Facebook */
  static signInWithFacebook = () => {
    const facebookAuthProvider = new FacebookAuthProvider();
    facebookAuthProvider.setCustomParameters({ prompt: 'select_account' });
    this.setSignInType(LOGIN.FACEBOOK);
    signInWithRedirect(this.auth, facebookAuthProvider);
  };

  /** LINE */
  static lineAuth = () => {
    this.setSignInType(LOGIN.LINE);
    const channelId = '1657766885';
    const redirectUri = 'http://localhost:3000/';
    let url = 'https://access.line.me/oauth2/v2.1/authorize?';
    url += 'response_type=code';
    url += `&client_id=${channelId}`;
    url += `&redirect_uri=${redirectUri}`;
    url += `&state=login`;
    url += '&scope=openid%20profile';
    window.location.href = url;
  };

  static lineAccessToken = () => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');

    // onCall
    // const getLineAccessToken = httpsCallable(functions, 'getLineAccessTokenOnCall');
    // getLineAccessToken({ code }).then((result) => {
    //   console.log('result', result);
    // });

    // onRequest
    fetch(`http://127.0.0.1:5001/fitness-78b04/us-central1/getLineAccessToken?code=${code}`).then(
      (response) => {
        console.log('response', response);
        this.getFirebaseUser(response);
      },
    );
  };

  /** Redirect
   *
   * Get redirect results by firebase built-in providers.
   */

  static redirectResult = async () => {
    // if (result) {
    // const user = result.user;
    // const userRef = await addDoc(collection(db, 'users'), {});
    // }
    const result = await getRedirectResult(this.auth);

    return result;
  };

  /** User */
  static getFirebaseUser = (accessTokenRes: any) => {
    const data = parseJwt(accessTokenRes.id_token);
    // const uid = data.sub;
    // const userRecord = await auth.getUser(uid);
  };

  static saveUser = async (user: User) => {
    await setDoc(doc(this.db, 'users', user.id as string), user);
  };
}
