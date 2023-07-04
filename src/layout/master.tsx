import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useNavigate} from "react-router-dom";
// import { NavLink as Link } from 'react-router-dom';
const { Header, Content, Sider } = Layout;



const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const items2: MenuProps['items'] =  
[
  {
    "key": 1,
    "label": "Home"
  },
  {
    "key": 2,
    "label": "系统管理",
    "children": [{
            "key": 3,
            "label": "用户管理"
        }, {
            "key": 4,
            "label": "角色管理"
        }, {
            "key": 5,
            "label": "部门管理"
        }, {
            "key": 6,
            "label": "功能配置"
        }
    ]
  } 
]

// [UserOutlined, LaptopOutlined, NotificationOutlined].map(
//   (icon, index) => {
//     const key = String(index + 1); 
//     return {
//       key: `sub${key}`,
//       icon: React.createElement(icon) ,
//       label: `subnav ${key}`,

//       children: new Array(4).fill(null).map((_, j) => {
//         const subKey = index * 4 + j + 1;
//         return {
//           key: subKey,
//           icon: React.createElement(icon?icon:`Option${subKey}` ) ,
//           label: `option${subKey}`,
//         };
//       }),
//     };
//   },
// );


const breads = ['Home','List','App'];

// onClick={(e,items2) => {
//   navigate(e.key.replace("item-", ""))
// }}
 

const Master: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  let navigate = useNavigate();

const handleNav=(e:any)=>{ 
  navigate( e.keyPath[1]+'/'+ e.key.replace("item-", ""))
};

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
            onClick={(e)=>handleNav(e)}
          >
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
          {
            breads.map((item,idx)=>{
               return <span key={item}>{item}{ idx!==breads.length-1&&' /  '}</span>
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