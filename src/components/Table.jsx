import React from 'react';

const Table = ({ data, orderField }) => {
    if(data.length===0) return null;
    return (<table>
        <thead>
            <tr>
                {
                    Object.keys(data[0]).map(
                        (keyName, i) => {
                            return (
                                <th onClick={()=>orderField(keyName)} key={i}>{keyName}</th>
                            )
                        }
                    )
                }
            </tr>
        </thead>
        <tbody>
            {
                data.map(
                    (element, i) => {
                        return (
                            <tr key={"tr_" + i}>
                                {
                                    Object.keys(element).map(
                                        (keyName, j) => {
                                            return <td key={"td_" + i + "_" + j}>{element[keyName]}</td>
                                        }
                                    )
                                }
                            </tr>
                        )
                    }
                )
            }
        </tbody>
    </table>);
};

export default Table;
