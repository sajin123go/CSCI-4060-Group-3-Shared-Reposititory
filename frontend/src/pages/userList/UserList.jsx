import "./userList.css";
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { userRows } from "../../dummyData";
import { Link,useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "../../axios";

export default function UserList() {
  const navigate = useNavigate();
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    axios
//.post("/register", {token,firstName,lastName, email, password })
.delete("/member/delete/"+id)
.then((res) => {
  const updatedData = data.filter(member=>member.id!=id)
  setData(updatedData);
  navigate("/users");
})
  };
  
  useEffect(() => {
      const dummyArray = [];
    // Update the document title using the browser API
    axios.get("/admin/member/allMembers").then(
      res=>{
      res.data.map(member=>dummyArray.push({id:member.memberId,...member}))
      setData(dummyArray);
    }
      ).catch(err=>console.log(err));
  },[]);

  // const editUserHandler=(event)=>{
  //   event.preventDefault();

  // }

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={20}
        checkboxSelection
      />
    </div>
  );
}
