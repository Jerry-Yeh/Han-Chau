import React, { ReactNode, useCallback, useEffect, useRef, useState } from 'react';

import ArrowLeft from '~/assets/img/heroicons/mini/arrow-left';
import XMark from '~/assets/img/heroicons/mini/x-mark';

export interface Props {
  children?: ReactNode;
  className?: string;
  show: boolean;
  header?: string;
  description?: string;
  backdrop?: boolean;
  handle?: boolean;
  keyboard?: boolean;
  prefix?: boolean;
  suffix?: boolean;
  onClose?: () => void;
  onPrefix?: () => void;
}

const HCBottomSheet: React.FC<Props> = (props: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  /**
   * Position
   *
   * top, bottom & height
   */
  const [heightClass, setHeightClass] = useState('h-0');
  const [dragging, setDragging] = useState(false);
  const [draggingPosY, setDraggingPosY] = useState(0);
  const [full, setFull] = useState(false);
  const [topStyle, setTopStyle] = useState('100%');
  const [bottomClass, setBottomClass] = useState('');
  const [shadowClass, setShadowClass] = useState('');
  const [backdropClass, setBackdropClass] = useState('invisible');
  const [backdropOpacityClass, setBackdropOpacityClass] = useState('opacity-0');

  const handleTouchDownHeader = (event: React.TouchEvent | React.MouseEvent) => {
    setDragging(true);
    setDraggingPosY((event as React.TouchEvent).changedTouches[0].pageY);
  };

  const handleMouseDownHeader = (event: React.MouseEvent) => {
    setDragging(true);
    setDraggingPosY(event.pageY);
  };

  const handlePosition = useCallback(
    (position: number) => {
      setDragging(false);
      if (position < draggingPosY) {
        // Up
        setFull(true);
      } else {
        // Down
        if (full) {
          setFull(false);
        }
      }
    },
    [draggingPosY, full],
  );

  const handleTouchEnd = useCallback(
    (event: TouchEvent) => {
      handlePosition(event.changedTouches[0].pageY);
    },
    [handlePosition],
  );

  const handleMouseUp = useCallback(
    (event: MouseEvent) => {
      handlePosition(event.pageY);
    },
    [handlePosition],
  );

  // useEffect(() => {
  //   if (ref.current) {
  //     setHeight(ref.current?.clientHeight);
  //   }
  // }, [ref.current?.children]);

  useEffect(() => {
    if (props.handle && dragging) {
      document.addEventListener('touchend', handleTouchEnd);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('touchstart', handleTouchEnd);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [props.handle, dragging, handleTouchEnd, handleMouseUp]);

  // Handle top class in the different case
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (props.show) {
      setHeightClass('h-full');
      setBackdropOpacityClass('opacity-100');
      setBottomClass('bottom-0');
      // TailwindCSS doesn't support dynamic class, so we handle this top case by style.
      if (full) {
        setTopStyle('24px');
      } else if (props.keyboard || props.handle) {
        setTopStyle('200px');
      } else {
        setTopStyle(`calc(100% - ${ref.current?.clientHeight}px)`);
      }
      timer = setTimeout(() => {
        setShadowClass('drop-shadow-reversed');
        setBackdropClass('visible');
      }, 0);
    } else {
      setTopStyle('100%');
      setHeightClass('h-0');
      setBackdropOpacityClass('opacity-0');
      timer = setTimeout(() => {
        setBottomClass('');
        setShadowClass('');
        setBackdropClass('invisible');
      }, 800);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [props.show, props.handle, props.keyboard, full]);

  return (
    <div
      className={`${props.className} ${heightClass}
      w-full absolute left-0 top-0`}
    >
      {/* Backdrop */}
      {props.backdrop && (
        <div
          className={`
            ${backdropClass} ${backdropOpacityClass}
            w-screen h-screen bg-backdrop absolute left-0 top-0 transition-opacity duration-800`}
        ></div>
      )}

      {/* Content */}
      <div
        ref={ref}
        className={`
          ${shadowClass} ${bottomClass}
          w-full box-border rounded-t-3xl
          first-letter:w-full bg-primary
          fixed left-0 transition-all duration-500
          flex flex-col`}
        style={{
          top: topStyle,
        }}
      >
        {props.header && (
          <div
            onTouchStart={handleTouchDownHeader}
            onMouseDown={handleMouseDownHeader}
            aria-hidden='true'
          >
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
                <div className='w-5'>{props.prefix && <ArrowLeft />}</div>
              </div>
              <div
                className={`flex justify-center items-center flex-col
                ${!props.description && 'py-2.5'}`}
              >
                <span className='text-body-bold-l'>{props.header}</span>
                <span className='text-body-s text-tertiary'>{props.description}</span>
              </div>
              <div
                className={`py-3.5 px-4 ${props.onClose ? 'cursor-pointer' : ''}`}
                onClick={props.onClose}
                aria-hidden='true'
              >
                <div className='w-5'>{props.suffix && <XMark />}</div>
              </div>
            </div>
          </div>
        )}
        <div className='grow overflow-y-scroll'>{props.children}</div>
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
  prefix: false,
  suffix: true,
};

export default HCBottomSheet;
