import { CustomElement, elements } from '@/lib/constants'
import { Button, Input, Label, SearchableSelect } from '@/shared'
import { PageContainer } from '@/shared/PageContainer'
import { useEffect, useState } from 'react'

export const Home = () => {
  const [counter, setCounter] = useState(1)
  const [selectedElement, setSelectedElement] = useState('')
  const [elementObj, setElementObj] = useState<CustomElement | null>()

  const elementOptions = elements
    .sort((a, b) => a.symbol.localeCompare(b.symbol))
    .map((el) => ({
      value: el.symbol,
      label: el.symbol
    }))

  useEffect(() => {
    const selected = elements.find((el) => el.symbol === selectedElement)
    if (selected) {
      setElementObj(selected)
    }
  }, [selectedElement])

  const increaseCounter = () => {
    setCounter((prevCounter) => prevCounter + 1)
  }

  const decreaseCounter = () => {
    if (counter > 1) {
      setCounter((prevCounter) => prevCounter - 1)
    }
  }
  console.log(elements)

  return (
    <PageContainer title="Calculator">
      <div className="flex gap-4">
        <div className="flex flex-col gap-2">
          <Label>Atoms</Label>
          <Input value={counter} readOnly className="w-16" />
          <div className="flex gap-1">
            <Button size="icon" onClick={decreaseCounter}>
              -
            </Button>
            <Button size="icon" onClick={increaseCounter}>
              +
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Label>El</Label>
          <SearchableSelect
            options={elementOptions}
            value={selectedElement}
            onSelect={(value) => setSelectedElement(value)}
            placeholder="Select"
          />
        </div>
        <div>
          {elementObj && (
            <img
              src={elementObj.image.url || ''}
              alt={elementObj.name || ''}
              className="size-32 rounded-md object-cover"
            />
          )}
        </div>
      </div>
    </PageContainer>
  )
}

export const selectOptions = [
  {
    value: 'Oxygen',
    label: 'Oxygen'
  },
  {
    value: 'Hydrogen',
    label: 'Hydrogen'
  },
  {
    value: 'Tungsten',
    label: 'Tungsten'
  },
  {
    value: 'Nitrogen',
    label: 'Nitrogen'
  }
]
