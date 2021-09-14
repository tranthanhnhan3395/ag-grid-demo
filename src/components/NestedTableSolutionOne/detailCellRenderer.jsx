import React from "react";
import { AgGridReact, AgGridColumn } from "ag-grid-react";

const DetailCellRenderer = ({ data, node, api }) => {
  const rowData = [
    {
      ref: null,
      quantity: "N/A",
    },
    {
      ref: null,
      quantity: "N/A",
    },
    {
      ref: null,
      quantity: "N/A",
    },
    {
      ref: null,
      quantity: "N/A",
    },
    {
      ref: null,
      quantity: "N/A",
    },
  ];

  return (
    <div className="full-width-panel">
      <AgGridReact
        className="full-width-grid ag-theme-alpine"
        rowData={rowData}
      >
        <AgGridColumn headerName="Tray #1">
          <AgGridColumn field="ref" headerName="Ref." editable />
          <AgGridColumn
            field="quantity"
            headerName="Total Quantity"
            editable
            checkboxSelection
          />
        </AgGridColumn>
      </AgGridReact>

      <AgGridReact
        className="full-width-grid ag-theme-alpine"
        rowData={rowData}
      >
        <AgGridColumn headerName="Tray #2">
          <AgGridColumn field="ref" headerName="Ref." editable />
          <AgGridColumn
            field="quantity"
            headerName="Total Quantity"
            editable
            checkboxSelection
          />
        </AgGridColumn>
      </AgGridReact>

      <AgGridReact
        className="full-width-grid ag-theme-alpine"
        rowData={rowData}
      >
        <AgGridColumn headerName="Tray #3">
          <AgGridColumn field="ref" headerName="Ref." editable />
          <AgGridColumn
            field="quantity"
            headerName="Total Quantity"
            editable
            checkboxSelection
          />
        </AgGridColumn>
      </AgGridReact>

      <AgGridReact
        className="full-width-grid ag-theme-alpine"
        rowData={rowData}
      >
        <AgGridColumn headerName="Tray #4">
          <AgGridColumn field="ref" headerName="Ref." editable />
          <AgGridColumn
            field="quantity"
            headerName="Total Quantity"
            editable
            checkboxSelection
          />
        </AgGridColumn>
      </AgGridReact>
    </div>
  );
};

export default DetailCellRenderer;
