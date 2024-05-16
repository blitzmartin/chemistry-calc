import type { ReactNode } from 'react'
import { useState } from 'react'

import { PhCaretDown } from '@/icons'

import { Button } from '.'
import { Popover, PopoverContent, PopoverTrigger } from './Popover'
import type { SearchableListProps } from './SearchableList'
import { SearchableList } from './SearchableList'

export const SearchableSelect = ({
  options,
  placeholder,
  initialValue,
  value,
  onSelect,
  testId,
  size,
  variant,
  align = 'start',
  ...rest
}: {
  placeholder?: ReactNode
  size?: 'sm' | 'md' | 'lg' | null | undefined
  variant?: 'outline' | 'ghost' | 'secondary' | 'link' | 'destructive'
  align?: 'start' | 'center' | 'end'
} & SearchableListProps) => {
  const [open, setOpen] = useState(false)

  const [selectedValue, setSelectedValue] = useState(
    value || initialValue || ''
  )
  const isControlled = value !== undefined
  const selectedState = isControlled ? value : selectedValue

  const handleSelection = (currentValue: string) => {
    setSelectedValue(currentValue)
    onSelect(currentValue)
    setOpen(false)
  }

  const selectedOptionLabel = options.find(
    (option) => option.value === selectedState
  )?.label

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={variant || 'outline'}
          role="combobox"
          aria-expanded={open}
          className="justify-between"
          data-testid={testId ?? ''}
          size={size || 'sm'}
        >
          {selectedOptionLabel || placeholder}
          <PhCaretDown className="ml-2 size-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent align={align} className="h-fit w-32 p-0">
        <SearchableList
          options={options}
          value={selectedValue}
          onSelect={(value) => handleSelection(value)}
          {...rest}
        />
      </PopoverContent>
    </Popover>
  )
}
