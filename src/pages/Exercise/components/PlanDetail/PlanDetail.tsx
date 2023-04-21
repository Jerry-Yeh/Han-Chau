import React, { useState, Dispatch, SetStateAction, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';

import HCHeader from '~/components/Header';
import HCHeaderIconButton from '~/components/Header/HeaderIconButton';
import HCButton from '~/components/Button';
import HCBottomSheet from '~/components/BottomSheet';
import { HCList, HCListItem, ListItemType } from '~/components/List';
import HCInput from '~/components/Input';
import ExerciseService, { WorkoutPlan } from '~/services/exercise';

import ArrowLeft from '~/assets/img/heroicons/mini/arrow-left';
import EllipsisVertical from '~/assets/img/heroicons/mini/ellipsis-vertical';
import Logomark from '~/assets/img/logomark.svg';

interface Props {
  children?: React.ReactNode;
  show: boolean;
  plan: WorkoutPlan;
  setPlan: Dispatch<SetStateAction<WorkoutPlan>>;
  onClose: () => void;
}

const PlanDetail: React.FC<Props> = (props: Props) => {
  const { t } = useTranslation('translation', { keyPrefix: 'exercise.detail' });

  /** Edit */
  const [showEditPlan, setShowEditPlan] = useState(false);
  const [showEditName, setShowEditName] = useState(false);
  const [showDeletePlan, setShowDeletePlan] = useState(false);
  const [editActions] = useState<ListItemType[]>([
    {
      title: t('edit-name'),
      img: <PencilIcon />,
      onClick: () => {
        setShowEditPlan(false);
        setShowEditName(true);
      },
    },
    {
      title: t('delete-plan'),
      img: <TrashIcon />,
      type: 'warning',
      onClick: () => {
        setShowEditPlan(false);
        setShowDeletePlan(true);
      },
    },
  ]);
  const [newName, setNewName] = useState('');

  useEffect(() => {
    setNewName(props.plan.name);
  }, [props.plan.name]);

  const editNameHandler = () => {
    props.setPlan((prev) => ({ ...prev, name: newName }));
    setShowEditName(false);
  };

  const editNamePreviousHandler = () => {
    setShowEditName(false);
    setShowEditPlan(true);
  };

  return (
    <div
      className={`w-screen h-screen bg-primary z-10 transition-all duration-800
      absolute top-0 ${props.show ? 'right-0' : '-right-full'}`}
    >
      <HCHeader
        expand
        title={props.plan.name}
        prefix={
          <HCHeaderIconButton onClick={props.onClose}>
            <ArrowLeft />
          </HCHeaderIconButton>
        }
        suffix={
          <HCHeaderIconButton onClick={() => setShowEditPlan(true)}>
            <EllipsisVertical />
          </HCHeaderIconButton>
        }
      />
      <div className='px-4 pt-3'>
        <div className='px-4 py-6 flex flex-col items-center border border-secondary rounded-2xl'>
          <img src={Logomark} alt='logomark' className='w-13 mb-2' />
          <h3 className='text-heading-xs text-secondary mb-2'>{t('empty.title')}</h3>
          <h4 className='text-tertiary mb-6'>{t('empty.subtitle')}</h4>
          <HCButton color='highlight'>{t('create-exercise')}</HCButton>
        </div>
      </div>

      {/* Edit plan */}
      <HCBottomSheet
        show={showEditPlan}
        header={t('edit-plan')}
        fullContent={true}
        onClose={() => setShowEditPlan(false)}
      >
        <HCList
          data={editActions}
          renderItem={(item) => <HCListItem {...item}></HCListItem>}
        ></HCList>
      </HCBottomSheet>

      {/* Edit name */}
      <HCBottomSheet
        show={showEditName}
        header={t('edit-name')}
        keyboard
        prefix
        onPrefix={editNamePreviousHandler}
        onClose={() => setShowEditName(false)}
      >
        <HCInput
          value={newName}
          placeholder={t('input-workout-plan-name')}
          onChange={(e) => setNewName(e.target.value)}
          className='mb-3'
        />
        <HCButton color='highlight' disabled={!props.plan.name} onClick={editNameHandler}>
          {t('confirm-edit')}
        </HCButton>
      </HCBottomSheet>
    </div>
  );
};

export default PlanDetail;
