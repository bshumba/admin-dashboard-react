// import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { Link } from "react-router-dom"

import "./dataTable.scss"

type Props = {
  columns: GridColDef[];
  rows: object[];
  slug: string;
}

const DataTable = (props:Props) => {

  const handleDelete = (id:number) => {
    // call delete api
    console.log(id + " has been deleted")
  }

  const actionColumn:GridColDef = { 
    field: "actions", headerName:"Actions", width:100,
    renderCell: (params) => {
        return <div className="action">
          <div className="view">
            <Link to={`/${props.slug}/${params.row.id}`}>
              <img src="/view.svg" alt="" />
            </Link>
          </div>
          <div className="delete" onClick={()=>handleDelete(params.row.id)}>
              <img src="/delete.svg" alt="" />
          </div>
        </div>
    }
  }

  return (
    <div className="dataTable">
            <DataGrid
                className='dataGrid'
                rows={props.rows}
                columns={[...props.columns, actionColumn]}
                initialState={{
                pagination: {
                    paginationModel: {
                    pageSize: 5,
                    },
                },
                }}
                slots={{ toolbar:GridToolbar }}
                slotProps={{
                    toolbar: {
                        showQuickFilter: true,
                        quickFilterProps: { debounceMs: 500 }
                    }
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
                disableColumnFilter
                disableColumnSelector
                disableDensitySelector
            />
    </div>
  )
}

export default DataTable