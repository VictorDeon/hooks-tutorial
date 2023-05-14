import React, { useContext } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { AppContext } from '../../data/store'

// Você pode ter quantos providers vc quiser um dentro do outro
const UseContext = props => {
    const {number, text, setNumber} = useContext(AppContext);

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />

            <div className='center'>
                <span className='text'>{text}</span>
                <span className='text'>{number}</span>

                <div>
                    <button className='btn' onClick={() => setNumber(number - 1)}>-1</button>
                    <button className='btn' onClick={() => setNumber(number + 1)}>+1</button>
                </div>
            </div>
        </div>
    )
}

export default UseContext
