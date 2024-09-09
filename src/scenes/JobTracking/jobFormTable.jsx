// import React, { useState } from "react";
// import {
//   Box,
//   Button,
//   TextField,
//   Typography,
//   useTheme,
//   IconButton,
//   Select,
//   MenuItem,
// } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { bulkAddJobApplications } from "../../features/jobTrackingSlice";
// import { tokens } from "../../theme";
// import Header from "../../components/Header";
// import DeleteIcon from "@mui/icons-material/Delete";

// // Enum options for dropdowns
// const jobCategoryOptions = ["FULL_TIME", "PART_TIME", "CONTRACT", "INTERNSHIP"];
// const industryOptions = [
//   "TECH",
//   "FINANCE",
//   "HEALTHCARE",
//   "MARKETING",
//   "EDUCATION",
//   "OTHER",
// ];
// const priorityLevelOptions = ["HIGH", "MEDIUM", "LOW"];

// const JobFormTable = ({ token }) => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [rows, setRows] = useState([
//     {
//       id: Date.now(),
//       companyName: "",
//       positionTitle: "",
//       location: "",
//       jobPostingUrl: "",
//       applicationDate: "",
//       jobCategory: "FULL_TIME",
//       industry: "TECH",
//       priorityLevel: "MEDIUM",
//       salaryOffered: "",
//       recruiterPhone: "",
//     },
//   ]);
//   const loading = useSelector((state) => state.jobTracker.loading);

//   const handleAddRow = () => {
//     setRows([
//       ...rows,
//       {
//         id: Date.now(),
//         companyName: "",
//         positionTitle: "",
//         location: "",
//         jobPostingUrl: "",
//         applicationDate: "",
//         jobCategory: "FULL_TIME",
//         industry: "TECH",
//         priorityLevel: "MEDIUM",
//         salaryOffered: "",
//         recruiterPhone: "",
//       },
//     ]);
//   };

//   const handleRemoveRow = (id) => {
//     setRows(rows.filter((row) => row.id !== id));
//   };

//   const handleChange = (id, field, value) => {
//     setRows(
//       rows.map((row) => (row.id === id ? { ...row, [field]: value } : row))
//     );
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Validate each job before dispatching
//     const validatedRows = rows.map((row) => {
//       // Convert salaryOffered to a number if it's not empty
//       if (row.salaryOffered) {
//         row.salaryOffered = parseFloat(row.salaryOffered);
//       }

//       // Ensure applicationDate is valid
//       if (!row.applicationDate || isNaN(new Date(row.applicationDate))) {
//         row.applicationDate = new Date().toISOString(); // Default to current date if invalid
//       }

//       // Set defaults for optional fields
//       row.location = row.location || "Remote";
//       row.jobPostingUrl = row.jobPostingUrl || "";

//       return row;
//     });

//     dispatch(bulkAddJobApplications({ jobs: validatedRows, token }))
//       .unwrap()
//       .then(() => {
//         alert("Jobs added successfully!");

//         // Reset rows after successful submission
//         setRows([
//           {
//             id: Date.now(),
//             companyName: "",
//             positionTitle: "",
//             location: "",
//             jobPostingUrl: "",
//             applicationDate: "",
//             jobCategory: "FULL_TIME",
//             industry: "TECH",
//             priorityLevel: "MEDIUM",
//             salaryOffered: "",
//             recruiterPhone: "",
//           },
//         ]);
//       })
//       .catch((error) => {
//         console.error("Failed to add jobs:", error);
//         alert(`Failed to add jobs: ${error.message}`);
//       });
//   };

//   const handleBack = () => {
//     navigate("/job-tracker");
//   };

//   if (loading) return <p>Loading...</p>;

//   return (
//     <Box m="20px">
//       <Header
//         title="BULK ADD JOBS"
//         subtitle="Add multiple jobs to your tracker"
//       />
//       <form onSubmit={handleSubmit}>
//         <Box>
//           <Typography variant="h6" color={colors.grey[100]} mb="20px">
//             Fill in the details for each job below:
//           </Typography>
//           {rows.map((row) => (
//             <Box
//               key={row.id}
//               mb="20px"
//               borderBottom={`1px solid ${colors.grey[700]}`}
//               pb="10px"
//             >
//               <Box
//                 display="grid"
//                 gridTemplateColumns="repeat(12, 1fr)"
//                 gap="20px"
//               >
//                 {/* Job Information */}
//                 <TextField
//                   fullWidth
//                   variant="filled"
//                   label="Company Name"
//                   value={row.companyName}
//                   onChange={(e) =>
//                     handleChange(row.id, "companyName", e.target.value)
//                   }
//                   sx={{ gridColumn: "span 3" }}
//                 />
//                 <TextField
//                   fullWidth
//                   variant="filled"
//                   label="Position Title"
//                   value={row.positionTitle}
//                   onChange={(e) =>
//                     handleChange(row.id, "positionTitle", e.target.value)
//                   }
//                   sx={{ gridColumn: "span 3" }}
//                 />
//                 <TextField
//                   fullWidth
//                   variant="filled"
//                   label="Location"
//                   value={row.location}
//                   onChange={(e) =>
//                     handleChange(row.id, "location", e.target.value)
//                   }
//                   sx={{ gridColumn: "span 3" }}
//                 />
//                 <TextField
//                   fullWidth
//                   variant="filled"
//                   label="Job Posting URL"
//                   value={row.jobPostingUrl}
//                   onChange={(e) =>
//                     handleChange(row.id, "jobPostingUrl", e.target.value)
//                   }
//                   sx={{ gridColumn: "span 3" }}
//                 />
//                 <TextField
//                   fullWidth
//                   variant="filled"
//                   type="date"
//                   label="Application Date"
//                   value={row.applicationDate}
//                   InputLabelProps={{ shrink: true }}
//                   onChange={(e) =>
//                     handleChange(row.id, "applicationDate", e.target.value)
//                   }
//                   sx={{ gridColumn: "span 3" }}
//                 />

//                 {/* Dropdowns for Category, Industry */}
//                 <Select
//                   fullWidth
//                   variant="filled"
//                   value={row.jobCategory}
//                   onChange={(e) =>
//                     handleChange(row.id, "jobCategory", e.target.value)
//                   }
//                   displayEmpty
//                   sx={{ gridColumn: "span 2" }}
//                 >
//                   <MenuItem value="" disabled>
//                     Job Category
//                   </MenuItem>
//                   {jobCategoryOptions.map((category) => (
//                     <MenuItem key={category} value={category}>
//                       {category}
//                     </MenuItem>
//                   ))}
//                 </Select>
//                 <Select
//                   fullWidth
//                   variant="filled"
//                   value={row.industry}
//                   onChange={(e) =>
//                     handleChange(row.id, "industry", e.target.value)
//                   }
//                   displayEmpty
//                   sx={{ gridColumn: "span 2" }}
//                 >
//                   <MenuItem value="" disabled>
//                     Industry
//                   </MenuItem>
//                   {industryOptions.map((industry) => (
//                     <MenuItem key={industry} value={industry}>
//                       {industry}
//                     </MenuItem>
//                   ))}
//                 </Select>
//                 <Select
//                   fullWidth
//                   variant="filled"
//                   value={row.priorityLevel}
//                   onChange={(e) =>
//                     handleChange(row.id, "priorityLevel", e.target.value)
//                   }
//                   displayEmpty
//                   sx={{ gridColumn: "span 2" }}
//                 >
//                   <MenuItem value="" disabled>
//                     Priority Level
//                   </MenuItem>
//                   {priorityLevelOptions.map((priority) => (
//                     <MenuItem key={priority} value={priority}>
//                       {priority}
//                     </MenuItem>
//                   ))}
//                 </Select>

//                 {/* Salary and Recruiter Info */}
//                 <TextField
//                   fullWidth
//                   variant="filled"
//                   label="Salary Offered"
//                   value={row.salaryOffered}
//                   onChange={(e) =>
//                     handleChange(row.id, "salaryOffered", e.target.value)
//                   }
//                   sx={{ gridColumn: "span 2" }}
//                 />
//                 <TextField
//                   fullWidth
//                   variant="filled"
//                   label="Recruiter Phone"
//                   value={row.recruiterPhone}
//                   onChange={(e) =>
//                     handleChange(row.id, "recruiterPhone", e.target.value)
//                   }
//                   sx={{ gridColumn: "span 2" }}
//                 />

//                 {/* Delete Row */}
//                 <IconButton
//                   onClick={() => handleRemoveRow(row.id)}
//                   sx={{ gridColumn: "span 1", color: colors.redAccent[400] }}
//                 >
//                   <DeleteIcon />
//                 </IconButton>
//               </Box>
//             </Box>
//           ))}
//         </Box>
//         <Box mt="20px">
//           <Button
//             type="button"
//             color="primary"
//             variant="outlined"
//             onClick={handleAddRow}
//             sx={{
//               marginRight: "10px",
//               backgroundColor: colors.blueAccent[700],
//               color: colors.grey[100],
//             }}
//           >
//             Add Row
//           </Button>
//           <Button
//             type="submit"
//             color="primary"
//             variant="contained"
//             sx={{
//               backgroundColor: colors.greenAccent[700],
//               color: colors.grey[100],
//               fontWeight: "bold",
//             }}
//           >
//             Submit All Jobs
//           </Button>
//         </Box>
//       </form>
//       <Box mt="20px">
//         <Button
//           variant="contained"
//           color="secondary"
//           onClick={handleBack}
//           sx={{
//             backgroundColor: colors.blueAccent[700],
//             color: colors.grey[100],
//           }}
//         >
//           Back to Job Tracker
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default JobFormTable;
