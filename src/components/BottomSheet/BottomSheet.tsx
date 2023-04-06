import React, { ReactNode, useCallback, useEffect, useRef, useState } from 'react';

export interface Props {
  children?: ReactNode;
  className?: string;
  show: boolean;
  header?: string;
  description?: string;
  backdrop?: boolean;
  handle?: boolean;
  keyboard?: boolean;
  prefix?: ReactNode;
  suffix?: ReactNode;
  onClose?: () => void;
  onPrefix?: () => void;
  onSuffix?: () => void;
}

const HCBottomSheet: React.FC<Props> = (props: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  /**
   * Position
   *
   * top, bottom & height
   */
  const [height, setHeight] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [draggingPosY, setDraggingPosY] = useState(0);
  const [full, setFull] = useState(false);
  const [topClass, setTopClass] = useState('top-full');
  const [bottomClass, setBottomClass] = useState('');

  const onMouseDown = (event: React.MouseEvent) => {
    setDragging(true);
    setDraggingPosY(event.pageY);
  };

  const onMouseUp = useCallback(
    (event: MouseEvent) => {
      setDragging(false);
      if (event.pageY < draggingPosY) {
        // Up
        setFull(true);
      } else {
        // Down
        if (full) {
          setFull(false);
        }
      }
    },
    [draggingPosY, full, props.onClose],
  );

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current?.clientHeight);
    }
  }, [ref.current?.children]);

  useEffect(() => {
    if (props.handle && dragging) {
      document.addEventListener('mouseup', onMouseUp);
    }

    return () => {
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, [props.handle, dragging, onMouseUp]);

  // Handle top class in the different case
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (!props.show) {
      setTopClass('top-full');
      timer = setTimeout(() => {
        setBottomClass('');
      }, 800);
    } else if (full) {
      setTopClass('top-6');
      setBottomClass('bottom-0');
    } else if (props.keyboard || props.handle) {
      setTopClass('top-50');
      setBottomClass('bottom-0');
    } else {
      // TailwindCSS doesn't support dynamic class, so we handle this case by style.
      setTopClass(``);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [props.show, props.handle, props.keyboard, full, height]);

  /**
   * Shadow & Backdrop
   */
  const [shadowClass, setShadowClass] = useState('');
  const [backdrop, setBackdrop] = useState('invisible');

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (props.show) {
      timer = setTimeout(() => {
        setShadowClass('drop-shadow-reversed');
        setBackdrop('visible');
      }, 0);
    } else {
      timer = setTimeout(() => {
        setShadowClass('');
        setBackdrop('invisible');
      }, 800);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [props.show]);

  return (
    <div className={`${props.className} w-full h-full`}>
      {props.backdrop && (
        <div
          className={`
            ${backdrop}
            ${props.show ? 'opacity-100' : 'opacity-0'}
            w-full h-full bg-backdrop absolute left-0 top-0 transition-opacity duration-800`}
        ></div>
      )}
      <div
        ref={ref}
        className={`
          ${shadowClass} ${topClass} ${bottomClass}
          w-full
          pb-6 box-border rounded-t-3xl
          first-letter:w-full bg-primary
          fixed left-0 transition-top duration-800`}
        style={{
          top: props.show ? `calc(100% - ${height}px)` : `100%`,
        }}
      >
        {props.header && (
          <div onMouseDown={onMouseDown} aria-hidden='true'>
            {props.handle && (
              <div className='flex justify-center py-2'>
                <div className='w-10 h-1 rounded bg-pressed'></div>
              </div>
            )}
            <div
              className={`
                ${!props.handle && 'pt-3'} pb-3
                flex justify-between border-b border-secondary`}
            >
              <div
                className={`py-3.5 px-4 ${props.onPrefix ? 'cursor-pointer' : ''}`}
                onClick={props.onPrefix}
                aria-hidden='true'
              >
                <div className='w-5'>{props.prefix}</div>
              </div>
              <div className='flex justify-center items-center flex-col'>
                <span className='text-body-bold-l'>{props.header}</span>
                <span className='text-body-s text-tertiary'>{props.description}</span>
              </div>
              <div
                className={`py-3.5 px-4 ${props.onSuffix ? 'cursor-pointer' : ''}`}
                onClick={props.onSuffix}
                aria-hidden='true'
              >
                <div className='w-5'>{props.suffix}</div>
              </div>
            </div>
          </div>
        )}
        <div className={`px-4 ${props.header ? 'pt-4' : 'pt-9'}`}>{props.children}</div>
      </div>
    </div>
  );
};

HCBottomSheet.defaultProps = {
  show: false,
  className: '',
  header: '',
  description: '',
  backdrop: true,
  handle: false,
  keyboard: false,
};

export default HCBottomSheet;
