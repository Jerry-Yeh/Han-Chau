import { useEffect } from 'react';

const useDisableBackgroundEvents = (statuses: boolean[]) => {
  useEffect(() => {
    if (statuses.some((status) => status)) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [statuses]);
};

export default useDisableBackgroundEvents;
