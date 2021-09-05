import React, { useEffect, useState } from "react";
import { Grid, Paper } from "@material-ui/core"
import Spinner from "../../components/spinner";
import ProductCard from "./ProductCard";
import ProductFilters from "./ProductFilters";
import useStyles from "./styles";

const Home = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [filterParam, setFilterParam] = useState({
    category: [],
    brand: []
  });

  const classes = useStyles();

  useEffect(() => {
    //fetch product data on mount
    fetch("https://demo7242716.mockable.io/products")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.products);
        }
      ).catch((error) => {
        setIsLoaded(true);
        setError(error);
      });
  }, []);

  const search = (items) => {
    // filter data
    return items.filter((item) => {
      if (filterParam.brand.length > 0 && filterParam.category.length > 0) {
        return filterParam.brand.includes(item.brand) && filterParam.category.includes(item.category)
      }
      if (filterParam.brand.length > 0 && filterParam.category.length === 0) {
        return filterParam.brand.includes(item.brand)
      }
      if (filterParam.brand.length === 0 && filterParam.category.length > 0) {
        return filterParam.category.includes(item.category)
      }
      return items
    });
  }

  const addOrRemoveFilter = (value, type) => {
    const updatedFilter = { ...filterParam }
    if (updatedFilter[type]) {
      const index = updatedFilter[type].indexOf(value)
      if (index >= 0) {
        updatedFilter[type].splice(index, 1)
      } else {
        updatedFilter[type].push(value)
      }
    }
    setFilterParam(updatedFilter);
  }

  const data = search(items);

  if (error) {
    return <>Got an error: {error.message}</>;
  } else if (!isLoaded) {
    return <Spinner />;
  } else {
    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Paper className={classes.paper}>
              <ProductFilters
                filterParam={filterParam}
                addOrRemoveFilter={addOrRemoveFilter}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={8} lg={10}>
            <Paper className={classes.paper}>
              {data.length ? <Grid container spacing={6}>
                {data.map(ele =>
                  <Grid item xs={12} md={6} lg={3} key={ele.productId} className={classes.card}>
                    <ProductCard
                      product={ele}
                    />
                  </Grid>)}
              </Grid> :
                <>
                  No data found for the selected filter(s)
                </>}
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
};

export default Home;
