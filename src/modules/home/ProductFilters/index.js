import React from 'react';
import { FormLabel, FormControl, FormGroup, FormControlLabel, Checkbox } from '@material-ui/core';
import useStyles from "./styles";
import { category, brand } from "../../../Constants";

export default function ProductFilters({ filterParam, addOrRemoveFilter }) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend" className={classes.formLabel}>CATEGORIES</FormLabel>
                <FormGroup>
                    {category.map((ele, index) =>
                        <FormControlLabel
                            key={index}
                            control={
                                <Checkbox
                                    checked={filterParam["category"].includes(ele.label)}
                                    onChange={() => addOrRemoveFilter(ele.label, "category")}
                                    name={ele.label}
                                />
                            }
                            label={ele.label}
                        />)}
                </FormGroup>
            </FormControl>
            <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend" className={classes.formLabel}>BRAND</FormLabel>
                <FormGroup>
                    {brand.map((ele, index) =>
                        <FormControlLabel
                            key={index}
                            control={
                                <Checkbox
                                    checked={filterParam["brand"].includes(ele.label)}
                                    onChange={() => addOrRemoveFilter(ele.label, "brand")}
                                    name={ele.label}
                                />
                            }
                            label={ele.label}
                        />)}
                </FormGroup>
            </FormControl>
        </div>
    );
}