import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useSearchParams } from "react-router-dom";
import Settings from "./../components/Main/Settings/Settings";
import RightSetting from "./../components/Main/Settings/RightSetting";
import RowComponent from "./../components/Main/Row/Row";
import GridComponent from "./../components/Main/Grid/Grid";
import {
  getProduct,
  getProductOrder,
  setCategory,
} from "../store/productSlice";
import Navbar from "../components/Navbar/Navbar";
import Loader from "../components/@loader/Loader";
import PaginationComponent from "../components/pagination/PaginationCompponent";

export default function Main() {
  const dispatch = useDispatch();
  const productsStore = useSelector((state) => state.product.products);
  const error = useSelector((state) => state.product.error);

  const [searchParam, setSearchParam] = useSearchParams();

  const { category } = useParams();
  const grid = searchParam.get("grid") || "grid";
  let page = searchParam.get("page");
  page === null ? (page = 1) : (page = page);

  useEffect(() => {
    dispatch(getProductOrder({ category: category }));
    dispatch(setCategory({ category }));
  }, [category]);

  useEffect(() => {
    if (!category) dispatch(getProduct());
    setSearchParam({ grid: grid, page: page });
  }, []);

  const loading = useSelector((state) => state.user.loading);

  if (productsStore.length === 0) {
    return (
      <>
        <Loader />
        <Typography textAlign="center" color="error">
          {error}
        </Typography>
        <Link to='/'>
          <Typography sx={{ mt: "20px" }} textAlign="center" color="secondary">
            Return to menu
          </Typography>
        </Link>
      </>
    );
  }

  return (
    <Box sx={{ display: "flex", alignItems: "flex-start", mt: "40px" }}>
      <Box sx={{ display: { md: "flex", xs: "block" } }}>
        <Box sx={{ margin: { md: "0 24px 0 0", xs: "0 0 20px 0" } }}>
          <Navbar />
        </Box>
        <Box
          sx={{
            p: "16px",
            borderRadius: "8px",
            boxShadow: {
              sm: "0px 1px 2px rgba(58, 58, 68, 0.24), 0px 2px 4px rgba(90, 91, 106, 0.24)",
              xs: "0",
            },
            flex: "1 1 auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: "20px",
            }}
          >
            <Settings />

            <RightSetting />
          </Box>
          {grid === "row" ? (
            <RowComponent products={productsStore} />
          ) : (
            <GridComponent products={productsStore} />
          )}
          <Box sx={{ mt: "20px", display: "flex", justifyContent: "center" }}>
            <PaginationComponent />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
