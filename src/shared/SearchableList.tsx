import { PhCheckBold } from '@/icons'
import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'
import { useEffect, useRef, useState } from 'react'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from './Command'

export type SearchableListProps =
  | SearchableListControlledProps
  | SearchableListUncontrolledProps

type SearchableListControlledProps = SearchableListBaseProps & {
  value: string
  initialValue?: never
}

type SearchableListUncontrolledProps = SearchableListBaseProps & {
  value?: never
  initialValue?: string
}

type SearchableListBaseProps = {
  options: { value: string; label: string }[]
  onSelect: (value: string) => void
  onCancel?: () => void
  renderOnEmpty?: ReactNode
  inputPlaceholder?: string
  showCheckbox?: boolean
  testId?: string
  cannotBeEmpty?: boolean
}

export const SearchableList = ({
  options,
  initialValue,
  value,
  onSelect,
  onCancel,
  renderOnEmpty,
  inputPlaceholder,
  showCheckbox = false,
  testId = '',
  cannotBeEmpty = false
}: SearchableListProps) => {
  const [selectedValue, setSelectedValue] = useState(
    initialValue || value || ''
  )
  const isControlled = value !== undefined
  const selectedState = isControlled ? value : selectedValue

  const handleSelection = (currentValue: string) => {
    if (cannotBeEmpty && selectedState === currentValue) {
      setSelectedValue(selectedState)
      onSelect(selectedState)
      return
    }

    const newValue = selectedState === currentValue ? '' : currentValue

    setSelectedValue(newValue)
    onSelect(newValue)
  }

  const [search, setSearch] = useState('')
  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    ref.current?.focus()
  }, [])

  const shouldIconBeVisible = (optionValue: string) => {
    return selectedState === optionValue
  }

  return (
    <Command
      onKeyDown={(e) => {
        // Escape goes to previous page
        // Backspace goes to previous page when search is empty
        if (e.key === 'Escape' || (e.key === 'Backspace' && !search)) {
          e.preventDefault()
          if (onCancel) {
            onCancel()
          }
        }
      }}
      data-testid={testId}
    >
      <CommandInput
        ref={ref}
        value={search}
        onValueChange={setSearch}
        placeholder={inputPlaceholder || 'Search...'}
      />
      <CommandList>
        <CommandEmpty>{renderOnEmpty || 'Not found'}</CommandEmpty>
        <CommandGroup className="hide-scrollbar overflow-scroll">
          {options.map((option) => (
            <CommandItem
              key={option.value}
              value={option.label}
              onSelect={() => handleSelection(option.value)}
              aria-selected={shouldIconBeVisible(option.value)}
            >
              {showCheckbox && (
                <div
                  className={cn(
                    'mr-2 flex size-3 shrink-0 items-center justify-center rounded-[3px] border border-color ring-offset-background',
                    {
                      'border-link text-link': shouldIconBeVisible(option.value)
                    }
                  )}
                >
                  {shouldIconBeVisible(option.value) && (
                    <PhCheckBold className="size-2" />
                  )}
                </div>
              )}
              {option.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  )
}

export type SearchableListMultiProps =
  | SearchableListMultiControlledProps
  | SearchableListMultiUncontrolledProps

type SearchableListMultiControlledProps = SearchableListMultiBaseProps & {
  values: string[]
  initialValues?: never
}

type SearchableListMultiUncontrolledProps = SearchableListMultiBaseProps & {
  values?: never
  initialValues?: string[]
}

type SearchableListMultiBaseProps = {
  options: { value: string; label: string }[]
  initialValues?: string[]
  values?: string[]
  onSelect: (value: string[]) => void
  onCancel?: () => void
  renderOnEmpty?: ReactNode
  inputPlaceholder?: string
  testId?: string
  cannotBeEmpty?: boolean
}

export const SearchableListMulti = ({
  options,
  initialValues,
  values,
  onSelect,
  onCancel,
  renderOnEmpty,
  inputPlaceholder,
  testId = '',
  cannotBeEmpty = false
}: SearchableListMultiProps) => {
  const [selectedValues, setSelectedValues] = useState(
    initialValues || values || []
  )
  const isControlled = values !== undefined
  const selectedState = isControlled ? values : selectedValues

  const handleSelection = (currentValue: string) => {
    const isValueAlreadySelected = selectedState.includes(currentValue)

    if (cannotBeEmpty && selectedState.length === 1 && isValueAlreadySelected) {
      setSelectedValues(selectedState)
      onSelect(selectedState)
      return
    }

    const newSelectedValues = isValueAlreadySelected
      ? selectedState.filter((value) => value !== currentValue)
      : [...selectedState, currentValue]
    setSelectedValues(newSelectedValues)
    onSelect(newSelectedValues)
  }

  const [search, setSearch] = useState('')
  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    ref.current?.focus()
  }, [])

  const shouldIconBeVisible = (optionValue: string) => {
    return selectedState.includes(optionValue)
  }

  return (
    <Command
      onKeyDown={(e) => {
        // Escape goes to previous page
        // Backspace goes to previous page when search is empty
        if (e.key === 'Escape' || (e.key === 'Backspace' && !search)) {
          e.preventDefault()
          if (onCancel) {
            onCancel()
          }
        }
      }}
      data-testid={testId}
    >
      <CommandInput
        ref={ref}
        value={search}
        onValueChange={setSearch}
        placeholder={inputPlaceholder || 'Search...'}
      />
      <CommandList>
        <CommandEmpty>{renderOnEmpty || 'Not found'}</CommandEmpty>
        <CommandGroup className="hide-scrollbar overflow-scroll">
          {options.map((option) => (
            <CommandItem
              key={option.value}
              value={option.label}
              onSelect={() => handleSelection(option.value)}
              aria-selected={shouldIconBeVisible(option.value)}
            >
              <div
                className={cn(
                  'mr-2 flex size-3 shrink-0 items-center justify-center rounded-[3px] border border-color ring-offset-background',
                  {
                    'border-link text-link': shouldIconBeVisible(option.value)
                  }
                )}
              >
                {shouldIconBeVisible(option.value) && (
                  <PhCheckBold className="size-2" />
                )}
              </div>
              {option.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
