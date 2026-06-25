import type { Meta, StoryObj } from '@storybook/react'
import { BrandButton } from './BrandButton'

const meta: Meta<typeof BrandButton> = {
  title: 'Theme/BrandButton',
  component: BrandButton,
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md',
  },
  argTypes: {
    variant: { control: 'select', options: ['primary', 'outline'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    disabled: { control: 'boolean' },
    'aria-busy': { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
}

export default meta
type Story = StoryObj<typeof BrandButton>

export const Primary: Story = {}

export const Outline: Story = {
  args: { variant: 'outline' },
}

export const Small: Story = {
  args: { size: 'sm' },
}

export const Large: Story = {
  args: { size: 'lg' },
}

export const Disabled: Story = {
  args: { disabled: true },
}

export const Loading: Story = {
  args: { 'aria-busy': true, children: 'Loading…' },
}

export const AllVariants: Story = {
  render: (args) => (
    <div className="flex gap-4 items-center">
      <BrandButton {...args} variant="primary">Primary</BrandButton>
      <BrandButton {...args} variant="outline">Outline</BrandButton>
    </div>
  ),
}

export const AllSizes: Story = {
  render: (args) => (
    <div className="flex gap-4 items-center">
      <BrandButton {...args} size="sm">Small</BrandButton>
      <BrandButton {...args} size="md">Medium</BrandButton>
      <BrandButton {...args} size="lg">Large</BrandButton>
    </div>
  ),
}
