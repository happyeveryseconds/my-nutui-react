import React from 'react'
import Taro from '@tarojs/taro'
import {
  Space,
  Button,
  Cell,
  ConfigProvider,
} from '@/packages/nutui.react.taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'

interface Button {
  button1: string
  button2: string
  button3: string
  button4: string
  button5: string
  button6: string
}
interface T extends Button {
  basic: string
  wrap: string
  direction: string
  spaceGap: string
}

const SpaceDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      basic: '基本用法',
      wrap: '换行',
      direction: '垂直',
      spaceGap: '间距大小',
      button1: '按钮1',
      button2: '按钮2',
      button3: '按钮3',
      button4: '按钮4',
      button5: '按钮5',
      button6: '按钮6',
    },
    'zh-TW': {
      basic: '基本用法',
      wrap: '換行',
      direction: '垂直',
      spaceGap: '間距大小',
      button1: '按钮1',
      button2: '按钮2',
      button3: '按钮3',
      button4: '按钮4',
      button5: '按钮5',
      button6: '按钮6',
    },
    'en-US': {
      basic: 'Basic Usage',
      wrap: 'wrap',
      direction: 'Direction',
      spaceGap: 'SpaceGap',
      button1: 'button1',
      button2: 'button2',
      button3: 'button3',
      button4: 'button4',
      button5: 'button5',
      button6: 'button6',
    },
  })

  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>{translated.basic}</h2>
        <Cell>
          <Space>
            <Button>按钮1</Button>
            <Button>按钮2</Button>
            <Button>按钮3</Button>
          </Space>
        </Cell>

        <h2>{translated.wrap}</h2>
        <Cell>
          <Space wrap>
            <Button>按钮1</Button>
            <Button>按钮2</Button>
            <Button>按钮3</Button>
            <Button>按钮4</Button>
            <Button>按钮5</Button>
            <Button>按钮6</Button>
          </Space>
        </Cell>

        <h2>{translated.direction}</h2>
        <Cell>
          <Space direction="vertical">
            <Button>按钮1</Button>
            <Button>按钮2</Button>
            <Button>按钮3</Button>
          </Space>
        </Cell>

        <h2>{translated.spaceGap}</h2>
        <Cell>
          <ConfigProvider
            theme={{
              nutuiSpaceGap: '20px',
            }}
          >
            <Space>
              <Button>按钮1</Button>
              <Button>按钮2</Button>
              <Button>按钮3</Button>
            </Space>
          </ConfigProvider>
        </Cell>

        <h2>主轴对齐方式</h2>

        <Cell style={{ display: 'block' }}>
          <Space justify="center" wrap>
            <Button style={{ height: '30px' }}>{translated.button1}</Button>
            <Button style={{ height: '60px' }}>{translated.button2}</Button>
            <Button style={{ height: '90px' }}>{translated.button3}</Button>
          </Space>
        </Cell>

        <h2>交叉轴对齐方式</h2>
        <Cell>
          <Space align="end" wrap>
            <Button style={{ height: '30px' }}>{translated.button1}</Button>
            <Button style={{ height: '60px' }}>{translated.button2}</Button>
            <Button style={{ height: '90px' }}>{translated.button3}</Button>
          </Space>
        </Cell>
      </div>
    </>
  )
}

export default SpaceDemo
