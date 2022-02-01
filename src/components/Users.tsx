import React, { useState } from "react";
import { Grid, GridColumn as Column, GridFilterChangeEvent, } from "@progress/kendo-react-grid";
import { filterBy, CompositeFilterDescriptor } from "@progress/kendo-data-query";

import products from '../data/product.json';

const initialFilter: CompositeFilterDescriptor = {
    logic: "and",
    filters: [{ field: "ProductName", operator: "contains", value: "Chef" }],
};

const Users = () => {
    const [filter, setFilter] = useState(initialFilter);
    return (
        <Grid style={{ height: "420px" }} data={filterBy(products, filter)} filterable={true} filter={filter} onFilterChange={(e: GridFilterChangeEvent) => setFilter(e.filter)}>
            <Column field="ProductID" title="ID" width="40px" />
            <Column field="ProductName" title="Name" width="250px" />
            <Column field="Category.CategoryName" title="CategoryName" />
            <Column field="UnitPrice" title="Price" />
            <Column field="UnitsInStock" title="In stock" />
        </Grid>
    )
}

export default Users;