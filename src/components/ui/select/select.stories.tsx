import type { Meta, StoryObj } from '@storybook/react'

import { Select } from '@/components/ui/select/select'

const meta = {
  argTypes: { onValueChange: { action: 'select changes' } },
  component: Select,
  tags: ['autodocs'],
  title: 'Components/Select',
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

const quiz = [
  { label: 'General Knowledge', value: '1' },
  { label: 'Sports Trivia', value: '2' },
  { label: 'Movie', value: '3' },
  { label: 'Science and Technology', value: '4' },
  { label: 'Music ', value: '5' },
]

export const SelectDemo: Story = {
  args: {
    disabled: false,
    label: 'Select',
    options: quiz,
    placeholder: 'Select item',
  },
}

export const SelectSmall: Story = {
  args: {
    disabled: false,
    label: 'Select',
    options: quiz,
    placeholder: 'Select item',
    small: true,
  },
}

export const SelectDisabled: Story = {
  args: {
    disabled: true,
    label: 'Select',
    options: quiz,
    placeholder: 'Select item',
  },
}
