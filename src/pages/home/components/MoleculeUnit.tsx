import { PhMinus, PhPlus } from '@/icons'
import { periodicTableElements } from '@/lib/constants'
import { SearchableSelectOption } from '@/lib/types'
import { Button, Input, Label, SearchableSelect } from '@/shared'

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
            <Button size="icon" variant="ghost" onClick={decreaseCounter}>
              <PhMinus className="text-primary" />
            </Button>
            <Button size="icon" variant="ghost" onClick={increaseCounter}>
              <PhPlus className="text-primary" />
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Label>Element</Label>
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
