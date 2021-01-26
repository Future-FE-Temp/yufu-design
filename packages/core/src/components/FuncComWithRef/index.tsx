/*
  组件的入口，负责最终输出内容的整合
  具体实现组件代码在与目录同名的组件内实现
*/
import FuncComWithRef from './FuncComWithRef';
import NoteButton from './NoteButton';

export type { FuncComWithRefProps } from './FuncComWithRef';

FuncComWithRef.NoteButton = NoteButton;

export default FuncComWithRef;
