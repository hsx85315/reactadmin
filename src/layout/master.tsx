import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useNavigate} from "react-router-dom";

const { Header, Content, Sider } = Layout;



const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1); 
    return {
      key: `sub${key}`,
      icon: React.createElement(icon) ,
      label: `subnav ${key}`,

      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          icon: React.createElement(icon?icon:`Option${subKey}` ) ,
          label: `option${subKey}`,
        };
      }),
    };
  },
);

console.log("items2==:", JSON.stringify( items2) );


const breads = ['Home','List','App'];

const handleNav= function({ item, key, keyPath, domEvent }){

  console.log( { item, key, keyPath, domEvent }  )

}

 

const Master: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  let navigate = useNavigate();


  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
      </Header>
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            items={items2}
            onClick={(e) => {
              navigate(e.key.replace("item-", ""))
            }}
          >
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
          {
            breads.map((item,idx)=>{
              if(idx===breads.length-1)
                return  <span key={item}>{item}</span>
              else
                return  <span key={item}>{item}&nbsp;/&nbsp;</span>
            })
          }
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Master;