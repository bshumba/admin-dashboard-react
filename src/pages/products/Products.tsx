import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable"
import { useState } from "react";

import Add from "../../components/add/Add";
import "./products.scss"
import { products } from "../../data";

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 60 },
  { 
      field: "img", headerName:"Avatar", width:100,
      renderCell: (params) => {
          return <img src={ params.row.img || "noavatar.png"  } alt="" />
      }
  },
  {
    field: 'title',
    headerName: 'Title',
    type: "string",
    width: 250,
  },
  {
    field: 'color',
    headerName: 'Color',
    type: "string",
    width: 150,
  },
  {
    field: 'price',
    headerName: 'Price',
    type: 'String',
    width: 200,
  },
  {
    field: 'producer',
    headerName: 'Producer',
    type: 'String',
    width: 200,
  },
  {
    field: 'createdAt',
    headerName: 'Created At',
    type: "string",
    width: 200,
  },
  {
    field: 'inStock',
    headerName: 'In Stock',
    width: 150,
    type: 'boolean',
  },
];

const Products = () => {

  const [open, setOpen] = useState(false)

  return (
    <div className="products">
      <div className="info">
        <h1>Products</h1>
        <button onClick={()=>setOpen(true)}>Add New Product</button>
      </div>
      <DataTable slug="products" columns={columns} rows={products} />
      { open && <Add slug="product" columns={columns} setOpen={setOpen} />}
    </div>
  )
}

export default Products