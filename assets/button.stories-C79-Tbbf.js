import{n as e}from"./chunk-BneVvdWh.js";import{n as t,t as n}from"./button-DTJ2HnMZ.js";var r,i,a,o,s,c,l,u;e((()=>{t(),r={title:`Components/Button`,component:n,tags:[`autodocs`],argTypes:{btnType:{control:`select`,options:[`primary`,`default`,`danger`,`link`],description:`设置按钮的视觉类型`},size:{control:`radio`,options:[`lg`,`sm`,void 0],description:`设置按钮尺寸`},disabled:{control:`boolean`,description:`是否禁用按钮`},href:{control:`text`,description:`点击跳转的地址 (仅 btnType="link" 时生效)`},children:{control:`text`,description:`按钮里的文字`}}},i={args:{children:`Default Button`}},a={args:{btnType:`primary`,children:`Primary Button`}},o={args:{btnType:`danger`,children:`Danger Button`}},s={args:{btnType:`link`,href:`https://google.com`,children:`Link Button`}},c={args:{size:`lg`,btnType:`primary`,children:`Large Primary`}},l={args:{disabled:!0,children:`Disabled Button`}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Default Button'
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    btnType: 'primary',
    children: 'Primary Button'
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    btnType: 'danger',
    children: 'Danger Button'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    btnType: 'link',
    href: 'https://google.com',
    children: 'Link Button'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    btnType: 'primary',
    children: 'Large Primary'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: 'Disabled Button'
  }
}`,...l.parameters?.docs?.source}}},u=[`Default`,`Primary`,`Danger`,`Link`,`LargeSize`,`Disabled`]}))();export{o as Danger,i as Default,l as Disabled,c as LargeSize,s as Link,a as Primary,u as __namedExportsOrder,r as default};