import React, { useState } from 'react'
import Taro from '@tarojs/taro'
import { Share, More, Cart, ArrowLeft, Close } from '@nutui/icons-react-taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import { NavBar, Tabs, TabPane } from '@/packages/nutui.react.taro'
import Header from '@/sites/components/header'
import '@/packages/navbar/demo.scss'

interface T {
  ce5c5446: string
  c38a08ef: string
  b840c88f: string
  a74a1fd4: string
  '8dab2f66': string
  cfbdc781: string
  c3a3a1d2: string
  e51e4582: string
}

const NavBarDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      ce5c5446: '基础用法',
      c38a08ef: '订单详情',
      b840c88f: '标题',
      a74a1fd4: '返回',
      '8dab2f66': '编辑',
      cfbdc781: '清空',
      c3a3a1d2: '购物车',
      e51e4582: '浏览记录',
    },
    'zh-TW': {
      ce5c5446: '基礎用法',
      c38a08ef: '訂單詳情',
      b840c88f: '標題',
      a74a1fd4: '返回',
      '8dab2f66': '編輯',
      cfbdc781: '清空',
      c3a3a1d2: '購物車',
      e51e4582: '瀏覽記錄',
    },
    'en-US': {
      ce5c5446: 'Basic usage',
      c38a08ef: 'order details',
      b840c88f: 'title',
      a74a1fd4: 'return',
      '8dab2f66': 'edit',
      cfbdc781: 'empty',
      c3a3a1d2: 'shopping cart',
      e51e4582: 'Browsing history',
    },
  })
  const [tab1value, setTab1value] = useState<string | number>('0')
  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>{translated.ce5c5446}</h2>
        <NavBar
          back={
            <>
              <ArrowLeft size={14} />
              {translated.a74a1fd4}
            </>
          }
          right={
            <span
              className="flex-center"
              onClick={(e) => Taro.showToast({ title: 'icon' })}
            >
              <Share size={14} />
            </span>
          }
          onBackClick={(e) => Taro.showToast({ title: translated.a74a1fd4 })}
        >
          <span onClick={(e) => Taro.showToast({ title: translated.b840c88f })}>
            {translated.c38a08ef}
          </span>
        </NavBar>

        <NavBar
          right={
            <span
              onClick={(e) => Taro.showToast({ title: translated.cfbdc781 })}
            >
              {translated.cfbdc781}
            </span>
          }
          left={<Close size={14} />}
          back={<ArrowLeft size={14} />}
          onBackClick={(e) => Taro.showToast({ title: translated.a74a1fd4 })}
        >
          <div className="title">
            <span
              onClick={(e) => Taro.showToast({ title: translated.cfbdc781 })}
            >
              {translated.e51e4582}
            </span>
            <span className="desc">{translated.e51e4582}</span>
          </div>
        </NavBar>
        <NavBar
          back={<ArrowLeft size={14} />}
          right={
            <>
              <span
                style={{ marginRight: '5px' }}
                onClick={(e) =>
                  Taro.showToast({ title: translated['8dab2f66'] })
                }
              >
                {translated['8dab2f66']}
              </span>
              <More
                size={20}
                onClick={(e) => Taro.showToast({ title: 'icon' })}
              />
            </>
          }
          onBackClick={(e) => Taro.showToast({ title: translated.a74a1fd4 })}
        >
          <span onClick={(e) => Taro.showToast({ title: translated.b840c88f })}>
            {translated.c3a3a1d2}
          </span>
          <i
            style={{ marginLeft: '5px' }}
            className="flex-center"
            onClick={(e) => Taro.showToast({ title: 'icon' })}
          >
            <Cart size={14} />
          </i>
        </NavBar>

        <NavBar
          back={<ArrowLeft size={14} />}
          right={
            <>
              <span
                style={{ marginRight: '5px' }}
                onClick={(e) =>
                  Taro.showToast({ title: translated['8dab2f66'] })
                }
              >
                {translated['8dab2f66']}
              </span>
              <More
                size={20}
                onClick={(e) => Taro.showToast({ title: 'icon' })}
              />
            </>
          }
          onBackClick={(e) => Taro.showToast({ title: translated.a74a1fd4 })}
        >
          <div>
            <Tabs
              value={tab1value}
              onChange={(paneKey) => {
                setTab1value(paneKey)
              }}
            >
              <TabPane title="Tab 1"> Tab 1 </TabPane>
              <TabPane title="Tab 2"> Tab 2 </TabPane>
              <TabPane title="Tab 3"> Tab 3 </TabPane>
            </Tabs>
          </div>
        </NavBar>
        <NavBar
          titleAlign="left"
          back={
            <>
              <ArrowLeft size={14} />
              {translated.a74a1fd4}
            </>
          }
          right={
            <span
              className="flex-center"
              onClick={(e) => Taro.showToast({ title: 'icon' })}
            >
              <Share size={14} />
            </span>
          }
          onBackClick={(e) => Taro.showToast({ title: translated.a74a1fd4 })}
        >
          <span onClick={(e) => Taro.showToast({ title: translated.b840c88f })}>
            {translated.c38a08ef}
          </span>
        </NavBar>

        <NavBar
          titleAlign="left"
          right={
            <span
              onClick={(e) => Taro.showToast({ title: translated.cfbdc781 })}
            >
              {translated.cfbdc781}
            </span>
          }
          left={<Close size={14} />}
          back={<ArrowLeft size={14} />}
          onBackClick={(e) => Taro.showToast({ title: translated.a74a1fd4 })}
        >
          <div className="title">
            <span
              onClick={(e) => Taro.showToast({ title: translated.cfbdc781 })}
            >
              {translated.e51e4582}
            </span>
            <span className="desc">{translated.e51e4582}</span>
          </div>
        </NavBar>
        <NavBar
          titleAlign="left"
          back={<ArrowLeft size={14} />}
          right={
            <>
              <span
                style={{ marginRight: '5px' }}
                onClick={(e) =>
                  Taro.showToast({ title: translated['8dab2f66'] })
                }
              >
                {translated['8dab2f66']}
              </span>
              <More
                size={20}
                onClick={(e) => Taro.showToast({ title: 'icon' })}
              />
            </>
          }
          onBackClick={(e) => Taro.showToast({ title: translated.a74a1fd4 })}
        >
          <span onClick={(e) => Taro.showToast({ title: translated.b840c88f })}>
            {translated.c3a3a1d2}
          </span>
          <i
            style={{ marginLeft: '5px' }}
            className="flex-center"
            onClick={(e) => Taro.showToast({ title: 'icon' })}
          >
            <Cart size={14} />
          </i>
        </NavBar>
        <NavBar
          titleAlign="left"
          back={<ArrowLeft size={14} />}
          right={
            <>
              <span
                style={{ marginRight: '5px' }}
                onClick={(e) =>
                  Taro.showToast({ title: translated['8dab2f66'] })
                }
              >
                {translated['8dab2f66']}
              </span>
              <More
                size={20}
                onClick={(e) => Taro.showToast({ title: 'icon' })}
              />
            </>
          }
          onBackClick={(e) => Taro.showToast({ title: translated.a74a1fd4 })}
        >
          <div>
            <Tabs
              className="navbar-tabs"
              align="left"
              activeType="simple"
              value={tab1value}
              onChange={(paneKey) => {
                setTab1value(paneKey)
              }}
            >
              <TabPane title="Tab 1"> Tab 1 </TabPane>
              <TabPane title="Tab 2"> Tab 2 </TabPane>
              <TabPane title="Tab 3"> Tab 3 </TabPane>
            </Tabs>
          </div>
        </NavBar>
      </div>
    </>
  )
}

export default NavBarDemo
