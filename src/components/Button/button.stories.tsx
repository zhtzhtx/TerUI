import React from 'react';
import { Button } from './button';

import { ComponentStory, ComponentMeta } from '@storybook/react';

const buttonMeta: ComponentMeta<typeof Button> = {
    title: "按钮：Button",
    component: Button
}

export default buttonMeta

const Template: ComponentStory<typeof Button> = (args) => (
    <Button {...args}></Button>
)

export const Default = Template.bind({})

Default.args = {
    children: "Default Button"
}

Default.storyName = "默认按钮样式"

export const BButtonWithSize = () => (
    <>
        <Button size="lg"> large button </Button>
        <Button size="sm"> small button </Button>
    </>
)
BButtonWithSize.storyName = '不同尺寸的按钮'

export const CButtonWithType = () => (
    <>
        <Button btnType="primary"> primary button </Button>
        <Button btnType="danger"> danger button </Button>
        <Button btnType="link" href="https://google.com"> link button </Button>
    </>
)

CButtonWithType.storyName = '不同类型的按钮'