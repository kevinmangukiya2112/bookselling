import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../../constant/constant";

const productStyle = makeStyles((theme) => ({
  productWrapper: {
    backgroundColor: "#fdf2e9",
    padding: "42px 0 80px",
    "@media (max-width: 991px)": {
      padding: "35px 0 50px",
    },
    "@media (max-width: 767px)": {
      padding: "35px 0 40px",
    },
    "& .btn-wrapper": {
      textAlign: "right",
      display: "flex",
      justifyContent: "center",
      marginBottom: "10px",
      "& .btn": {
        backgroundColor: "#65350f",
        height: "40px",
        lineHeight: "40px",
        minWidth: "100px",
        marginBottom: "10px ",
        marginLeft:"70%",
        padding: "0 10px",
        color: "white",
        fontSize: "14px",
        border:"1px solid black",
        "&:hover": {
          backgroundColor: "#65350f",
          color: "white",
        },
      },
      "& .MuiFormControl-fullWidth": {
        maxWidth: "300px",
      },
    },
    "& .MuiTable-root": {
      "@media (max-width: 991px)": {
        width: "900px",
        overflow: "auto",
      },
      "& .MuiTableBody-root": {
        "& .MuiTableRow-root": {
          "& .MuiTableCell-root": {
            "&:last-child": {
              paddingRight: "0",
              textAlign: "right",
            },
          },
        },
      },
      
      "& .green-btn": {
        height: "30px",
        lineHeight: "30px",
        minWidth: "80px",
        fontSize: "14px",
        backgroundColor: "transparent",
        textTransform: "capitalize",
        color: colors.primary,
        border: "1px solid green",
        borderRadius: "1px",
        "&:hover": {
          // backgroundColor: colors.greenText,
          backgroundColor: "#65350f",
          color: colors.white,
        },
      },
      "& .pink-btn": {
        height: "30px",
        lineHeight: "30px",
        minWidth: "80px",
        fontSize: "14px",
        backgroundColor: "transparent",
        color: colors.primary,
        border: "1px solid red",
        marginLeft: "10px",
        borderRadius: "1px",
        padding: "0 10px",
        "&:hover": {
          // backgroundColor: colors.primary,
          backgroundColor: "#65350f",
          color: colors.white,
        },
      },
    },
    "& .MuiTablePagination-root": {
      marginTop: "20px",
      "& .MuiTablePagination-toolbar": {
        paddingRight: "20px",
        "@media (max-width: 991px)": {
          padding: "0",
        },
        "@media (max-width: 374px)": {
          flexWrap: "wrap",
          justifyContent: "center",
        },
        "& .MuiSelect-selectMenu": {
          height: "40px",
          paddingRight: "25px !important",
          display: "flex",
          alignItems: "center",
        },
        "& .MuiSelect-nativeInput": {
          top: "0",
        },
        "& .MuiIconButton-root": {
          "@media (max-width: 574px)": {
            padding: "8px",
          },
          "@media (max-width: 374px)": {
            marginLeft: "0px",
            marginTop: "10px",
          },
        },
        "& .MuiTablePagination-actions": {
          "@media (max-width: 574px)": {
            marginLeft: "8px",
          },
        },
      },
    },
  },
}));

export { productStyle };
