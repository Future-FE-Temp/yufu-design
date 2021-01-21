/**
 * 用来测试 babel 的兼容情况
 * */
import * as React from 'react';
import Button, { ButtonProps } from '../Button';

type Props = ButtonProps;

class PromiseButton extends React.PureComponent<Props> {
  private onClick = async () => {
    const random = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(Math.random());
      }, 1000);
    });

    // eslint-disable-next-line no-console
    console.log(random);
  };

  render(): React.ReactNode {
    const { children, onClick, ...extraProps } = this.props;
    return (
      <Button {...extraProps} onClick={this.onClick}>
        {children}
      </Button>
    );
  }
}

export default PromiseButton;
