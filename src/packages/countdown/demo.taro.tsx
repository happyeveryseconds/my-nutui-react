import React, { useEffect, useRef, useState } from 'react'
import Taro from '@tarojs/taro'
import {
  Button,
  Cell,
  CountDown,
  Grid,
  GridItem,
} from '@/packages/nutui.react.taro'
import Header from '@/sites/components/header'
import { useTranslate } from '@/sites/assets/locale/taro'
import '@/packages/countdown/demo.scss'

interface countdownRefState {
  start: () => void
  pause: () => void
  reset: () => void
}
interface T {
  basic: string
  format: string
  millisecond: string
  serverTime: string
  async: string
  remainingTime: string
  controlTime: string
  customStyle: string
  handleControl: string
  start: string
  stop: string
  pause: string
  reset: string
  day: string
  hour: string
  minute: string
  second: string
}
const CountDownDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      basic: '基础用法',
      remainingTime: '剩余时间用法',
      format: '自定义格式',
      millisecond: '毫秒级渲染',
      serverTime: '以服务端的时间为准',
      async: '异步更新结束时间',
      controlTime: '控制开始和暂停的倒计时',
      customStyle: '自定义展示样式',
      handleControl: '手动控制',
      start: '开始',
      stop: '结束',
      pause: '暂停',
      reset: '重置',
      day: '天',
      hour: '时',
      minute: '分',
      second: '秒',
    },
    'zh-TW': {
      basic: '基础用法',
      remainingTime: '剩余時間用法',
      format: '自定義格式',
      millisecond: '毫秒級渲染',
      serverTime: '以服務端的時間為準',
      async: '異步更新結束時間',
      controlTime: '控製開始和暫停的倒計時',
      customStyle: '自定義展示樣式',
      handleControl: '手動控製',
      start: '開始',
      stop: '结束',
      pause: '暫停',
      reset: '重置',
      day: '天',
      hour: '時',
      minute: '分',
      second: '秒',
    },
    'en-US': {
      basic: 'Basic Usage',
      remainingTime: 'Remaining time Usage',
      format: 'Custom Format',
      millisecond: 'Millisecond',
      serverTime: 'Server Time Prevails',
      async: 'End-Time of Asyn Update',
      controlTime: 'Manual Control',
      customStyle: 'Custom Style',
      handleControl: 'Handle Control',
      start: 'Start',
      stop: 'Stop',
      pause: 'Pause',
      reset: 'Reset',
      day: 'Day',
      hour: ':',
      minute: ':',
      second: '',
    },
  })
  const stateRef = useRef({
    timer: -1,
    serverTime: Date.now() - 20 * 1000,
    endTime: Date.now() + 60 * 1000,
    remainingTime: 60 * 1000,
  })

  const countDownRef = useRef<countdownRefState>(null)

  const [paused, setPaused] = useState(false)
  const [asyncEnd, setAsyncEnd] = useState(0)
  const [resetTime, setResetTime] = useState({
    d: '1',
    h: '00',
    m: '00',
    s: '00',
  })

  const partItemStyle = {
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '20px',
    height: '25px',
    background: 'var(--nutui-color-primary)',
    color: '#fff',
    fontSize: '14px',
    borderRadius: '6px',
  }

  const partItemSymbolStyle = {
    margin: '0 5px',
  }

  useEffect(() => {
    stateRef.current.timer = window.setTimeout(() => {
      setAsyncEnd(Date.now() + 30 * 1000)
    }, 3000)
    return () => {
      clearTimeout(stateRef.current.timer)
    }
  }, [])

  const toggle = () => {
    console.log(paused)
    setPaused(!paused)
  }
  const onEnd = () => {
    console.log('countdown: ended.')
  }
  const onpaused = (v: number) => {
    console.log('paused: ', v)
  }
  const onrestart = (v: number) => {
    console.log('restart: ', v)
  }
  const onUpdate = (v: any) => {
    setResetTime(v)
  }

  const start = () => {
    console.log(countDownRef.current)
    countDownRef.current && countDownRef.current.start()
  }

  const pause = () => {
    countDownRef.current && countDownRef.current.pause()
  }

  const reset = () => {
    countDownRef.current && countDownRef.current.reset()
  }
  return (
    <>
      <Header />
      <div
        className={`demo demo-countdown ${
          Taro.getEnv() === 'WEB' ? 'web' : ''
        }`}
      >
        <h2>{translated.basic}</h2>
        <Cell>
          <CountDown
            endTime={stateRef.current.endTime}
            onUpdate={onUpdate}
            onEnd={onEnd}
          />
        </Cell>
        <h2>{translated.remainingTime}</h2>
        <Cell>
          <CountDown remainingTime={stateRef.current.remainingTime} />
        </Cell>
        <h2>{translated.format}</h2>
        <Cell>
          <CountDown
            endTime={stateRef.current.endTime}
            format={`DD ${translated.day} HH ${translated.hour} mm ${translated.minute} ss ${translated.second}`}
          />
        </Cell>

        <h2>{translated.millisecond}</h2>
        <Cell>
          <CountDown
            endTime={stateRef.current.endTime}
            millisecond
            format="HH:mm:ss:SS"
          />
        </Cell>

        <h2>{translated.serverTime}</h2>
        <Cell>
          <CountDown
            startTime={stateRef.current.serverTime}
            endTime={stateRef.current.endTime}
          />
        </Cell>

        <h2>{translated.async}</h2>
        <Cell>
          <CountDown endTime={asyncEnd} />
        </Cell>

        <h2>{translated.controlTime}</h2>
        <Cell>
          <CountDown
            endTime={stateRef.current.endTime}
            paused={paused}
            onPaused={onpaused}
            onRestart={onrestart}
          />
          <div style={{ position: 'absolute', right: '10px', top: '9px' }}>
            <div onClick={() => toggle()}>
              <Button type="primary" size="small">
                {paused ? translated.start : translated.stop}
              </Button>
            </div>
          </div>
        </Cell>

        <h2>{translated.customStyle}</h2>
        <Cell>
          <span>
            <CountDown endTime={stateRef.current.endTime} onUpdate={onUpdate}>
              <div
                className="countdown-part-box"
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <div className="part-item-symbol" style={partItemSymbolStyle}>
                  {resetTime.d}天
                </div>
                <div className="part-item h" style={partItemStyle}>
                  {resetTime.h}
                </div>
                <span className="part-item-symbol" style={partItemSymbolStyle}>
                  :
                </span>
                <div className="part-item m" style={partItemStyle}>
                  {resetTime.m}
                </div>
                <span className="part-item-symbol" style={partItemSymbolStyle}>
                  :
                </span>
                <div className="part-item s" style={partItemStyle}>
                  {resetTime.s}
                </div>
              </div>
            </CountDown>
          </span>
        </Cell>

        <h2>{translated.handleControl}</h2>
        <Cell>
          <CountDown
            format="ss:SS"
            autoStart={false}
            time={20000}
            ref={countDownRef}
          />
        </Cell>
        <Grid columns="3" style={{ marginBottom: '5px' }}>
          <GridItem>
            <Button type="primary" onClick={start}>
              {translated.start}
            </Button>
          </GridItem>
          <GridItem>
            <Button type="primary" onClick={pause}>
              {translated.pause}
            </Button>
          </GridItem>
          <GridItem>
            <Button type="primary" onClick={reset}>
              {translated.reset}
            </Button>
          </GridItem>
        </Grid>
      </div>
    </>
  )
}

export default CountDownDemo
