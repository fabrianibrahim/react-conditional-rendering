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
  let ifConditionMet = false;
  let elseIfConditionMet = false;

  React.Children.forEach(children, (child: ReactElement) => {
    if (condition && child.type !== ElseIf && child.type !== Else) {
      ifConditionMet = true;
      block.push(childimport React, { ReactElement } from 'react';

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
        let ifConditionMet = false;
        let elseIfConditionMet = false;

        React.Children.forEach(children, (child: ReactElement) => {
          if (condition && child.type !== ElseIf && child.type !== Else) {
            ifConditionMet = true;
            block.push(child);
          }
          if (child.type === ElseIf && child.props.condition) {
            elseIfConditionMet = true;
            block.push(child);
          }
          if (child.type === Else && !elseIfConditionMet && !ifConditionMet) {
            block.push(child);
          }
        });
        return <>{block.map((child) => child)}</>;
      };
    );
    }
    if (child.type === ElseIf && child.props.condition) {
      elseIfConditionMet = true;
      block.push(child);
    }
    if (child.type === Else && !elseIfConditionMet && !ifConditionMet) {
      block.push(child);
    }
  });
  return <>{block.map((child) => child)}</>;
};
