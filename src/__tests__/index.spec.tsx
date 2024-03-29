import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { Else, ElseIf, If } from '../index';
import {render, screen} from "@testing-library/react";

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

  it('should not render if condition with false value', () => {
    render(
        <div data-testid="container">
          <If condition={false}>
            <h1>Title1</h1>
            <div>Content</div>
          </If>
        </div>
    );
    expect(screen.queryByText('Title1')).toBeFalsy();
    expect(screen.queryByText('Content')).toBeFalsy();
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
    expect(screen.getByTestId('container')).not.toHaveTextContent('Title4');
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
    expect(screen.getByTestId('container')).not.toHaveTextContent('Title1');
    expect(screen.getByTestId('container')).not.toHaveTextContent('Title3');
    expect(screen.getByTestId('container')).not.toHaveTextContent('Title4');
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
    expect(screen.getByTestId('container')).not.toHaveTextContent('Title1');
    expect(screen.getByTestId('container')).not.toHaveTextContent('Title2');
  });
});
