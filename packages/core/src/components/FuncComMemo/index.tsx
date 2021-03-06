/*
  组件的入口，负责最终输出内容的整合
  具体实现组件代码在与目录同名的组件内实现s
*/
import FuncComMemo from './FuncComMemo';
import NoteButton from './NoteButton';

export type { FuncComMemoProps } from './FuncComMemo';

FuncComMemo.NoteButton = NoteButton;

export default FuncComMemo;
