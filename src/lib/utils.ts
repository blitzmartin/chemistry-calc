import { SearchableSelectOption } from '@/pages/home'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { periodicTableElements } from './constants'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const calculateAtomicMass = (elementList: SearchableSelectOption[]) => {
  const foundElementsArr = elementList.map((el) => {
    const foundElement = periodicTableElements.find(
      (p) => p.symbol === el.symbol
    )
    if (foundElement) {
      return {
        numOf: el.counter,
        atomicMass: foundElement.atomic_mass
      }
    }
  })

  const result = foundElementsArr.reduce(
    (acc, curr) => acc + (curr?.numOf ?? 1) * (curr?.atomicMass ?? 0),
    0
  )
  return result
}
