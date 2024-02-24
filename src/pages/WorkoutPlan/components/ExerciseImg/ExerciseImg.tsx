import React, { SyntheticEvent } from 'react';

import ExerciseService from '~/services/exercise';

import type { ExerciseImgProps } from '.';

import LogoMark from '~/assets/img/logo-mark.svg';

const ExerciseImg: React.FC<ExerciseImgProps> = (props: ExerciseImgProps) => {
  const handleImageError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = LogoMark;
  };

  return (
    <img
      src={ExerciseService.getExerciseImageUrl(`${props.id}.png`)}
      onError={handleImageError}
      alt='img'
    />
  );
};

export default ExerciseImg;
