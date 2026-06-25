import type { Meta, StoryObj } from '@storybook/react'
import { BrandCard } from './BrandCard'

const meta: Meta<typeof BrandCard> = {
  title: 'Theme/BrandCard',
  component: BrandCard,
  args: {
    children: 'Card content goes here',
  },
  argTypes: {
    title: { control: 'text' },
    className: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof BrandCard>

export const Default: Story = {}

export const WithTitle: Story = {
  args: { title: 'Card Title' },
}

export const WithCustomContent: Story = {
  args: {
    title: 'Subscription Info',
    children: (
      <dl className="flex flex-col gap-3 text-sm">
        <div className="flex justify-between">
          <dt className="text-text-muted">Plan</dt>
          <dd className="font-medium">Professional</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-text-muted">Status</dt>
          <dd className="font-medium text-primary">Active</dd>
        </div>
      </dl>
    ),
  },
}
