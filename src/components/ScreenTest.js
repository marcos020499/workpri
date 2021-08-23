import React from 'react'
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

export function FieldText({ }) {
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