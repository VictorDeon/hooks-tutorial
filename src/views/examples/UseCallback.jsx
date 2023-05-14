import React, { useCallback, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import UseCallbackButtons from './UseCallbackButtons';

// É semelhante ao useMemo, só que o useMemo retorna um valor memorizado em cache e ele só vai calcular esse valor
// quando as dependências forem modificadas, no caso do useCallback ao inves do valor ele vai retornar uma função
// cacheada para que você possa usar a mesma função e não ter que criar novamente
const UseCallback = props => {
    const [count, setCount] = useState(0);

    // Só renderize novamente essa função se a dependencia mudar, no caso o setCount só renderiza
    // uma única vez então ela serve, no setCount temos que usar o current para não depender do count
    // já que esse muda sempre.
    const increment = useCallback(delta => {
        setCount(current => current + delta);
    }, [setCount])

    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memorizada!"
            />

            <div className='center'>
                <span className='text'>{count}</span>
                <UseCallbackButtons increment={increment} />
            </div>
        </div>
    )
}

export default UseCallback
