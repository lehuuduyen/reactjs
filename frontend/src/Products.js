import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { API } from "./helper/api";
import { NumericFormat } from "react-number-format";
import Button from "react-bootstrap/Button";
import { Input } from "@mui/material";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
  price: number
) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        date: "2020-01-05",
        customerId: "11091700",
        amount: 3,
      },
      {
        date: "2020-01-02",
        customerId: "Anonymous",
        amount: 1,
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.barcode}
        </TableCell>
        <TableCell align="right">{row.name}</TableCell>
        <TableCell align="right">
          <NumericFormat
            value={row.price_sell}
            displayType={"text"}
            thousandSeparator={true}
          ></NumericFormat>
        </TableCell>
        <TableCell align="right">
          <NumericFormat
            value={row.price_capital}
            displayType={"text"}
            thousandSeparator={true}
          ></NumericFormat>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <div
                id="tabstrip-1"
                class="k-content k-state-active"
                style={{ display: "block" }}
              >
                <div class="product-detail form-wrapper content-list">
                  <h3 class="title ng-binding">{row.name}</h3>
                  <ul>
                    <li class="ng-binding">
                      <i class="fa fa-check txtGreen" aria-hidden="true"></i>Bán
                      trực tiếp
                    </li>
                    <li class="ng-binding">
                      <i class="fa fa-times txtRed" aria-hidden="true"></i>Không
                      tích điểm
                    </li>
                  </ul>
                  <div class="row row-padding-15">
                    <div class="col-lg-4 col-sm-6 image-detail">
                      <img className="img-responsive" src={row.file} />
                      <article
                        class="proListImg uln ng-scope"
                        ng-controller="ProductImageListCtrl"
                        data="dataItem"
                      >
                        {" "}
                        <kv-swiper
                          kv-page-load="loadPage"
                          kv-count-page="updateTotalPage"
                          template-id="productListTmplDetailProduct"
                          kv-height="240"
                          kv-width="50"
                          item-per-page="pageSize"
                          swiper-name="productSwiper"
                          kv-item-selected="changeImage"
                          class="ng-isolate-scope"
                        ></kv-swiper>{" "}
                      </article>
                    </div>
                    <div
                      class="col-lg-4 col-sm-6 form-labels-110 ng-scope"
                      ng-if="!isActiveGppDrugStore || dataItem.ProductType == 3 || dataItem.ProductType == 1"
                    >
                      <div class="form-group">
                        {" "}
                        <label class="form-label control-label ng-binding">
                          Mã hàng:
                        </label>
                        <div class="form-wrap form-control-static">
                          <strong class="ng-binding">{row.code}</strong>
                        </div>
                      </div>
                      <div class="form-group" ng-show="appSetting.UseBarcode">
                        {" "}
                        <label class="form-label control-label ng-binding">
                          Mã vạch:
                        </label>
                        <div class="form-wrap form-control-static ng-binding">
                          {row.barcode}
                        </div>
                      </div>
                      <div class="form-group">
                        {" "}
                        <label class="form-label control-label ng-binding">
                          Giá bán :
                        </label>
                        <div class="form-wrap form-control-static ng-binding">
                          <NumericFormat
                            value={row.price_old}
                            displayType={"text"}
                            thousandSeparator={true}
                          ></NumericFormat>
                        </div>
                      </div>
                      <div class="form-group">
                        {" "}
                        <label class="form-label control-label ng-binding">
                          Giá bán khuyến mãi:
                        </label>
                        <div class="form-wrap form-control-static ng-binding">
                          <NumericFormat
                            value={row.price_sell}
                            displayType={"text"}
                            thousandSeparator={true}
                          ></NumericFormat>
                        </div>
                      </div>
                      <div
                        class="form-group"
                        ng-show="(!dataItem.MasterUnitId || dataItem.MasterUnitId === 0) &amp;&amp; rights.viewCost"
                      >
                        <label class="form-label control-label ng-binding">
                          Giá vốn:
                        </label>
                        <div class="form-wrap form-control-static ng-binding">
                          <NumericFormat
                            value={row.price_capital}
                            displayType={"text"}
                            thousandSeparator={true}
                          ></NumericFormat>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="kv-group-btn">
                  {" "}
                  <a id="updateProduct" className="btn btn-success ng-binding">
                    <i class="fa fa-check-square" aria-hidden="true"></i> Cập
                    nhật
                  </a>
                  <a
                    target="_blank"
                    href="/print?code=v3P8W9CH7T"
                    class="btn btn-default ng-binding"
                  >
                    <i class="fa fa-barcode" aria-hidden="true"></i> In tem mã
                  </a>
                </div>
              </div>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function CollapsibleTable() {
  const [products, setProduct] = React.useState();
  React.useEffect(() => {
    let result = fetch(API.back_end + "product")
      .then((response) => response.json())
      .then((data) => {
        setProduct(data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="container form-login">
      <div style={{ display: "flex", margin: "25px 0px" }}>
        <div>
          <input type="text" style={{}} className="form-control"></input>
        </div>
        <div style={{ float: "right",width: "100%" }}>
          <Button variant="success" style={{ lineHeight: "21px",    float: "right" }} >
            Open modal
          </Button>
        </div>
      </div>

      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Mã hàng</TableCell>
              <TableCell align="right">Tên Hàng</TableCell>
              <TableCell align="right">Giá bán khuyến mãi</TableCell>
              <TableCell align="right">Giá vốn</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products ? (
              <>
                {products.map((row) => (
                  <Row key={row.name} row={row} />
                ))}
              </>
            ) : (
              ""
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
