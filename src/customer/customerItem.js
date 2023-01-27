import   '../styles.css';

export const  CustomerItem = ({items, handleDelete, handleEdit})=> {

    return (
        <>
            {
                items.map((row, i) => {
                  return <tr  key={ i }>
                    <td> { row.id }</td>
                    <td> { row.dni }</td>
                    <td> { row.name }</td>
                    <td> { row.age }</td>
                    <td className="action_button">
                       <button
                         className="btn btn-success margin-button-grid"
                         onClick={()=>{handleEdit(row)}}
                       >
                          Editar
                      </button> 
                       <button
                         className="btn btn-danger margin-button-grid"
                         onClick={()=>{handleDelete(row.id)}}
                       >
                         Eliminar
                        </button> 
                    </td>
                  </tr>
                })
            }
        </>
    )
}