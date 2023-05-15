import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PlayIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';

import HCBottomSheet from '~/components/BottomSheet';
import { HCList, ListItemType } from '~/components/List';

import type { ExerciseSettingProps } from '.';

const ExerciseSetting: React.FC<ExerciseSettingProps> = ({
  show,
  onClose,
  onReview,
  onEdit,
  onDelete,
}: ExerciseSettingProps) => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'exercise.plan.detail.exercise-setting',
  });

  const actions: ListItemType[] = [
    {
      title: t('know'),
      img: <PlayIcon />,
      onClick: () => {
        onReview();
      },
    },
    {
      title: t('edit'),
      img: <PencilIcon />,
      onClick: () => {
        onEdit();
      },
    },
    {
      title: t('delete'),
      img: <TrashIcon />,
      category: 'warning',
      onClick: () => {
        onDelete();
      },
    },
  ];

  return (
    <HCBottomSheet show={show} title={t('title')} onClose={onClose}>
      <HCList data={actions} bleed />
    </HCBottomSheet>
  );
};

export default ExerciseSetting;
