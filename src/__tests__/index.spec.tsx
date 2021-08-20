import { Else, ElseIf, If } from '../index';
import React from 'react';
import { render, screen } from '@testing-library/react';

describe('If conditional rendering component', () => {
  let data;

  it('should render if condition', () => {
    data = 'x';
    render(
      <div data-testid="title">
        <If condition={data === 'x'}>
          <h1>Title1</h1>
        </If>
      </div>
    );
    expect(screen.getByTestId('title')).toHaveTextContent('Title1');
  });

  it('should render elseif condition', () => {
    data = 'y';
    render(
      <div data-testid="title">
        <If condition={data === 'x'}>
          <h1>Title1</h1>
          <ElseIf condition={data === 'y'}>
            <h1>Title2</h1>
          </ElseIf>
          <ElseIf condition={data === 'z'}>
            <h1>Title3</h1>
          </ElseIf>
          <Else>
            <h1>Title4</h1>
          </Else>
        </If>
      </div>
    );
    expect(screen.getByTestId('title')).toHaveTextContent('Title2');
  });

  it('should render else condition', () => {
    data = 'z';
    render(
      <div data-testid="title">
        <If condition={data === 'x'}>
          <h1>Title1</h1>
          <ElseIf condition={data === 'y'}>
            <h1>Title2</h1>
          </ElseIf>
          <Else>
            <h1>Title3</h1>
          </Else>
        </If>
      </div>
    );
    expect(screen.getByTestId('title')).toHaveTextContent('Title3');
  });
});
