/*
  实际的组件实现
*/
import * as React from 'react';
import NoteButton from './NoteButton';
import './style/btn.less';
import './style/index.less';

export interface FuncComProps {
  /** 允许覆盖样式 */
  className?: string;
  /** 可以传入 children */
  children?: React.ReactNode;
  /** 组件类型 */
  type?: 'primary' | 'error' | 'default';
  /** 组件大小 */
  size?: 'large' | 'small' | 'default';
  /**
   * 单击事件
   */
  onClick?: () => void;
  /** Flag */
  flag?: 'Function Component S';
}

const FuncCom: React.FC<FuncComProps> = (props: FuncComProps) => {
  const { className, children, type, onClick, size } = props;
  const [num, setNum] = React.useState<number>(0);
  let color = '#333333';
  if (type === 'primary') {
    color = '#5352ED';
  } else if (type === 'error') {
    color = '#FF4757';
  }
  let height = 32;
  if (size === 'large') {
    height = 40;
  } else if (size === 'small') {
    height = 24;
  }

  function onBtnClick() {
    setNum(num + 1);
    if (onClick) onClick();
  }

  /** 组件底层由原生 button 组件实现 */
  return (
    <button
      type="button"
      className={`${className} button index-style`}
      style={{
        borderColor: color,
        color,
        height,
      }}
      onClick={onBtnClick}
    >
      <span className="icon-empty" />
      {children} : {num}
    </button>
  );
};
FuncCom.defaultProps = {
  type: 'primary',
  size: 'default',
};

type FuncComFC<P> = React.FC<P> & {
  NoteButton: typeof NoteButton;
};

export default FuncCom as FuncComFC<FuncComProps>;
