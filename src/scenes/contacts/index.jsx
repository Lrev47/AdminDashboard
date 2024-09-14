import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useSelector } from "react-redux"; // Import useSelector from react-redux
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";

const Contacts = () => {
  const { currentTheme } = useSelector((state) => state.theme); // Get the current theme from Redux

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Registrar ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="CONTACTS"
        subtitle="List of Contacts for Future Reference"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: currentTheme?.greenAccent || "#94e2cd", // Use the current theme color
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: currentTheme?.blueAccent || "#3e4396", // Use the current theme color
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: currentTheme?.primary || "#141b2d", // Use the current theme color
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: currentTheme?.blueAccent || "#3e4396", // Use the current theme color
          },
          "& .MuiCheckbox-root": {
            color: `${currentTheme?.greenAccent || "#4CCEAC"} !important`, // Use the current theme color
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${currentTheme?.grey || "#e0e0e0"} !important`, // Use the current theme color
          },
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Contacts;
