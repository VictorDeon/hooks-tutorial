import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from "../../components/layout/SectionTitle"

function merge(s1, s2) {
    return [...s1].map((letter, index) => `${letter}${s2[index] || ""}`).join("")
}

// Basicamente quando você pega uma variavel e insere em outra vc ta fazendo uma passagem
// por referência, o useRef faz isso, faz a referência a um objeto.
// No exemplo, quero saber quantas vezes o component foi renderizado e juntar os 2 inputs mudando seu focus,
// quando modifica o valor da propriedade current no useRef não é realizado uma renderização da tela como
// acontece quando vc altera um estado no useState.
// Também é muito usado para trocar os focus dos inputs
const UseRef = props => {
    const [value01, setValue01] = useState("");
    const [value02, setValue02] = useState("");
    const renderCount = useRef(0);
    const input01 = useRef(null);
    const input02 = useRef(null);

    useEffect(() => {
        renderCount.current += 1;
        input02.current.focus();
    }, [value01])

    useEffect(() => {
        renderCount.current += 1;
        input01.current.focus();
    }, [value02])

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />

            <SectionTitle title="Exercício #01" />
            <div className='center'>
                <div>
                    <span className='text'>Valor: </span>
                    <span className='text'>{merge(value01, value02)} [</span>
                    <span className='text red'>{renderCount.current}</span>
                    <span className='text'>]</span>
                </div>
                <input
                    ref={input01}
                    type="text"
                    className='input'
                    value={value01}
                    onChange={event => setValue01(event.target.value)}
                />
            </div>

            <SectionTitle title="Exercício #02" />
            <div className='center'>
                <input
                    ref={input02}
                    type="text"
                    className='input'
                    value={value02}
                    onChange={event => setValue02(event.target.value)}
                />
            </div>
        </div>
    )
}

export default UseRef
