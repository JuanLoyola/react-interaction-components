// react Function Component, es el type
import { FC } from 'react'

const possibleSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

interface Props {
    selectedSize: string;
    onSizeChange: ( size: string ) => void
}

//<Props> da nota de que se va utilizar la interface ya definida anteriormente
export const SizeSelector: FC<Props> = ({ selectedSize, onSizeChange }) => {
  return (
    <div style={{ display: 'flex' }}>
        {
            possibleSizes.map( size => (
                <button key={ size }
                className={selectedSize === size ? 'active' : ''}
                onClick={ () => onSizeChange(size)}
                >
                    { size }
                </button>
            ))
        }
    </div>
  )
}
