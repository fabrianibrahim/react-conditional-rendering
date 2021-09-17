import React, { ReactElement } from 'react';

interface IfProps {
  condition?: boolean;
  children?: React.ReactNode;
}

export const ElseIf: React.FunctionComponent<IfProps> = ({ children }): JSX.Element => {
  return <>{children}</>;
};

export const Else: React.FunctionComponent<IfProps> = ({ children }): JSX.Element => {
  return <>{children}</>;
};

export const If: React.FunctionComponent<IfProps> = ({ children, condition }): JSX.Element => {
  const block: JSX.Element[] = [];
  let elseIfConditionMet = false;
  let stop = false;

  React.Children.forEach(children, (child: ReactElement, index: number) => {
    if (stop) return;
    if (child.type === ElseIf && child.props.condition) {
      block.push(child);
      elseIfConditionMet = true;
    } else if (child.type === Else && !elseIfConditionMet && !condition) {
      block.push(child);
    } else {
      if (condition) {
        block.push(child);
        if (index === React.Children.count(children) - 1) {
          console.log('here');
          stop = true;
        }
      }
    }
  });
  return <>{block.map((child) => child)}</>;
};
