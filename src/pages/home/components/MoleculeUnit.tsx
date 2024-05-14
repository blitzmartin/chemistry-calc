import { periodicTableElements } from '@/lib/constants'
import { Button, Input, Label, SearchableSelect } from '@/shared'
import { SearchableSelectOption } from '../Home'

export type MoleculeUnitProps = {
  formData: SearchableSelectOption
  decreaseCounter: () => void
  increaseCounter: () => void
  handleElementSelect: (value: string) => void
}

export const MoleculeUnit = ({
  formData,
  decreaseCounter,
  increaseCounter,
  handleElementSelect
}: MoleculeUnitProps) => {
  const mappedElementOptions = periodicTableElements
    .sort((a, b) => a.symbol.localeCompare(b.symbol))
    .map((el) => ({
      value: el.symbol,
      label: el.symbol
    }))
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <div className="flex flex-col gap-2">
          <Label>Atoms</Label>
          <Input value={formData.counter} readOnly className="w-16" />
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
            options={mappedElementOptions}
            value={formData.symbol}
            onSelect={handleElementSelect}
            placeholder="Select"
          />
        </div>
      </div>
    </div>
  )
}
