import { PhPlus } from '@/icons'
import { SearchableSelectOption } from '@/lib/types'
import { calculateAtomicMass } from '@/lib/utils'
import { Button, Input, Label } from '@/shared'
import { PageContainer } from '@/shared/PageContainer'
import { produce } from 'immer'
import { useState } from 'react'
import { Formula } from './components/Formula'
import { MoleculeUnit } from './components/MoleculeUnit'

export const Home = () => {
  const [formDataList, setFormDataList] = useState<SearchableSelectOption[]>([
    { counter: 1, symbol: '' }
  ])
  const noElementSelected = formDataList[formDataList.length - 1].symbol === ''

  const increaseCounter = (index: number) => {
    setFormDataList(
      produce((draft) => {
        draft[index].counter++
      })
    )
  }

  const decreaseCounter = (index: number) => {
    if (formDataList[index].counter > 1) {
      setFormDataList(
        produce((draft) => {
          draft[index].counter--
        })
      )
    }
  }

  const handleChange = (index: number, e: string) => {
    const counter = parseInt(e)
    if (counter > 0)
      setFormDataList(
        produce((draft) => {
          draft[index].counter = counter
        })
      )
  }

  const handleElementSelect = (index: number, value: string) => {
    setFormDataList(
      produce((draft) => {
        draft[index].symbol = value
      })
    )
  }

  const addMoleculeUnit = () => {
    setFormDataList((prevList) => [...prevList, { counter: 1, symbol: '' }])
  }

  const handleReset = () => {
    setFormDataList([{ counter: 1, symbol: '' }])
  }

  return (
    <PageContainer title="Atomic Mass Calculator">
      <div className="flex flex-col gap-10">
        <div className="flex gap-4">
          <div className="flex flex-col gap-2">
            <Label>Result</Label>
            <Input value={calculateAtomicMass(formDataList)} readOnly />
          </div>
          <div className="flex w-full flex-col gap-2">
            <Label>Formula</Label>
            <div className="flex h-full items-center">
              {formDataList[0].symbol !== '' ? (
                <Formula data={formDataList} />
              ) : (
                <div>...</div>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 md:max-w-[1200px]">
          {formDataList.map((formData, index) => (
            <MoleculeUnit
              key={index}
              formData={formData}
              onChange={(e) => handleChange(index, e)}
              decreaseCounter={() => decreaseCounter(index)}
              increaseCounter={() => increaseCounter(index)}
              handleElementSelect={(value) => handleElementSelect(index, value)}
            />
          ))}
          <div className="flex items-center">
            <Button
              variant="outline"
              size="sm"
              disabled={noElementSelected}
              onClick={addMoleculeUnit}
            >
              <PhPlus />
            </Button>
          </div>
        </div>
        <div className="flex">
          <Button onClick={handleReset}>Reset</Button>
        </div>
      </div>
    </PageContainer>
  )
}
