import "./eventList.css";
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { eventRows } from "../../dummyData";
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function EventList() {
  const [data, setData] = useState(eventRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "event",
      headerName: "Event",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="eventListItem">
            <img className="eventListImg" src={params.row.img} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "stock", headerName: "Date", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "price",
      headerName: "Amount Funded",
      width: 200,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/event/" + params.row.id}>
              <button className="eventListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="eventListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="eventList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
