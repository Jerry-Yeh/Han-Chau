import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';

import HCHeader, { HCHeaderIconButton } from '~/components/Header';
import HCInputLongFullspace, { InputChangeEventType } from '~/components/InputLongFullspace';
import HCLink from '~/components/Link';
import HCModal from '~/components/Modal';

import type { EditNoteProps } from '.';

const EditNote: React.FC<EditNoteProps> = (props) => {
    const { t } = useTranslation('translation', {
        keyPrefix: 'exercise.completed-record.edit-note',
    });

    const [value, setValue] = useState('');
    const [isShowModal, setShowModal] = useState(false);

    useEffect(() => {
        setValue(props.data);
    }, [props.data]);

    const handleClose = () => {
        if (props.data === value) {
            props.onClose();
        } else {
            setShowModal(true);
        }
    };

    const handleSave = () => {
        if (props.data === value) {
            props.onClose();
        } else {
            props.onSave(value);
        }
    };

    const handleChangeValue = (e: InputChangeEventType) => {
        setValue(e.target.value);
    };

    const handleCancelModal = () => {
        setShowModal(false);
        setValue(props.data);
        props.onClose();
    };

    const handleConfirmModal = () => {
        setShowModal(false);
    };

    return (
        <div
            className={`w-screen h-screen fixed top-0 ${
                props.isShow ? 'left-0' : 'left-full'
            } z-30 transition-all duration-300 bg-primary`}
        >
            <HCHeader
                title={t('title')}
                prefix={
                    <HCHeaderIconButton onClick={handleClose}>
                        <ArrowLeftIcon className='w-5 h-5' />
                    </HCHeaderIconButton>
                }
                suffix={
                    <HCHeaderIconButton onClick={handleSave}>
                        <HCLink>{t('save')}</HCLink>
                    </HCHeaderIconButton>
                }
            />
            <div className='px-4 py-2'>
                <HCInputLongFullspace
                    value={value}
                    placeholder='輸入一些你的紀錄與想法'
                    onChange={handleChangeValue}
                />
            </div>
            <HCModal
                open={isShowModal}
                type={'warning'}
                cancel={t('modal.cancel')}
                title={t('modal.title')}
                description={t('modal.description')}
                confirm={t('modal.confirm')}
                onCancel={handleCancelModal}
                onConfirm={handleConfirmModal}
            />
        </div>
    );
};

export default EditNote;
