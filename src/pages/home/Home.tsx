import { elements } from '@/lib/constants'
import { PageContainer } from '@/shared/PageContainer'
import { produce } from 'immer'
import { useState } from 'react'
import { MoleculeUnit } from './components/MoleculeUnit'

export const Home = () => {
  const [formData, setFormData] = useState({
    counter: 1,
    selectedElement: ''
  })

  const elementOptions = elements
    .sort((a, b) => a.symbol.localeCompare(b.symbol))
    .map((el) => ({
      value: el.symbol,
      label: el.symbol
    }))

  const increaseCounter = () => {
    setFormData(
      produce((draft) => {
        draft.counter++
      })
    )
  }

  const decreaseCounter = () => {
    if (formData.counter > 1) {
      setFormData(
        produce((draft) => {
          draft.counter--
        })
      )
    }
  }

  const handleElementSelect = (value: string) => {
    setFormData(
      produce((draft) => {
        draft.selectedElement = value
      })
    )
  }

  return (
    <PageContainer title="Calculator">
      <MoleculeUnit
        formData={formData}
        decreaseCounter={decreaseCounter}
        increaseCounter={increaseCounter}
        elementOptions={elementOptions}
        handleElementSelect={(value) => handleElementSelect(value)}
      />
    </PageContainer>
  )
}
