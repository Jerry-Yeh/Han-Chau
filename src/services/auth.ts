import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithRedirect,
  getRedirectResult,
} from 'firebase/auth';
import { setDoc, doc, getDoc } from 'firebase/firestore';

import ApiService from './api';
// import { parseJwt } from './utilities';
import { LOGIN } from '~/enums/user';

import type { User } from '~/pages/Onboarding/interface';

export default class AuthService {
  static auth = getAuth();

  static setSignInType = (type: number) => {
    localStorage.setItem('signInType', type.toString());
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
      () => {
        // this.getFirebaseUser(response);
      },
    );
  };

  /** Redirect
   *
   * Get redirect results by firebase built-in providers.
   */

  static redirectResult = async () => {
    const result = await getRedirectResult(this.auth);

    return result;
  };

  /** User */
  // static getFirebaseUser = (accessTokenRes: any) => {
  //   const data = parseJwt(accessTokenRes.id_token);
  //   const uid = data.sub;
  //   const userRecord = await auth.getUser(uid);
  // };

  static saveUser = async (user: User) => {
    await setDoc(doc(ApiService.db, 'users', user.id as string), user);
  };

  static async queryUser(userId: string): Promise<User> {
    const snapshot = await getDoc(doc(ApiService.db, 'users', userId));

    return snapshot.data() as User;
  }
}
