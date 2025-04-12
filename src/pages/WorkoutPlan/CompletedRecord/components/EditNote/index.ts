import EditNote from './EditNote';

export interface EditNoteProps {
    children?: React.ReactNode;
    data: string;
    isShow: boolean;
    onClose: () => void;
    onSave: (value: string) => void;
}

export default EditNote;
