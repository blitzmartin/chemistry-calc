import { Button, Input, Label, SearchableSelect } from '@/shared'

export type MoleculeUnitProps = {
  formData: { counter: number; selectedElement: string }
  decreaseCounter: () => void
  increaseCounter: () => void
  elementOptions: { value: string; label: string }[]
  handleElementSelect: (value: string) => void
}

export const MoleculeUnit = ({
  formData,
  decreaseCounter,
  increaseCounter,
  elementOptions,
  handleElementSelect
}: MoleculeUnitProps) => {
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
            options={elementOptions}
            value={formData.selectedElement}
            onSelect={handleElementSelect}
            placeholder="Select"
          />
        </div>
      </div>
    </div>
  )
}
