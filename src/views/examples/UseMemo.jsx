import React, { useMemo, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

// Vamos fingir que essa função demora bastante para ser executada
function sum(x, y) {
    const future = Date.now() + 2000; // 2 segundos
    while(Date.now() < future) {}
    return x + y;
}

// O que queremos resolver com o useMemo é não deixar que a operação sum que demora 2 segundos impacte
// a execução do input 03 que não tem nada a ver com o sum. Podemos resolver isso usando o useEffect, mas
// também podemos usando o useMemo (armazena em cache)
const UseMemo = props => {
    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [n3, setN3] = useState(0);

    // Resultado é calculado e armazenado na variavel e só será chamado novamente caso os valores
    // definidos como dependencia se altere. Isso faz com que vc possa altera o N3 sem nenhum delay
    // causado pelo N1 e N2
    const result = useMemo(() => sum(n1, n2), [n1, n2]);

    return (
        <div className="UseMemo">
            <PageTitle
                title="Hook UseMemo"
                subtitle="Retorna um valor memorizado!"
            />

            <div className='center'>
                <input type="number" className='input' value={n1} onChange={event => setN1(parseInt(event.target.value))} />
                <input type="number" className='input' value={n2} onChange={event => setN2(parseInt(event.target.value))} />
                <input type="number" className='input' value={n3} onChange={event => setN3(parseInt(event.target.value))} />
                <span className='text'>{result}</span>
            </div>
        </div>
    )
}

export default UseMemo
