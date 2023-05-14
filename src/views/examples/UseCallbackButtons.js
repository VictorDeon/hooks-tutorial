import React from 'react'

// Se as propriedades (props) não sofrerem mudanças o component não precisa ser renderizado novamente.
// Quando modifico o estado do UseCallback que utiliza essa função, ele renderiza ela tb e não queremos isso.
// Com o React.memo vamos criar um cache desse component e ele só irá renderizar novamente se a props passada
// a ele forem modificadas, no caso o increment.
// o hook useCallback vai fazer com que o increment não renderize esse component sempre que mudar o estado na
// função pai.
const UseCallbackButtons = props => {
    console.log("Renderizei...")
    return (
        <div>
            <button className='btn' onClick={() => props.increment(6)}>+6</button>
            <button className='btn' onClick={() => props.increment(12)}>+12</button>
            <button className='btn' onClick={() => props.increment(18)}>+18</button>
        </div>
    )
}

export default React.memo(UseCallbackButtons);