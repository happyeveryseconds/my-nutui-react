# Button 按钮

## 介绍

按钮用于触发一个操作，如提交表单。

## 安装

```tsx
import { Button } from '@nutui/nutui-react';
```

## 代码演示

### 按钮类型

按钮支持 `default`、`primary`、`info`、`warning`、`danger`、`success` 六种类型，默认为 `default`。

:::demo

```tsx
import React from "react";
import { Button } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Button type="primary">主要按钮</Button>
      <Button type="info">信息按钮</Button>
      <Button type="default">默认按钮</Button>
      <Button type="danger">危险按钮</Button>
      <Button type="warning">警告按钮</Button>
      <Button type="success">成功按钮</Button>
    </>
  );
};
export default App;
```

:::

### 填充模式

按钮支持 `solid`、 `outline`、 `dashed`、`none`四种类型，默认为 `solid`。

:::demo

```tsx
import React from "react";
import { Button } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Button fill="solid">Solid</Button>
      <Button type="primary" fill="outline">Outline</Button>
      <Button fill="none">None</Button>
    </>
  );
};
export default App;
```

:::

### 图标按钮

通过 `icon` 属性来设置按钮图标，并提供`rightIcon`属性使图标在右侧显示。

:::demo

```tsx
import React from "react";
import { Button } from '@nutui/nutui-react';
import { Star, Plus } from '@nutui/icons-react'

const App = () => {
  return (
    <>
      <Button
        type="primary"
        icon={<Star />}
        rightIcon={<Star />}
        style={{ margin: 8 }}
      >
        操作按钮
      </Button>
      <Button
        type="primary"
        fill="outline"
        icon={<Star />}
        rightIcon={<Star />}
        style={{ margin: 8 }}
      >
        操作按钮
      </Button>
      <Button
        icon={<Star />}
        rightIcon={<Star />}
        style={{
          margin: 8,
          backgroundColor: `var(--nutui-color-primary-light)`,
          borderColor: `var(--nutui-color-primary)`,
          color: `var(--nutui-color-primary)`,
        }}
      >
        操作按钮
      </Button>
      <Button
        type="default"
        fill="none"
        icon={<Star />}
        rightIcon={<Star />}
        style={{
          margin: 8,
          backgroundColor: `var(--nutui-gray-3)`,
          color: `var(--nutui-gray-7)`,
        }}
      >
        操作按钮
      </Button>
      <Button
        type="default"
        fill="none"
        icon={<Star />}
        rightIcon={<Star />}
        style={{
          margin: 8,
          backgroundColor: `var(--nutui-gray-1)`,
          color: `var(--nutui-gray-7)`,
        }}
      >
        操作按钮
      </Button>
      <Button
        type="default"
        icon={<Star />}
        rightIcon={<Star />}
        style={{
          margin: 8,
        }}
      >
        操作按钮
      </Button>
      <Button
        shape="square"
        fill="outline"
        type="primary"
        icon={<Plus width="20" />}
        style={{ margin: 8 }}
      />
      <Button
        shape="round"
        type="primary"
        size="large"
        icon={<Star width={20} height={20} />}
        rightIcon={<Star width={20} height={20} />}
        style={{ margin: 8 }}
      >
        操作按钮
      </Button>
    </>
  );
};
export default App;
```

:::

### 禁用状态

通过 `disabled` 属性来禁用按钮，禁用状态下按钮不可点击。

:::demo

```tsx
import React from "react";
import { Button } from '@nutui/nutui-react';
import { Star, Plus } from '@nutui/icons-react'

const App = () => {
  return (
    <>
      <Button
        disabled
        type="primary"
        icon={<Star />}
        rightIcon={<Star />}
        style={{ margin: 8 }}
      >
        操作按钮
      </Button>
      <Button
        disabled
        type="primary"
        fill="outline"
        icon={<Star />}
        rightIcon={<Star />}
        style={{ margin: 8 }}
      >
        操作按钮
      </Button>
      <Button
        disabled
        fill="solid"
        icon={<Star />}
        rightIcon={<Star />}
        style={{ margin: 8 }}
      >
        操作按钮
      </Button>
      <Button
        disabled
        type="default"
        fill="none"
        icon={<Star />}
        rightIcon={<Star />}
        style={{
          margin: 8,
          backgroundColor: `var(--nutui-gray-3)`,
          color: `var(--nutui-gray-5)`,
        }}
      >
        操作按钮
      </Button>
      <Button
        disabled
        type="default"
        fill="none"
        icon={<Star />}
        rightIcon={<Star />}
        style={{
          margin: 8,
          backgroundColor: `var(--nutui-gray-1)`,
          color: `var(--nutui-gray-5)`,
        }}
      >
        操作按钮
      </Button>
      <Button
        disabled
        icon={<Star />}
        rightIcon={<Star />}
        style={{
          margin: 8,
        }}
      >
        操作按钮
      </Button>
      <Button
        shape="square"
        fill="outline"
        type="primary"
        icon={<Plus width="20" />}
        style={{ margin: 8 }}
      />
      <Button
        disabled
        type="primary"
        icon={<Plus width="20" />}
        style={{ margin: 8 }}
      />
      <Button
        shape="round"
        type="primary"
        size="large"
        icon={<Star width={20} height={20} />}
        rightIcon={<Star width={20} height={20} />}
        style={{ margin: 8 }}
      >
        操作按钮
      </Button>
    </>
  );
};
export default App;
```

:::

### 按钮形状

通过 `shape` 属性设置按钮形状，支持圆形、方形按钮，默认为圆形。

:::demo

```tsx
import React from "react";
import { Button } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Button shape="square" type="primary">方形按钮</Button>
    </>
  );
};
export default App;
```

:::

### 加载状态

:::demo

```tsx
import React, { useState } from "react";
import { Button } from '@nutui/nutui-react';

const App = () => {
  const [loading, setLoading] = useState(false)
  return (
    <>
      <Button loading type="warning">加载中...</Button>
      <Button
        loading={loading}
        type="success"
        onClick={() => {
          setTimeout(() => {
            setLoading(false)
          }, 1500);
          setLoading(!loading)
        }}
        style={{ margin: 8 }}
      >
        Click me!
      </Button>
    </>
  );
};
export default App;
```

:::


### 按钮尺寸

支持 `large`、`normal`、`small` 三种尺寸，默认为 `normal`。

:::demo

```tsx
import React from "react";
import { Button } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Button size="large" type="primary">大号按钮</Button>
      <Button type="primary">普通按钮</Button>
      <Button size="small" type="primary">小型按钮</Button>
      <Button size="mini" type="primary">迷你按钮</Button>
    </>
  );
};
export default App;
```

:::

### 块级元素

按钮在默认情况下为行内块级元素，通过 `block` 属性可以将按钮的元素类型设置为块级元素，常用来实现通栏按钮。

:::demo

```tsx
import React from "react";
import { Button } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Button block type="primary">块级元素</Button>
    </>
  );
};
export default App;
```

:::

### 自定义颜色

通过 color 属性可以自定义按钮的颜色。

:::demo

```tsx
import React from "react";
import { Button } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Button color="#7232dd">单色按钮</Button>
      <Button color="#7232dd" fill="outline">单色按钮</Button>
      <Button color="rgba(10,101,208,0.75)">单色按钮</Button>
      <Button color="linear-gradient(to right, #ff6034, #ee0a24)">
        渐变色按钮
      </Button>
    </>
  );
};
export default App;
```

:::

## Button

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 按钮的样式 | `default` \| `primary` \| `warning` \| `danger` \| `success` \| `info` | `default` |
| size | 按钮的尺寸 | `normal` \| `large` \| `small` | `normal` |
| shape | 按钮的形状 | `square` \| `round` | `round` |
| color | 按钮颜色，支持传入 linear-gradient 渐变色 | `string` | `-` |
| fill | 填充模式 | `solid` \| `outline` \| `dashed` \| `none` | `solid` |
| disabled | 是否禁用按钮 | `boolean` | `false` |
| block | 是否为块级元素 | `boolean` | `false` |
| icon | 按钮图标 | `ReactNode` | `-` |
| loading | 按钮loading状态 | `boolean` | `false` |
| onClick | 点击按钮时触发 | `(e: MouseEvent<HTMLButtonElement>) => void` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-button-border-radius | 按钮的圆角设置 | `24px` |
| \--nutui-button-border-width | 按钮的边框宽度 | `1px` |
| \--nutui-button-normal-padding | size normal时的padding值 | `0px 16px` |
| \--nutui-button-default-height | type 为 default 的按钮的高度 | `32px` |
| \--nutui-button-default-color | type 为 default 的按钮的文本色 | `$color-title` |
| \--nutui-button-default-background-color | type 为 default 的按钮的背景色 | `$white` |
| \--nutui-button-default-border-color | type 为 default 的按钮的边框色 | `$color-text` |
| \--nutui-button-default-disabled | type 为 default 的按钮的禁用色 | `$color-text-disabled` |
| \--nutui-button-default-padding | type 为 default 的按钮的内边距 | `0 16px` |
| \--nutui-button-default-font-size | type 为 default 的按钮的字号 | `$font-size-base` |
| \--nutui-button-default-font-weight | type 为 default 的按钮的字重 | `$font-weight` |
| \--nutui-button-large-height | size 为 large 的按钮的高度 | `40px` |
| \--nutui-button-large-font-size | size 为 large 的按钮的字号 | `$font-size-base` |
| \--nutui-button-small-padding | size 为 small 的按钮的内边距 | `0 12px` |
| \--nutui-button-small-height | size 为 small 的按钮的高度 | `28px` |
| \--nutui-button-small-font-size | size 为 small 的按钮的字号 | `$font-size-small` |
| \--nutui-button-mini-padding | size 为 mini 的按钮的内边距 | `0 12px` |
| \--nutui-button-mini-height | size 为 mini 的按钮的高度 | `24px` |
| \--nutui-button-mini-font-size | size 为 mini 的按钮的字号 | `$font-size-small` |
| \--nutui-button-text-icon-margin | 带 icon按钮的文本的边距 | `4px` |
