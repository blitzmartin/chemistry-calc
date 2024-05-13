import { Button, Input, Label } from '@/shared'
import { PageContainer } from '@/shared/PageContainer'
import { useState } from 'react'

export const Home = () => {
  const [counter, setCounter] = useState(1)

  const increaseCounter = () => {
    setCounter((prevCounter) => prevCounter + 1)
  }

  const decreaseCounter = () => {
    if (counter > 1) {
      setCounter((prevCounter) => prevCounter - 1)
    }
  }

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
          <Input value={counter} readOnly className="w-16" />
        </div>
      </div>
    </PageContainer>
  )
}
