import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Grid, GridColumn as Column, GridToolbar, GridItemChangeEvent, GridCellProps, GridRowProps } from "@progress/kendo-react-grid";
import { CellRender, RowRender } from "./renders";

import { IUser } from "../../interfaces/User";
import store from "../../store";


const EditGrid = () => {
  const { id } = useParams();

  const [data, setData] = useState<Array<IUser>>(store.users);
  const [editField, setEditField] = useState<string | undefined>(undefined);
  const [changes, setChanges] = useState<boolean>(false);

  const enterEdit = (dataItem: IUser, field: string | undefined) => {
    const newData = data.map((item) => ({
      ...item,
      inEdit: item.id === dataItem.id ? field : undefined,
    }));

    const Id = Number(id);

    setData(newData.filter(x => x.id === Id));
    setEditField(field);
  };

  const exitEdit = () => {
    const newData = data.map((item) => ({ ...item, inEdit: undefined }));
    setData(newData);
    setEditField(undefined);
  };

  const saveChanges = () => {
    const Id = Number(id);

    store.updateUser(Id, data[0]);

    setEditField(undefined);
    setChanges(false);
  };

  const cancelChanges = () => {
    setData(store.users);
    setChanges(false);
  };

  const itemChange = (event: GridItemChangeEvent) => {
    let field = event.field || "";
    event.dataItem[field] = event.value;
    let newData = data.map((item: any) => {
      if (item.id === event.dataItem.id) {
        item[field] = event.value;
      }
      return item;
    });
    setData(newData);
    setChanges(true);
  };

  const customCellRender: any = (td: React.ReactElement<HTMLTableCellElement>, props: GridCellProps) => (
    <CellRender originalProps={props} td={td} enterEdit={enterEdit} editField={editField} />
  );

  const customRowRender: any = (tr: React.ReactElement<HTMLTableRowElement>, props: GridRowProps) => (
    <RowRender originalProps={props} tr={tr} exitEdit={exitEdit} editField={editField} />
  );

  return (
    <>
      <Grid style={{ height: "420px" }} data={data} rowHeight={50} onItemChange={itemChange} cellRender={customCellRender} rowRender={customRowRender} editField="inEdit">
        <GridToolbar>
          <button title="Save Changes" className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base" onClick={saveChanges} disabled={!changes}>
            Save Changes
          </button>
          <button title="Cancel Changes" className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base" onClick={cancelChanges} disabled={!changes}>
            Cancel Changes
          </button>
        </GridToolbar>
        <Column field="id" title="ID" width="160px" editable={false} />
        <Column field="username" title="Username" width="260px" />
        <Column field="fullname" title="Fullname" width="260px" />
        <Column field="lastlogin" title="Lastlogin" editor="date" format="{0:d}" width="260px" />
        <Column field="enabled" editor="boolean" width="260px" />
      </Grid>
      <Link to={"/"}>Home</Link>
    </>
  );
};

export default EditGrid;