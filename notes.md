# 渲染过程
    1.当组件的state、props发生改变时组件的render将会重新执行去渲染页面
# 虚拟DOM
    1.state 数据
    2.JSX 模板
    3.数据 + 模板结合，生成真实DOM显示
    4.state发生改变
    5.数据 + 模板结合，生成真实DOM替换原始DOM
缺陷：
    1.第一次生层一个DOM片段