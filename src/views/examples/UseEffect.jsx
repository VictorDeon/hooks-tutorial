import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from "../../components/layout/SectionTitle";

function calcFactorial(number) {
    const n = parseInt(number);
    if (n < 0) return -1;
    else if (n === 0) return 1;
    else return calcFactorial(n - 1) * n;
}

// Efeito colateral é quando você modifica um estado e essa modificação faz alguma outra
// modificação em algum outro lugar do component.
const UseEffect = props => {
    const [number, setNumber] = useState(1);
    const [fatorial, setFatorial] = useState(1);

    // Podemos usar o useEffect como um componentDidMount só não botar dependencia
    // nele você pode mudar o estado da aplicação sem causar loop
    useEffect(() => { console.log("Oi sou o componentDidMount do component de classe"); }, [])

    // Primeiro parâmetro é a função de efeito colateral (callback)
    // Segundo parâmetro é as dependencias que irá disparar o callback
    // Sempre que o number modificar eu quero calcular o fatorial passando esse number
    // e modificar o estado do fatorial.
    useEffect(() => { setFatorial(calcFactorial(number)); }, [number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exercício #01" />
            <div className='center'>
                <div>
                    <span className='text'>Fatorial: </span>
                    <span className='text red'>{fatorial <= 0 ? 'Não existe' : fatorial}</span>
                </div>
                <input type="number" className='input' value={number} onChange={event => setNumber(event.target.value)} />
            </div>
        </div>
    )
}

export default UseEffect
