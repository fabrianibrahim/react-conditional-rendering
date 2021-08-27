# React IF Conditional Rendering

## Examples

```ts
...

return (
    <If condition={isLoading}>
        <Loading />
    <Else>
        <Content />
    </Else>
    </If>
);
```


```ts
...

return (
    <If condition={data === 'x'}>
        <h1>Title1</h1>
        <ElseIf condition={data === 'y'}>
            <h1>Title2</h1>
        </ElseIf>
        <Else>
            <h1>Title3</h1>
        </Else>
    </If>
);
```