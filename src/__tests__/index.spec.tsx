import { Else, ElseIf, If } from '../If';
import React from 'react';
import { render, screen } from '@testing-library/react';

describe('If conditional rendering component', () => {
  let data;

  it('should render if condition', () => {
    render(
      <div data-testid="container">
        <If condition={true}>
          <h1>Title1</h1>
          <div>Content</div>
        </If>
      </div>
    );
    expect(screen.getByTestId('container')).toHaveTextContent('Title1');
    expect(screen.getByTestId('container')).toHaveTextContent('Content');
  });

  it('should render and check if with else condition', () => {
    data = 'x';
    render(
      <div data-testid="container">
        <If condition={data === 'x'}>
          <h1>Title1</h1>
          <Else>
            <h1>Title4</h1>
          </Else>
        </If>
      </div>
    );
    expect(screen.getByTestId('container')).toHaveTextContent('Title1');
  });

  it('should render elseif condition', () => {
    data = 'y';
    render(
      <div data-testid="container">
        <If condition={data === 'x'}>
          <h1>Title1</h1>
          <ElseIf condition={data === 'y'}>
            <h1>Title2</h1>
            <div>Content</div>
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
    expect(screen.getByTestId('container')).toHaveTextContent('Title2');
    expect(screen.getByTestId('container')).toHaveTextContent('Content');
  });

  it('should render else condition', () => {
    data = 'z';
    render(
      <div data-testid="container">
        <If condition={data === 'x'}>
          <h1>Title1</h1>
          <ElseIf condition={data === 'y'}>
            <h1>Title2</h1>
          </ElseIf>
          <Else>
            <h1>Title3</h1>
            <div>Content</div>
          </Else>
        </If>
      </div>
    );
    expect(screen.getByTestId('container')).toHaveTextContent('Title3');
    expect(screen.getByTestId('container')).toHaveTextContent('Content');
  });
});
