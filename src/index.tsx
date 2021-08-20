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
  let block = null;
  let elseIfConditionMet = false;
  let stop = false;

  React.Children.forEach(children, (child: ReactElement) => {
    if (stop) return;
    if (condition) {
      block = child;
      stop = true;
    }
    if (child.type === ElseIf && child.props.condition) {
      block = child;
      elseIfConditionMet = true;
    }
    if (child.type === Else && !elseIfConditionMet && !condition) {
      block = child;
    }
  });

  return block;
};
