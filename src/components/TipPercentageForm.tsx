
const tipOptions = [
  {
    id: 'tip-10',
    value: .10,
    label: '10%'
  },
  {
    id: 'tip-20',
    value: .20,
    label: '20%'
  },
  {
    id: 'tip-50',
    value: .50,
    label: '50%'
  },
]

type TipPercentageFormProps = {
  setTip: React.Dispatch<React.SetStateAction<number>>
  tip: number
}

const TipPercentageForm = ({ setTip, tip }: TipPercentageFormProps) => {
  return (
    <div>
        <h3 className="font-black text-2xl">Propina</h3>

        <form >
            <div className="flex items-center gap-2 mt-5">
                {
                    tipOptions.map((tipOption) => (
                        <div key={tipOption.id}>
                            <label htmlFor={tipOption.id}>{tipOption.label}</label>
                            <input 
                                id={tipOption.id}
                                type="radio" 
                                name="tip"
                                value={tipOption.value}
                                checked={tip === tipOption.value}
                                onChange={e => setTip(Number(e.target.value))}
                            />
                        </div>
                    ))
                } 
            </div>    
        </form>
    </div>
  )
}

export default TipPercentageForm