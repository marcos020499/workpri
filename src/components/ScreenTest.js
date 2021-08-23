import React, { useReducer, useState } from 'react'
/*
[
  { pared1: {
    width: 0,
    height: 0,
    door: [
      '2x2', ------
      '3x3',
    ]
    window: [
      '2x2', ...
    ]
  }}
]
*/

const useInput = () => {
    const [inputs, dispatch] = useReducer((s, a) => ({ ...s, ...a }), {})
    const [inputKeys, setKeys] = useState([])

    const handleInput = ({ target }) => {
        dispatch({ [target.name]: parseInt(target.value) || 0 })
    }

    const appendInput = (key) => {
        setKeys(s => [...s, key])
    }

    const popInput = () => {
        setKeys(s => s.slide(1))
    }

    return { inputs, inputKeys, handleInput, appendInput, popInput }
}

export function FieldText({ state, handleInput, appendInput, popInput }) {

    return (
        <div>
            <table>
                <thead style={{ display: 'flex', flexDirection: 'row' }}>
                    <tr>
                        <th>Largo</th>
                    </tr>
                    <tr>
                        <th>Ancho</th>
                    </tr>
                    <tr>
                        <th>Puerta</th>
                    </tr>
                    <tr>
                        <th>Ventana</th>
                    </tr>
                </thead>
                <tbody style={{ display: 'flex', flexDirection: 'row' }}>
                    <tr>
                        <td><Input /></td>
                    </tr>
                    <tr>
                        <td><Input /></td>
                    </tr>
                    <tr>
                        <td>{[1, 2, 3, 4].map((_, i) => <Input key={i} />)}</td>
                    </tr>
                    <tr>
                        <td>{[1, 2, 3, 4].map((_, i) => <Input key={i} />)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

function Input() {
    return <input type="input" />
}