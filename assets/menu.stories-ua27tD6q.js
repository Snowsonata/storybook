import{a as e,n as t}from"./chunk-BneVvdWh.js";import{O as n}from"./iframe-AJzGP-UB.js";import{t as r}from"./jsx-runtime-D16BNjX-.js";import{t as i}from"./classnames-BmD4jabB.js";var a=t((()=>{})),o,s,c,l,u,d=t((()=>{o=e(n(),1),s=e(i(),1),a(),c=r(),l=(0,o.createContext)({index:`0`}),u=e=>{let{className:t,mode:n=`horizontal`,children:r,defaultIndex:i=`0`,onSelect:a}=e,[u,d]=(0,o.useState)(i),f=(0,s.default)(`v-menu`,t,{"menu-vertical":n===`vertical`,"menu-horizontal":n!==`vertical`}),p={index:u||`0`,onSelect:e=>{d(e),a&&a(e)}};return(0,c.jsx)(`ul`,{className:f,"data-testid":`test-menu`,children:(0,c.jsx)(l.Provider,{value:p,children:r})})},u.__docgenInfo={description:``,methods:[],displayName:`Menu`,props:{defaultIndex:{required:!1,tsType:{name:`string`},description:`默认高亮的菜单项索引`},className:{required:!1,tsType:{name:`string`},description:``},mode:{required:!1,tsType:{name:`union`,raw:`'horizontal' | 'vertical'`,elements:[{name:`literal`,value:`'horizontal'`},{name:`literal`,value:`'vertical'`}]},description:`菜单模式，默认横向`},onSelect:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(selectedIndex: string) => void`,signature:{arguments:[{type:{name:`string`},name:`selectedIndex`}],return:{name:`void`}}},description:`点击菜单项触发的回调`},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``}}}})),f,p,m,h,g=t((()=>{f=e(n(),1),p=e(i(),1),d(),m=r(),h=e=>{let{index:t,disabled:n,className:r,children:i}=e,a=(0,f.useContext)(l),o=(0,p.default)(`v-menu-item`,r,{"is-disabled":n,"is-active":a.index===t});return(0,m.jsx)(`li`,{className:o,onClick:()=>{a.onSelect&&!n&&typeof t==`string`&&a.onSelect(t)},children:i})},h.__docgenInfo={description:``,methods:[],displayName:`MenuItem`,props:{index:{required:!0,tsType:{name:`string`},description:`菜单项的唯一标识`},disabled:{required:!1,tsType:{name:`boolean`},description:`是否禁用`},className:{required:!1,tsType:{name:`string`},description:``},children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``}}}})),_,v,y,b,x;t((()=>{d(),g(),_=r(),v={title:`Components/Menu`,component:u,tags:[`autodocs`],argTypes:{defaultIndex:{control:`text`,description:`默认激活的菜单项索引`},mode:{control:`radio`,options:[`horizontal`,`vertical`],description:`菜单布局模式`},onSelect:{action:`selected`,description:`点击触发的回调`}}},y={args:{defaultIndex:`0`,mode:`horizontal`},render:e=>(0,_.jsxs)(u,{...e,children:[(0,_.jsx)(h,{index:`0`,children:`首页`}),(0,_.jsx)(h,{index:`1`,children:`产品中心`}),(0,_.jsx)(h,{index:`2`,disabled:!0,children:`关于我们 (禁用)`}),(0,_.jsx)(h,{index:`3`,children:`联系方式`})]})},b={args:{defaultIndex:`1`,mode:`vertical`},render:e=>(0,_.jsxs)(u,{...e,children:[(0,_.jsx)(h,{index:`0`,children:`个人中心`}),(0,_.jsx)(h,{index:`1`,children:`订单管理`}),(0,_.jsx)(h,{index:`2`,children:`账号设置`})]})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    defaultIndex: '0',
    mode: 'horizontal'
  },
  render: args => <Menu {...args}>\r
      <MenuItem index="0">首页</MenuItem>\r
      <MenuItem index="1">产品中心</MenuItem>\r
      <MenuItem index="2" disabled>关于我们 (禁用)</MenuItem>\r
      <MenuItem index="3">联系方式</MenuItem>\r
    </Menu>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    defaultIndex: '1',
    mode: 'vertical'
  },
  render: args => <Menu {...args}>\r
      <MenuItem index="0">个人中心</MenuItem>\r
      <MenuItem index="1">订单管理</MenuItem>\r
      <MenuItem index="2">账号设置</MenuItem>\r
    </Menu>
}`,...b.parameters?.docs?.source}}},x=[`DefaultHorizontal`,`VerticalMode`]}))();export{y as DefaultHorizontal,b as VerticalMode,x as __namedExportsOrder,v as default};