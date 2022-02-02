import { useState } from "react";
import { Grid, GridColumn as Column, GridFilterChangeEvent, } from "@progress/kendo-react-grid";
import { filterBy, CompositeFilterDescriptor } from "@progress/kendo-data-query";
import { observer } from "mobx-react-lite";

import store from "../../store";
import LinkElem from "../EditUser/components/LinkElem";
import DialogWindow from "../Dialog/Dialog";

const initialFilter: CompositeFilterDescriptor = {
    logic: "and",
    filters: [{ field: "username", operator: "contains", value: "" }],
};

const Users = observer(() => {
    const [filter, setFilter] = useState(initialFilter);

    return (
        <>
            <Grid style={{ height: "420px" }} data={filterBy(store.users, filter)} filterable={true} filter={filter} onFilterChange={(e: GridFilterChangeEvent) => setFilter(e.filter)}>
                <Column field="id" title="ID" width="150px" />
                <Column field="username" title="Username" width="260px" cell={LinkElem}/>
                <Column field="fullname" title="Fullname" width="260px" />
                <Column field="lastlogin" title="Lastlogin" width="260px" />
                <Column field="enabled" title="Enabled" width="260px" />
            </Grid>
            <DialogWindow />
        </>
    )
});

export default Users;