/*
  组件的入口，负责最终输出内容的整合
  具体实现组件代码在与目录同名的组件内实现ss
*/
import FuncCom from './FuncCom';
import NoteButton from './NoteButton';

export type { FuncComProps } from './FuncCom';

FuncCom.NoteButton = NoteButton;

export default FuncCom;
