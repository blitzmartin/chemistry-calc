import { SearchableSelectOption } from '@/lib/types'
import { calculateAtomicMass } from '@/lib/utils'
import { Button, Input, Label } from '@/shared'
import { PageContainer } from '@/shared/PageContainer'
import { produce } from 'immer'
import { useState } from 'react'
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
      <div className="flex flex-col gap-4">
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
        <Button disabled={noElementSelected} onClick={addMoleculeUnit}>
          {noElementSelected ? 'Please select element' : 'Add Molecule Unit'}
        </Button>
        <Button onClick={handleReset}>Reset</Button>
        <Label>Result:</Label>
        <Input value={calculateAtomicMass(formDataList)} readOnly />
      </div>
    </PageContainer>
  )
}
