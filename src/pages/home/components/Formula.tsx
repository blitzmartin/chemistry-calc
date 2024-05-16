import { SearchableSelectOption } from '@/lib/types'

export const Formula = ({ data }: { data: SearchableSelectOption[] }) => {
  return (
    <div>
      {data.map(
        (d) =>
          d.symbol !== '' && (
            <>
              <span>{d.symbol}</span>
              {d.counter !== 1 && <sub>{d.counter.toString()}</sub>}
            </>
          )
      )}
    </div>
  )
}
