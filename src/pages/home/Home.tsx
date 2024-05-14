import { elements } from '@/lib/constants'
import { Button } from '@/shared'
import { PageContainer } from '@/shared/PageContainer'
import { produce } from 'immer'
import { useState } from 'react'
import { MoleculeUnit } from './components/MoleculeUnit'

export const Home = () => {
  const [formDataList, setFormDataList] = useState([
    { counter: 1, selectedElement: '' }
  ])

  const elementOptions = elements
    .sort((a, b) => a.symbol.localeCompare(b.symbol))
    .map((el) => ({
      value: el.symbol,
      label: el.symbol
    }))

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

  const handleElementSelect = (index: number, value: string) => {
    setFormDataList(
      produce((draft) => {
        draft[index].selectedElement = value
      })
    )
  }

  const addMoleculeUnit = () => {
    setFormDataList((prevList) => [
      ...prevList,
      { counter: 1, selectedElement: '' }
    ])
  }

  const handleReset = () => {
    setFormDataList([{ counter: 1, selectedElement: '' }])
  }

  return (
    <PageContainer title="Calculator">
      <div className="flex flex-col gap-4">
        {formDataList.map((formData, index) => (
          <MoleculeUnit
            key={index}
            formData={formData}
            decreaseCounter={() => decreaseCounter(index)}
            increaseCounter={() => increaseCounter(index)}
            elementOptions={elementOptions}
            handleElementSelect={(value) => handleElementSelect(index, value)}
          />
        ))}
        <Button onClick={addMoleculeUnit}>Add Molecule Unit</Button>
        <Button onClick={handleReset}>Reset</Button>
      </div>
    </PageContainer>
  )
}
