import { PhMinus, PhPlus } from '@/icons'
import { periodicTableElements } from '@/lib/constants'
import { SearchableSelectOption } from '@/lib/types'
import { Button, Input, Label, SearchableSelect } from '@/shared'

export type MoleculeUnitProps = {
  formData: SearchableSelectOption
  onChange: (value: string) => void
  decreaseCounter: () => void
  increaseCounter: () => void
  handleElementSelect: (value: string) => void
}

export const MoleculeUnit = ({
  formData,
  onChange,
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
          <Label>Element</Label>
          <SearchableSelect
            options={mappedElementOptions}
            value={formData.symbol}
            onSelect={handleElementSelect}
            placeholder="Select"
            variant="ghost"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label>Atoms</Label>
          <Input
            value={formData.counter}
            onChange={(e) => onChange(e.target.value)}
            className="w-16 border-none"
          />
          <div className="flex gap-1">
            <Button
              size="icon"
              variant="ghost"
              onClick={decreaseCounter}
              disabled={formData.counter === 1}
            >
              <PhMinus className="text-primary" />
            </Button>
            <Button size="icon" variant="ghost" onClick={increaseCounter}>
              <PhPlus className="text-primary" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
