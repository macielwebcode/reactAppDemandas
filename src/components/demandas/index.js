import React from "react";


export default function Demandas({ listDemandas, handleEdit, handleDelete }){
    return(
        <div className='contentDefault'>
            <ul>
                {listDemandas.map((item, index) =>
                    <li key={item} className='itemDemanda'>{item}
                        <button
                            onClick={(e) => handleEdit(e, index)} 
                            className='edit_btn'>Edit
                        </button>
                        <button 
                            onClick={(e) => handleDelete(e, index)} 
                            className='delete_btn'>Close
                        </button>
                    </li> 
                )}
            </ul>
        </div>
    )
}

// Demandas.PropTypes = {
//     listDemandas: PropTypes.array.isRequired,
//     handleEdit: PropTypes.func.isRequired,
//     handleDelete: PropTypes.func.isRequired
// }