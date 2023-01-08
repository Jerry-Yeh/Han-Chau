import React, { useEffect, useState, useRef } from 'react';

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

  return (
    <div>
      {/* <h1 className='text-2xl'>test</h1>
      <button className='text-heading-xl' onClick={signInWithGoogle}>
        Sign in with Google
      </button>
      <button onClick={signInWithFacebook}>Sign in with Facebook</button>
      <button onClick={lineAuth}>Sign in with LINE</button>
      <button onClick={lineAccessToken}>Test</button> */}
    </div>
  );
};

export default Login;
