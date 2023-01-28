import React, { useEffect, useState, useRef } from 'react';
import { BeakerIcon } from '@heroicons/react/24/outline';

// import {
//   signInWithGoogle,
//   signInWithFacebook,
//   lineAuth,
//   redirectResult,
//   SIGNINTYPE,
//   lineAccessToken,
// } from '~/services/authentication';

interface Props {
  children?: React.ReactNode;
}

const Login: React.FC<Props> = () => {
  // useEffect(() => {
  //   const controller = new AbortController();

  //   const afterRedirect = async () => {
  //     console.log('afterRedirect');
  //     const signInType = localStorage.getItem('signInType');

  //     switch (signInType) {
  //       case SIGNINTYPE.GOOGLE:
  //       case SIGNINTYPE.FACEBOOK:
  //         redirectResult();
  //         break;
  //       case SIGNINTYPE.LINE:
  //         getTokenWithLine();
  //         break;
  //       default:
  //         break;
  //     }
  //   };

  //   afterRedirect();

  //   return () => {
  //     controller.abort();
  //   };
  // }, []);

  return <div></div>;
};

export default Login;
