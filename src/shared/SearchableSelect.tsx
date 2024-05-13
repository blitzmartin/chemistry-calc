import type { ReactNode } from 'react'
import { useState } from 'react'

import { PhCaretDown } from '@/icons'

import { Badge, Button } from '.'
import { Popover, PopoverContent, PopoverTrigger } from './Popover'
import type {
  SearchableListMultiProps,
  SearchableListProps
} from './SearchableList'
import { SearchableList, SearchableListMulti } from './SearchableList'

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
          variant={variant || 'secondary'}
          role="combobox"
          aria-expanded={open}
          className="justify-between"
          data-testid={testId ?? ''}
          size={size || 'md'}
        >
          {selectedOptionLabel || placeholder}
          <PhCaretDown className="size-4 ml-2 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent align={align} className="h-fit p-0">
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

export const SearchableMultiSelect = ({
  options,
  placeholder,
  initialValues,
  values,
  onSelect,
  testId,
  align = 'start',
  ...rest
}: {
  placeholder?: ReactNode
  align?: 'start' | 'center' | 'end'
} & SearchableListMultiProps) => {
  const [open, setOpen] = useState(false)

  const [selectedValues, setSelectedValues] = useState(
    values || initialValues || []
  )
  const isControlled = values !== undefined
  const selectedState = isControlled ? values : selectedValues
  const handleSelection = (currentValues: string[]) => {
    setSelectedValues(currentValues)
    onSelect(currentValues)
  }

  const selectedOptions = options.filter((option) =>
    selectedState.includes(option.value)
  )

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="secondary"
          role="combobox"
          aria-expanded={open}
          data-testid={testId ?? ''}
          className="justify-between"
        >
          <div className="hide-scrollbar flex w-full gap-1 overflow-scroll">
            {selectedOptions.length === 0
              ? placeholder
              : selectedOptions.map((option) => (
                  <Badge key={option.value}>{option.label}</Badge>
                ))}
          </div>
          <PhCaretDown className="size-4 ml-2 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent align={align} className="h-48 p-0">
        <SearchableListMulti
          options={options}
          values={selectedValues}
          onSelect={(values) => handleSelection(values)}
          {...rest}
        />
      </PopoverContent>
    </Popover>
  )
}
