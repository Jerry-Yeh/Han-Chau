import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '~/store/hook';
import { useNavigate, useParams } from 'react-router-dom';
import moment from 'moment';

import Layout from '../components/Layout';
import HCHeader, { HCHeaderIconButton, HCHeaderRegion } from '~/components/Header';
import HCProgress from '~/components/Progress';
import HCWorkoutForm from '~/pages/WorkoutPlan/components/WorkoutForm';

import useUrlPlan from '~/hooks/exercise/useUrlPlan';

import type { AddRecordProps } from '.';
import type { WorkoutPlanTemplateExercise } from '~/services/exercise';

import XMark from '~/assets/img/heroicons/mini/x-mark';
import Plus from '~/assets/img/heroicons/mini/plus';
import EllipsisVertical from '~/assets/img/heroicons/mini/ellipsis-vertical';

const AddRecord: React.FC<AddRecordProps> = (props: AddRecordProps) => {
  const { t } = useTranslation('translation', { keyPrefix: 'exercise.record' });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { planId, exerciseId } = useParams();

  const [plan, updatePlan] = useUrlPlan();
  const current = moment().format('YYYY/MM/DD HH:MM');
  const [record, setRecord] = useState<WorkoutPlanTemplateExercise[]>([]);

  useEffect(() => {
    dispatch({ type: 'loading/setShow', payload: true });

    setRecord(
      plan.exerciseList.map((item) => {
        const { id, exerciseId, sets, reps } = item;

        return { id, exerciseId, sets, reps };
      }),
    );

    dispatch({ type: 'loading/setShow', payload: false });
  }, [dispatch, plan.exerciseList]);

  const handleClose = () => {
    navigate(`/workout-plan/${planId}`);
  };

  return (
    <Layout
      header={
        <HCHeader
          prefix={
            <HCHeaderIconButton onClick={handleClose}>
              <XMark />
            </HCHeaderIconButton>
          }
          suffix={
            <div className='flex'>
              <HCHeaderIconButton>
                <Plus />
              </HCHeaderIconButton>
              <HCHeaderIconButton>
                <EllipsisVertical />
              </HCHeaderIconButton>
            </div>
          }
          title={t('title')}
          behavior='fully'
        >
          <HCHeaderRegion behavior='fully' className='bg-primary'>
            <div className='text-heading-m text-primary pl-4 pb-3'>{t('expanded-title')}</div>
          </HCHeaderRegion>
          <HCHeaderRegion behavior='fully' className='bg-primary px-4'>
            <div className='text-body-s text-tertiary mb-4'>
              {plan.name}· {current}
            </div>
            <HCProgress rateClass='w-1/4' className='mb-2' />
            <div className='text-body-xs'>
              <span className='text-placeholder'>完成度 </span>
              <span className='text-tertiary'></span>
            </div>
          </HCHeaderRegion>
        </HCHeader>
      }
    >
      <HCWorkoutForm data={record}></HCWorkoutForm>
    </Layout>
  );
};

export default AddRecord;
