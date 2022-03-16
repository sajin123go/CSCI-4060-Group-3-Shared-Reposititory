import React from 'react';
import MaterialTable from 'material-table';

const Table = () => {
    const data = [
        {name: 'Ramesh', email: 'ram@gmail.com', },
        {name: 'Vikas', email: 'vik@gmail.com'},
        {name: 'Ranjan', email: 'ran@gmail.com'},
        {name: 'Dan', email: 'dan@gmail.com'}
    ]
    const columns = [
        {
            title: 'Name', field: 'name'
        },
        {
            title: 'Email', field: 'email'
        }
    ]
    return (
    <div>
        <MaterialTable title ="Material Table" 
        data = {data}
        columns ={columns}/>
    </div>

  )
}

export default Table