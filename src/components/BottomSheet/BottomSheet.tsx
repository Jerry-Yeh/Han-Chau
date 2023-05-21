import React, { ReactNode, useCallback, useEffect, useRef, useState } from 'react';

import ArrowLeft from '~/assets/img/heroicons/mini/arrow-left';
import XMark from '~/assets/img/heroicons/mini/x-mark';

export interface BottomSheetProps {
  children?: ReactNode;
  className?: string;
  show: boolean;
  title?: string;
  description?: string;
  backdrop?: boolean;
  handle?: boolean;
  keyboard?: boolean;
  prefix?: boolean;
  suffix?: boolean;
  footer?: ReactNode;
  onClose?: () => void;
  onPrefix?: () => void;
}

const HCBottomSheet: React.FC<BottomSheetProps> = (props: BottomSheetProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

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
  const [footerTopStyle, setFooterTopStyle] = useState('100%');

  const handleTouchDownHeader = useCallback((event: React.TouchEvent | React.MouseEvent) => {
    setDragging(true);
    setDraggingPosY((event as React.TouchEvent).changedTouches[0].pageY);
  }, []);

  const handleMouseDownHeader = useCallback((event: React.MouseEvent) => {
    setDragging(true);
    setDraggingPosY(event.pageY);
  }, []);

  useEffect(() => {
    const handlePosition = (position: number) => {
      setDragging(false);
      if (position < draggingPosY) {
        setFull(true);
      } else {
        if (full) {
          setFull(false);
        }
      }
    };

    const handleTouchEnd = (event: TouchEvent) => {
      handlePosition(event.changedTouches[0].pageY);
    };

    const handleMouseUp = (event: MouseEvent) => {
      handlePosition(event.pageY);
    };

    if (props.handle && dragging) {
      document.addEventListener('touchend', handleTouchEnd);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('touchend', handleTouchEnd);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [props.handle, dragging, draggingPosY, full]);

  // Handle top class in the different case
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (props.show) {
      setHeightClass('h-full');
      setBackdropOpacityClass('opacity-100');
      setBottomClass('bottom-0');

      // TailwindCSS doesn't support dynamic class, so we handle this top case by style.
      setFooterTopStyle(`calc(100% - ${footerRef.current?.clientHeight}px)`);
      if (full) {
        setTopStyle('24px');
      } else if (props.keyboard || props.handle) {
        setTopStyle('200px');
      } else {
        setTopStyle(`calc(100% - ${contentRef.current?.clientHeight}px)`);
      }
      timer = setTimeout(() => {
        setShadowClass('drop-shadow-reversed');
        setBackdropClass('visible');
      }, 0);
    } else {
      setTopStyle('100%');
      setHeightClass('h-0');
      setBackdropOpacityClass('opacity-0');
      setFooterTopStyle('100%');
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
          w-screen h-screen bg-backdrop fixed left-0 top-0 transition-opacity duration-800 z-20`}
        />
      )}

      {/* Main */}
      <div
        ref={contentRef}
        className={`
          ${shadowClass} ${bottomClass}
          w-full box-border rounded-t-3xl
          first-letter:w-full bg-primary
          fixed left-0 transition-all duration-500
          flex flex-col z-30`}
        style={{
          top: topStyle,
        }}
      >
        {/* Header */}
        {props.title && (
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
                <span className='text-body-bold-l'>{props.title}</span>
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

        {/* Content */}
        <div
          className='grow overflow-y-scroll'
          style={{
            paddingBottom: props.footer ? `${footerRef.current?.clientHeight}px` : 0,
          }}
        >
          {props.children}
        </div>

        {/* Footer */}
        {props.footer && (
          <div
            ref={footerRef}
            className='w-full fixed transition-all duration-500 border-t border-secondary bg-primary z-10 p-4'
            style={{
              top: footerTopStyle,
            }}
          >
            {props.footer}
          </div>
        )}
      </div>
    </div>
  );
};

HCBottomSheet.defaultProps = {
  show: false,
  className: '',
  title: '',
  description: '',
  backdrop: true,
  handle: false,
  keyboard: false,
  prefix: false,
  suffix: true,
};

export default HCBottomSheet;
