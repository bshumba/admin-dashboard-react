import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable"
import "./users.scss"
import { userRows } from "../../data";
import { useState } from "react";
import Add from "../../components/add/Add";

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 60 },
  { 
      field: "img", headerName:"Avatar", width:100,
      renderCell: (params) => {
          return <img src={ params.row.img || "noavatar.png"  } alt="" />
      }
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    type: "string",
    width: 130,
  },
  {
    field: 'firstName',
    headerName: 'First name',
    type: "string",
    width: 130,
  },
  {
    field: 'email',
    headerName: 'Email',
    type: 'String',
    width: 200,
  },
  {
    field: 'phone',
    headerName: 'Phone',
    type: 'String',
    width: 130,
  },
  {
    field: 'createdAt',
    headerName: 'Created At',
    type: "string",
    width: 100,
  },
  {
    field: 'verified',
    headerName: 'Verified',
    width: 90,
    type: 'boolean',
  },
];

const Users = () => {

  const [open, setOpen] = useState(false)

  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={()=>setOpen(true)}>Add New User</button>
      </div>
      <DataTable slug="users" columns={columns} rows={userRows} />
      { open && <Add slug="user" columns={columns} setOpen={setOpen} />}
    </div>
  )
}

export default Users