// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import axios from "axios";

// const DashboardJobseeker = () => {
//   const location = useLocation();
//   const user = location.state?.user || {}; // Safely access 'user'
//   const [jobseekerDetails, setJobseekerDetails] = useState(null);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     // Fetch jobseeker details based on userId
//     const fetchJobseekerDetails = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:8080/api/jobseeker/${user.userId}`
//         );
//         setJobseekerDetails(response.data);
//       } catch (err) {
//         console.error("Error fetching jobseeker details:", err);
//         setError("Unable to fetch jobseeker details. Please try again later.");
//       }
//     };

//     if (user.userId) {
//       fetchJobseekerDetails();
//     }
//   }, [user.userId]);

//   return (
//     <div className="container mt-4">
//       <h1 className="text-primary">Welcome, {user.username || "Jobseeker"}!</h1>
//       <p className="text-muted">Your role is: {user.role}</p>
//       <p>Email: {user.email}</p>
//       <hr />
//       {error && <p className="text-danger">{error}</p>}
//       {jobseekerDetails ? (
//         <div className="card shadow-lg">
//           <div className="card-body">
//             <h3 className="card-title">Jobseeker Profile</h3>
//             <div className="d-flex mb-3">
//               <img
//                 src={`http://localhost:8080${jobseekerDetails.profilePicture}`}
//                 alt="Profile"
//                 className="rounded-circle me-3"
//                 style={{ width: "150px", height: "150px", objectFit: "cover" }}
//               />
//               <div>
//                 <h5>{jobseekerDetails.fullName}</h5>
//                 <p className="text-muted">
//                   Date of Birth: {jobseekerDetails.dob}
//                 </p>
//                 <p>Gender: {jobseekerDetails.gender}</p>
//               </div>
//             </div>
//             <h5>Address:</h5>
//             <p>{jobseekerDetails.address}</p>
//             <h5>Education:</h5>
//             <p>{jobseekerDetails.education}</p>
//             <h5>Experience:</h5>
//             <p>{jobseekerDetails.experience}</p>
//             <h5>Skills:</h5>
//             <p>{jobseekerDetails.skills}</p>
//             <h5>Portfolio:</h5>
//             <a
//               href={jobseekerDetails.portfolioUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               {jobseekerDetails.portfolioUrl}
//             </a>
//           </div>
//           <div className="card-footer text-muted">
//             Profile created on: {jobseekerDetails.createdAt}
//           </div>
//         </div>
//       ) : (
//         !error && <p>Loading jobseeker details...</p>
//       )}
//     </div>
//   );
// };

// export default DashboardJobseeker;
// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";

// const DashboardJobseeker = () => {
//   const location = useLocation();
//   const user = location.state?.user || {}; // Safely access 'user'
//   const [jobseekerDetails, setJobseekerDetails] = useState(null);
//   const [error, setError] = useState("");
//   const [showEditForm, setShowEditForm] = useState(false);
//   const [formData, setFormData] = useState({}); // For editing details

//   useEffect(() => {
//     // Fetch jobseeker details based on userId
//     const fetchJobseekerDetails = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:8080/api/jobseeker/${user.userId}`
//         );
//         setJobseekerDetails(response.data);
//         setFormData(response.data); // Set initial form data
//       } catch (err) {
//         console.error("Error fetching jobseeker details:", err);
//         setError("Unable to fetch jobseeker details. Please try again later.");
//       }
//     };

//     if (user.userId) {
//       fetchJobseekerDetails();
//     }
//   }, [user.userId]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleUpdateDetails = async (e) => {
//     e.preventDefault();
//     try {
//       // Update the details with the correct jobseekerId in the URL
//       await axios.put(
//         `http://localhost:8080/api/jobseeker/update/${jobseekerDetails.jobseekerId}`, // Use the jobseekerId directly
//         formData
//       );
//       setJobseekerDetails(formData);
//       setShowEditForm(false);
//       alert("Jobseeker details updated successfully!");
//     } catch (err) {
//       console.error("Error updating jobseeker details:", err);
//       setError("Failed to update details. Please try again.");
//     }
//   };

//   return (
//     <div className="container mt-4">
//       <h1 className="text-primary">Welcome, {user.username || "Jobseeker"}!</h1>
//       <p className="text-muted">Your role is: {user.role}</p>
//       <p>Email: {user.email}</p>
//       <hr />
//       {error && <p className="text-danger">{error}</p>}
//       {jobseekerDetails ? (
//         <div className="card shadow-lg mb-4">
//           <div className="card-body">
//             <div className="d-flex justify-content-between align-items-center mb-4">
//               <h3 className="card-title">Jobseeker Profile</h3>
//               <button
//                 className="btn btn-outline-primary"
//                 onClick={() => setShowEditForm(!showEditForm)}
//               >
//                 {showEditForm ? "Close Edit Form" : "Edit Details"}
//               </button>
//             </div>
//             <div className="d-flex mb-3">
//               <img
//                 src={`http://localhost:8080${jobseekerDetails.profilePicture}`}
//                 alt="Profile"
//                 className="rounded-circle me-3"
//                 style={{
//                   width: "150px",
//                   height: "150px",
//                   objectFit: "cover",
//                   border: "2px solid #007bff",
//                 }}
//               />
//               <div>
//                 <h5>{jobseekerDetails.fullName}</h5>
//                 <p className="text-muted">
//                   Date of Birth: {jobseekerDetails.dob}
//                 </p>
//                 <p>Gender: {jobseekerDetails.gender}</p>
//               </div>
//             </div>
//             <h5>Address:</h5>
//             <p>{jobseekerDetails.address}</p>
//             <h5>Education:</h5>
//             <p>{jobseekerDetails.education}</p>
//             <h5>Experience:</h5>
//             <p>{jobseekerDetails.experience}</p>
//             <h5>Skills:</h5>
//             <p>{jobseekerDetails.skills}</p>
//             <h5>Portfolio:</h5>
//             <a
//               href={jobseekerDetails.portfolioUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               {jobseekerDetails.portfolioUrl}
//             </a>
//           </div>
//           <div className="card-footer text-muted">
//             Profile created on: {jobseekerDetails.createdAt}
//           </div>
//         </div>
//       ) : (
//         !error && <p>Loading jobseeker details...</p>
//       )}

//       {/* Edit Jobseeker Details Form */}
//       {showEditForm && (
//         <div className="card shadow-lg">
//           <div className="card-body">
//             <h3 className="card-title">Edit Jobseeker Details</h3>
//             <form onSubmit={handleUpdateDetails}>
//               <div className="row">
//                 <div className="col-md-6 mb-3">
//                   <label className="form-label">Full Name</label>
//                   <input
//                     type="text"
//                     name="fullName"
//                     className="form-control"
//                     value={formData.fullName || ""}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div className="col-md-6 mb-3">
//                   <label className="form-label">Date of Birth</label>
//                   <input
//                     type="date"
//                     name="dob"
//                     className="form-control"
//                     value={formData.dob || ""}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div className="col-md-6 mb-3">
//                   <label className="form-label">Gender</label>
//                   <select
//                     name="gender"
//                     className="form-control"
//                     value={formData.gender || ""}
//                     onChange={handleInputChange}
//                   >
//                     <option value="MALE">Male</option>
//                     <option value="FEMALE">Female</option>
//                     <option value="OTHER">Other</option>
//                   </select>
//                 </div>
//                 <div className="col-md-6 mb-3">
//                   <label className="form-label">Address</label>
//                   <input
//                     type="text"
//                     name="address"
//                     className="form-control"
//                     value={formData.address || ""}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div className="col-md-6 mb-3">
//                   <label className="form-label">Education</label>
//                   <input
//                     type="text"
//                     name="education"
//                     className="form-control"
//                     value={formData.education || ""}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div className="col-md-6 mb-3">
//                   <label className="form-label">Experience</label>
//                   <input
//                     type="text"
//                     name="experience"
//                     className="form-control"
//                     value={formData.experience || ""}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div className="col-md-12 mb-3">
//                   <label className="form-label">Skills</label>
//                   <input
//                     type="text"
//                     name="skills"
//                     className="form-control"
//                     value={formData.skills || ""}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div className="col-md-12 mb-3">
//                   <label className="form-label">Portfolio URL</label>
//                   <input
//                     type="url"
//                     name="portfolioUrl"
//                     className="form-control"
//                     value={formData.portfolioUrl || ""}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//               </div>
//               <button type="submit" className="btn btn-success mt-3">
//                 Save Changes
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DashboardJobseeker;

// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";

// const DashboardJobseeker = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const user = location.state?.user || {}; // Safely access 'user'
//   const [jobseekerDetails, setJobseekerDetails] = useState(null);
//   const [error, setError] = useState("");
//   const [showProfile, setShowProfile] = useState(false); // State to toggle profile visibility
//   const [showEditForm, setShowEditForm] = useState(false);
//   const [formData, setFormData] = useState({}); // For editing details

//   useEffect(() => {
//     // Fetch jobseeker details based on userId
//     const fetchJobseekerDetails = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:8080/api/jobseeker/${user.userId}`
//         );
//         setJobseekerDetails(response.data);
//         setFormData(response.data); // Set initial form data
//       } catch (err) {
//         console.error("Error fetching jobseeker details:", err);
//         setError("Unable to fetch jobseeker details. Please try again later.");
//       }
//     };

//     if (user.userId) {
//       fetchJobseekerDetails();
//     }
//   }, [user.userId]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleUpdateDetails = async (e) => {
//     e.preventDefault();
//     try {
//       // Update the details with the correct jobseekerId in the URL
//       await axios.put(
//         `http://localhost:8080/api/jobseeker/update/${jobseekerDetails.jobseekerId}`, // Use the jobseekerId directly
//         formData
//       );
//       setJobseekerDetails(formData);
//       setShowEditForm(false);
//       alert("Jobseeker details updated successfully!");
//     } catch (err) {
//       console.error("Error updating jobseeker details:", err);
//       setError("Failed to update details. Please try again.");
//     }
//   };

//   return (
//     <div className="container mt-4">
//       <h1 className="text-primary">Welcome, {user.username || "Jobseeker"}!</h1>
//       <p className="text-muted">Your role is: {user.role}</p>
//       <p>Email: {user.email}</p>
//       <hr />
//       {error && <p className="text-danger">{error}</p>}

//       {/* Buttons to show profile or navigate to jobs */}
//       <div className="mb-4">
//         <button
//           className="btn btn-primary me-3"
//           onClick={() => setShowProfile(!showProfile)}
//         >
//           {showProfile ? "Hide Profile" : "Show Profile"}
//         </button>
//         <button
//           className="btn btn-secondary"
//           onClick={() => navigate("/jobs")} // Navigate to jobs page
//         >
//           Jobs
//         </button>
//       </div>

//       {showProfile && jobseekerDetails ? (
//         <div className="card shadow-lg mb-4">
//           <div className="card-body">
//             <div className="d-flex justify-content-between align-items-center mb-4">
//               <h3 className="card-title">Jobseeker Profile</h3>
//               <button
//                 className="btn btn-outline-primary"
//                 onClick={() => setShowEditForm(!showEditForm)}
//               >
//                 {showEditForm ? "Close Edit Form" : "Edit Details"}
//               </button>
//             </div>
//             <div className="d-flex mb-3">
//               <img
//                 src={`http://localhost:8080${jobseekerDetails.profilePicture}`}
//                 alt="Profile"
//                 className="rounded-circle me-3"
//                 style={{
//                   width: "150px",
//                   height: "150px",
//                   objectFit: "cover",
//                   border: "2px solid #007bff",
//                 }}
//               />
//               <div>
//                 <h5>{jobseekerDetails.fullName}</h5>
//                 <p className="text-muted">
//                   Date of Birth: {jobseekerDetails.dob}
//                 </p>
//                 <p>Gender: {jobseekerDetails.gender}</p>
//               </div>
//             </div>
//             <h5>Address:</h5>
//             <p>{jobseekerDetails.address}</p>
//             <h5>Education:</h5>
//             <p>{jobseekerDetails.education}</p>
//             <h5>Experience:</h5>
//             <p>{jobseekerDetails.experience}</p>
//             <h5>Skills:</h5>
//             <p>{jobseekerDetails.skills}</p>
//             <h5>Portfolio:</h5>
//             <a
//               href={jobseekerDetails.portfolioUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               {jobseekerDetails.portfolioUrl}
//             </a>
//           </div>
//           <div className="card-footer text-muted">
//             Profile created on: {jobseekerDetails.createdAt}
//           </div>
//         </div>
//       ) : (
//         showProfile && !error && <p>Loading jobseeker details...</p>
//       )}

//       {/* Edit Jobseeker Details Form */}
//       {showEditForm && (
//         <div className="card shadow-lg">
//           <div className="card-body">
//             <h3 className="card-title">Edit Jobseeker Details</h3>
//             <form onSubmit={handleUpdateDetails}>
//               {/* Form fields for editing */}
//               <div className="row">
//                 <div className="col-md-6 mb-3">
//                   <label className="form-label">Full Name</label>
//                   <input
//                     type="text"
//                     name="fullName"
//                     className="form-control"
//                     value={formData.fullName || ""}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div className="col-md-6 mb-3">
//                   <label className="form-label">Date of Birth</label>
//                   <input
//                     type="date"
//                     name="dob"
//                     className="form-control"
//                     value={formData.dob || ""}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div className="col-md-6 mb-3">
//                   <label className="form-label">Gender</label>
//                   <select
//                     name="gender"
//                     className="form-control"
//                     value={formData.gender || ""}
//                     onChange={handleInputChange}
//                   >
//                     <option value="MALE">Male</option>
//                     <option value="FEMALE">Female</option>
//                     <option value="OTHER">Other</option>
//                   </select>
//                 </div>
//                 <div className="col-md-6 mb-3">
//                   <label className="form-label">Address</label>
//                   <input
//                     type="text"
//                     name="address"
//                     className="form-control"
//                     value={formData.address || ""}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div className="col-md-6 mb-3">
//                   <label className="form-label">Education</label>
//                   <input
//                     type="text"
//                     name="education"
//                     className="form-control"
//                     value={formData.education || ""}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div className="col-md-6 mb-3">
//                   <label className="form-label">Experience</label>
//                   <input
//                     type="text"
//                     name="experience"
//                     className="form-control"
//                     value={formData.experience || ""}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div className="col-md-12 mb-3">
//                   <label className="form-label">Skills</label>
//                   <input
//                     type="text"
//                     name="skills"
//                     className="form-control"
//                     value={formData.skills || ""}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div className="col-md-12 mb-3">
//                   <label className="form-label">Portfolio URL</label>
//                   <input
//                     type="url"
//                     name="portfolioUrl"
//                     className="form-control"
//                     value={formData.portfolioUrl || ""}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//               </div>
//               <button type="submit" className="btn btn-success mt-3">
//                 Save Changes
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DashboardJobseeker;

// boostrap model in

// {/* {showProfile && jobseekerDetails ? (
//         <div className="card shadow-lg mb-4">
//           <div className="card-body">
//             <h3 className="card-title">Jobseeker Profile</h3>
//             <div className="d-flex mb-3">
//               <img
//                 src={`http://localhost:8080${jobseekerDetails.profilePicture}`}
//                 alt="Profile"
//                 className="rounded-circle me-3"
//                 style={{
//                   width: "150px",
//                   height: "150px",
//                   objectFit: "cover",
//                   border: "2px solid #007bff",
//                 }}
//               />
//               <div>
//                 <h5>{jobseekerDetails.fullName}</h5>
//                 <p className="text-muted">
//                   Date of Birth: {jobseekerDetails.dob}
//                 </p>
//                 <p>Gender: {jobseekerDetails.gender}</p>
//               </div>
//             </div>
//             <h5>Address:</h5>
//             <p>{jobseekerDetails.address}</p>
//             <h5>Education:</h5>
//             <p>{jobseekerDetails.education}</p>
//             <h5>Experience:</h5>
//             <p>{jobseekerDetails.experience}</p>
//             <h5>Skills:</h5>
//             <p>{jobseekerDetails.skills}</p>
//             <h5>Portfolio:</h5>
//             <a
//               href={jobseekerDetails.portfolioUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               {jobseekerDetails.portfolioUrl}
//             </a>
//             <button
//               className="btn btn-outline-primary mt-3"
//               onClick={() => setShowEditModal(true)}
//             >
//               Edit Details
//             </button>
//           </div>
//         </div>
//       ) : (
//         showProfile && !error && <p>Loading jobseeker details...</p>
//       )} */}

// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../style/JobseekerDashboard.css";
// const DashboardJobseeker = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const user = location.state?.user || {};
//   const [jobseekerDetails, setJobseekerDetails] = useState(null);
//   const [error, setError] = useState("");
//   const [showProfile, setShowProfile] = useState(false);
//   const [formData, setFormData] = useState({});
//   const [showEditModal, setShowEditModal] = useState(false);

//   useEffect(() => {
//     const fetchJobseekerDetails = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:8080/api/jobseeker/${user.userId}`
//         );
//         setJobseekerDetails(response.data);
//         setFormData(response.data);
//       } catch (err) {
//         console.error("Error fetching jobseeker details:", err);
//         setError("Unable to fetch jobseeker details. Please try again later.");
//       }
//     };

//     if (user.userId) {
//       fetchJobseekerDetails();
//     }
//   }, [user.userId]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleUpdateDetails = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put(
//         `http://localhost:8080/api/jobseeker/update/${jobseekerDetails.jobseekerId}`,
//         formData
//       );
//       setJobseekerDetails(formData);
//       setShowEditModal(false);
//       alert("Jobseeker details updated successfully!");
//     } catch (err) {
//       console.error("Error updating jobseeker details:", err);
//       setError("Failed to update details. Please try again.");
//     }
//   };

//   return (
//     <div className="container mt-4">
//       <h1 className="text-primary">Welcome, {user.username || "Jobseeker"}!</h1>
//       <p className="text-muted">Your role is: {user.role}</p>
//       <p>Email: {user.email}</p>
//       <hr />
//       {error && <p className="text-danger">{error}</p>}

//       <div className="mb-4">
//         <button
//           className="btn btn-primary me-3"
//           onClick={() => setShowProfile(!showProfile)}
//         >
//           {showProfile ? "Hide Profile" : "Show Profile"}
//         </button>
//         <button className="btn btn-secondary" onClick={() => navigate("/jobs")}>
//           Jobs
//         </button>
//       </div>

//       {showProfile && jobseekerDetails ? (
//         <div className="card shadow-lg p-4 mb-4">
//           <div className="d-flex align-items-center mb-4">
//             <img
//               src={`http://localhost:8080/api/jobseeker/imgs/${jobseekerDetails.jobseekerId}`}
//               alt="Profile"
//               className="rounded-circle me-3"
//               style={{
//                 width: "80px",
//                 height: "80px",
//                 objectFit: "cover",
//                 border: "3px solid #007bff",
//               }}
//             />
//             <h3 className="text-primary mb-0">{jobseekerDetails.fullName}</h3>
//           </div>
//           <table className="table table-borderless align-middle">
//             <tbody>
//               <tr>
//                 <th className="text-secondary">Gender</th>
//                 <td>{jobseekerDetails.gender}</td>
//                 <th className="text-secondary">Date of Birth</th>
//                 <td>{jobseekerDetails.dob}</td>
//               </tr>
//               <tr>
//                 <th className="text-secondary">Address</th>
//                 <td>{jobseekerDetails.address}</td>
//                 <th className="text-secondary">Education</th>
//                 <td>{jobseekerDetails.education}</td>
//               </tr>
//               <tr>
//                 <th className="text-secondary">Experience</th>
//                 <td>{jobseekerDetails.experience}</td>
//                 <th className="text-secondary">Skills</th>
//                 <td>{jobseekerDetails.skills}</td>
//               </tr>
//               <tr>
//                 <th className="text-secondary">Portfolio</th>
//                 <td colSpan="3">
//                   <a
//                     href={jobseekerDetails.portfolioUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-primary"
//                   >
//                     {jobseekerDetails.portfolioUrl}
//                   </a>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//           <div className="text-center mt-4">
//             <button
//               className="btn btn-outline-primary"
//               onClick={() => setShowEditModal(true)}
//             >
//               Edit Profile
//             </button>
//           </div>
//         </div>
//       ) : (
//         showProfile && !error && <p>Loading jobseeker details...</p>
//       )}

//       {/* Bootstrap Modal for Editing Details */}
// {showEditModal && (
//   <div
//     className="modal fade show d-block"
//     tabIndex="-1"
//     role="dialog"
//     aria-labelledby="editModalLabel"
//     aria-hidden="true"
//     style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
//   >
//     <div className="modal-dialog modal-lg" role="document">
//       <div className="modal-content">
//         <div className="modal-header">
//           <h5 className="modal-title" id="editModalLabel">
//             Edit Jobseeker Details
//           </h5>
//           <button
//             type="button"
//             className="btn-close"
//             onClick={() => setShowEditModal(false)}
//             aria-label="Close"
//           ></button>
//         </div>
//         <div className="modal-body">
//           <form onSubmit={handleUpdateDetails}>
//             <div className="row">
//               <div className="col-md-6 mb-3">
//                 <label className="form-label">Full Name</label>
//                 <input
//                   type="text"
//                   name="fullName"
//                   className="form-control"
//                   value={formData.fullName || ""}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <div className="col-md-6 mb-3">
//                 <label className="form-label">Date of Birth</label>
//                 <input
//                   type="date"
//                   name="dob"
//                   className="form-control"
//                   value={formData.dob || ""}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <div className="col-md-6 mb-3">
//                 <label className="form-label">Gender</label>
//                 <select
//                   name="gender"
//                   className="form-control"
//                   value={formData.gender || ""}
//                   onChange={handleInputChange}
//                 >
//                   <option value="MALE">Male</option>
//                   <option value="FEMALE">Female</option>
//                   <option value="OTHER">Other</option>
//                 </select>
//               </div>
//               <div className="col-md-6 mb-3">
//                 <label className="form-label">Address</label>
//                 <input
//                   type="text"
//                   name="address"
//                   className="form-control"
//                   value={formData.address || ""}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <div className="col-md-6 mb-3">
//                 <label className="form-label">Education</label>
//                 <input
//                   type="text"
//                   name="education"
//                   className="form-control"
//                   value={formData.education || ""}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <div className="col-md-6 mb-3">
//                 <label className="form-label">Experience</label>
//                 <input
//                   type="text"
//                   name="experience"
//                   className="form-control"
//                   value={formData.experience || ""}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <div className="col-md-12 mb-3">
//                 <label className="form-label">Skills</label>
//                 <input
//                   type="text"
//                   name="skills"
//                   className="form-control"
//                   value={formData.skills || ""}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <div className="col-md-12 mb-3">
//                 <label className="form-label">Portfolio URL</label>
//                 <input
//                   type="url"
//                   name="portfolioUrl"
//                   className="form-control"
//                   value={formData.portfolioUrl || ""}
//                   onChange={handleInputChange}
//                 />
//               </div>
//             </div>
//             <button type="submit" className="btn btn-success mt-3">
//               Save Changes
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   </div>
// )}
//     </div>
//   );
// };

// export default DashboardJobseeker;

// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../style/JobseekerDashboard.css";

// const DashboardJobseeker = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const user = location.state?.user || {};
//   const [jobseekerDetails, setJobseekerDetails] = useState(null);
//   const [error, setError] = useState("");
//   const [showProfile, setShowProfile] = useState(false);
//   const [formData, setFormData] = useState({});
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [showPhotoModal, setShowPhotoModal] = useState(false); // For photo update modal
//   const [selectedFile, setSelectedFile] = useState(null); // For photo file upload
// const [jobs, setJobs] = useState([]);
// const [showJobsModal, setShowJobsModal] = useState(false);

//   useEffect(() => {
//     const fetchJobseekerDetails = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:8080/api/jobseeker/${user.userId}`
//         );
//         setJobseekerDetails(response.data);
//         setFormData(response.data);
//       } catch (err) {
//         console.error("Error fetching jobseeker details:", err);
//         setError("Unable to fetch jobseeker details. Please try again later.");
//       }
//     };

//     if (user.userId) {
//       fetchJobseekerDetails();
//     }
//   }, [user.userId]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleUpdateDetails = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put(
//         `http://localhost:8080/api/jobseeker/update/${jobseekerDetails.jobseekerId}`,
//         formData
//       );
//       setJobseekerDetails(formData);
//       setShowEditModal(false);
//       alert("Jobseeker details updated successfully!");
//     } catch (err) {
//       console.error("Error updating jobseeker details:", err);
//       setError("Failed to update details. Please try again.");
//     }
//   };

//   const handleFileChange = (e) => {
//     setSelectedFile(e.target.files[0]);
//   };

//   const handlePhotoUpload = async (e) => {
//     e.preventDefault();
//     if (!selectedFile) {
//       setError("Please select a file.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("file", selectedFile);

//     try {
//       const response = await axios.post(
//         `http://localhost:8080/api/jobseeker/updatePhoto/${jobseekerDetails.jobseekerId}`,
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       setJobseekerDetails({
//         ...jobseekerDetails,
//         profilePicture: response.data.profilePicture,
//       });
//       setShowPhotoModal(false);
//       setSelectedFile(null);
//       alert("Profile photo updated successfully!");
//     } catch (err) {
//       console.error("Error uploading photo:", err);
//       setError("Failed to upload photo. Please try again.");
//     }
//   };

//   const fetchJobs = async () => {
//     try {
//       const response = await axios.get("http://localhost:8080/api/getallpost");
//       setJobs(response.data);
//       setShowJobsModal(true);
//     } catch (err)   {
//       setError("Failed to fetch jobs. Please try again.");
//     }
//   };

//   const applyForJob = async (jobseekerId, postId) => {
//     try {
//       const response = await axios.post(
//         `http://localhost:8080/api/jobapplications/apply?jobseekerId=${jobseekerId}&postId=${postId}`
//       );
//       alert(response.data); // Message from backend
//     } catch (error) {
//       console.error("Error applying for the job:", error);
//       alert("Failed to apply for the job. Please try again.");
//     }
//   };



//   return (
//     <div className="container mt-4">
//       <h1 className="text-primary">Welcome, {user.username || "Jobseeker"}!</h1>
//       <p className="text-muted">Your role is: {user.role}</p>
//       <p>Email: {user.email}</p>
//       <hr />
//       {error && <p className="text-danger">{error}</p>}

//       <div className="mb-4">
//         <button
//           className="btn btn-primary me-3"
//           onClick={() => setShowProfile(!showProfile)}
//         >
//           {showProfile ? "Hide Profile" : "Show Profile"}
//         </button>
//         <button className="btn btn-secondary" onClick={fetchJobs}>
//           Jobs
//         </button>
//         &nbsp;&nbsp;&nbsp;
//         <button className="btn btn-primary" onClick={() => navigate("/login")}>
//           Logout
//         </button>
        
//       </div>

//       {showProfile && jobseekerDetails ? (
//         <div className="card shadow-lg p-4 mb-4">
//           <div className="d-flex align-items-center mb-4">
//             <img
//               src={`http://localhost:8080/api/jobseeker/imgs/${jobseekerDetails.userId}`}
//               alt="Profile"
//               className="rounded-circle me-3"
//               style={{
//                 width: "80px",
//                 height: "80px",
//                 objectFit: "cover",
//                 border: "3px solid #007bff",
//               }}
//             />
//             <h3 className="text-primary mb-0">{jobseekerDetails.fullName}</h3>
//           </div>
//           <div className="text-center mt-2">
//             <button
//               className="btn btn-outline-primary updatebtn"
//               onClick={() => setShowPhotoModal(true)}
//             >
//               Update Photo
//             </button>
//           </div>
//           <table className="table table-borderless align-middle mt-4">
//             <tbody>
//               <tr>
//                 <th className="text-secondary">Gender</th>
//                 <td>{jobseekerDetails.gender}</td>
//                 <th className="text-secondary">Date of Birth</th>
//                 <td>{jobseekerDetails.dob}</td>
//               </tr>
//               <tr>
//                 <th className="text-secondary">Address</th>
//                 <td>{jobseekerDetails.address}</td>
//                 <th className="text-secondary">Education</th>
//                 <td>{jobseekerDetails.education}</td>
//               </tr>
//               <tr>
//                 <th className="text-secondary">Experience</th>
//                 <td>{jobseekerDetails.experience}</td>
//                 <th className="text-secondary">Skills</th>
//                 <td>{jobseekerDetails.skills}</td>
//               </tr>
//               <tr>
//                 <th className="text-secondary">Portfolio</th>
//                 <td colSpan="3">
//                   <a
//                     href={jobseekerDetails.portfolioUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-primary"
//                   >
//                     {jobseekerDetails.portfolioUrl}
//                   </a>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//           <div className="text-center mt-4">
//             <button
//               className="btn btn-outline-primary"
//               onClick={() => setShowEditModal(true)}
//             >
//               Edit Profile
//             </button>
//           </div>
//         </div>
//       ) : (
//         showProfile && !error && <p>Loading jobseeker details...</p>
//       )}

//       {/* Photo Update Modal */}
//       {showPhotoModal && (
//         <div
//           className="modal fade show d-block"
//           tabIndex="-1"
//           style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
//         >
//           <div className="modal-dialog">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title">Update Profile Photo</h5>
//                 <button
//                   type="button"
//                   className="btn-close"
//                   onClick={() => setShowPhotoModal(false)}
//                 ></button>
//               </div>
//               <div className="modal-body">
//                 <form onSubmit={handlePhotoUpload}>
//                   <div className="mb-3">
//                     <label className="form-label">Choose a photo</label>
//                     <input
//                       type="file"
//                       className="form-control"
//                       onChange={handleFileChange}
//                       accept="image/*"
//                     />
//                   </div>
//                   <button type="submit" className="btn btn-success">
//                     Upload
//                   </button>
//                   <button
//                     type="button"
//                     className="btn btn-secondary ms-2"
//                     onClick={() => setShowPhotoModal(false)}
//                   >
//                     Cancel
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Edit Profile Modal */}
//       {showEditModal && (
//         <div
//           className="modal fade show d-block"
//           tabIndex="-1"
//           role="dialog"
//           aria-labelledby="editModalLabel"
//           aria-hidden="true"
//           style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
//         >
//           <div className="modal-dialog modal-lg" role="document">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title" id="editModalLabel">
//                   Edit Jobseeker Details
//                 </h5>
//                 <button
//                   type="button"
//                   className="btn-close"
//                   onClick={() => setShowEditModal(false)}
//                   aria-label="Close"
//                 ></button>
//               </div>
//               <div className="modal-body">
//                 <form onSubmit={handleUpdateDetails}>
//                   <div className="row">
//                     <div className="col-md-6 mb-3">
//                       <label className="form-label">Full Name</label>
//                       <input
//                         type="text"
//                         name="fullName"
//                         className="form-control"
//                         value={formData.fullName || ""}
//                         onChange={handleInputChange}
//                       />
//                     </div>
//                     <div className="col-md-6 mb-3">
//                       <label className="form-label">Date of Birth</label>
//                       <input
//                         type="date"
//                         name="dob"
//                         className="form-control"
//                         value={formData.dob || ""}
//                         onChange={handleInputChange}
//                       />
//                     </div>
//                     <div className="col-md-6 mb-3">
//                       <label className="form-label">Gender</label>
//                       <select
//                         name="gender"
//                         className="form-control"
//                         value={formData.gender || ""}
//                         onChange={handleInputChange}
//                       >
//                         <option value="MALE">Male</option>
//                         <option value="FEMALE">Female</option>
//                         <option value="OTHER">Other</option>
//                       </select>
//                     </div>
//                     <div className="col-md-6 mb-3">
//                       <label className="form-label">Address</label>
//                       <input
//                         type="text"
//                         name="address"
//                         className="form-control"
//                         value={formData.address || ""}
//                         onChange={handleInputChange}
//                       />
//                     </div>
//                     <div className="col-md-6 mb-3">
//                       <label className="form-label">Education</label>
//                       <input
//                         type="text"
//                         name="education"
//                         className="form-control"
//                         value={formData.education || ""}
//                         onChange={handleInputChange}
//                       />
//                     </div>
//                     <div className="col-md-6 mb-3">
//                       <label className="form-label">Experience</label>
//                       <input
//                         type="text"
//                         name="experience"
//                         className="form-control"
//                         value={formData.experience || ""}
//                         onChange={handleInputChange}
//                       />
//                     </div>
//                     <div className="col-md-12 mb-3">
//                       <label className="form-label">Skills</label>
//                       <input
//                         type="text"
//                         name="skills"
//                         className="form-control"
//                         value={formData.skills || ""}
//                         onChange={handleInputChange}
//                       />
//                     </div>
//                     <div className="col-md-12 mb-3">
//                       <label className="form-label">Portfolio URL</label>
//                       <input
//                         type="url"
//                         name="portfolioUrl"
//                         className="form-control"
//                         value={formData.portfolioUrl || ""}
//                         onChange={handleInputChange}
//                       />
//                     </div>
//                     {/* --------------------------------me edit-------------- */}
//                     <div className="col-md-6 mb-3">
//                       <label className="form-label">Branch</label>
//                       <input
//                         type="text"
//                         name="branch"
//                         className="form-control"
//                         value={formData.branch || ""}
//                         onChange={handleInputChange}
//                       />
//                     </div>
              
//                     {/* ---------------------------------end--------------- */}
//                   </div>
//                   <button type="submit" className="btn btn-success mt-3">
//                     Save Changes
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>




//       )}


// {showJobsModal && (
//         <div className="modal fade show d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
//           <div className="modal-dialog modal-lg">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title">Available Jobs</h5>
//                 <button type="button" className="btn-close" onClick={() => setShowJobsModal(false)}></button>
//               </div>
//               <div className="modal-body">
//                 {jobs.length > 0 ? (
//                   jobs.map((job) => (
//                     <div key={job.id} className="card mb-3 shadow-sm">
//                       <div className="card-body">
//                         <h5 className="card-title">{job.jobTitle}</h5>
//                         <h6 className="card-subtitle text-muted">{job.employerInfo.companyName} - {job.jobLocation}</h6>
//                         <p className="card-text mt-2">{job.description}</p>
//                         <p><strong>Salary:</strong> ${job.salary}</p>
//                         <p><strong>Skills Required:</strong> {job.skillsRequired}</p>
//                         <button className="btn btn-success" onClick={() => applyForJob(jobseekerDetails.jobseekerId, job.id)}>Apply</button>
//                       </div>
//                     </div>
//                   ))
//                 ) : (
//                   <p>No jobs available at the moment.</p>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DashboardJobseeker;




import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/JobseekerDashboard.css";

const DashboardJobseeker = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state?.user || {};
  const [jobseekerDetails, setJobseekerDetails] = useState(null);
  const [error, setError] = useState("");
  const [showProfile, setShowProfile] = useState(false);
  const [formData, setFormData] = useState({});
  const [showEditModal, setShowEditModal] = useState(false);
  const [showPhotoModal, setShowPhotoModal] = useState(false); // For photo update modal
  const [selectedFile, setSelectedFile] = useState(null); // For photo file upload
const [jobs, setJobs] = useState([]);
const [showJobsModal, setShowJobsModal] = useState(false);
const [showApplicationsModal, setShowApplicationsModal] = useState(false);
const [jobApplications, setJobApplications] = useState([]);
  useEffect(() => {
    const fetchJobseekerDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/jobseeker/${user.userId}`
        );
        setJobseekerDetails(response.data);
        setFormData(response.data);
      } catch (err) {
        console.error("Error fetching jobseeker details:", err);
        setError("Unable to fetch jobseeker details. Please try again later.");
      }
    };

    if (user.userId) {
      fetchJobseekerDetails();
    }
  }, [user.userId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdateDetails = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:8080/api/jobseeker/update/${jobseekerDetails.jobseekerId}`,
        formData
      );
      setJobseekerDetails(formData);
      setShowEditModal(false);
      alert("Jobseeker details updated successfully!");
    } catch (err) {
      console.error("Error updating jobseeker details:", err);
      setError("Failed to update details. Please try again.");
    }
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handlePhotoUpload = async (e) => {
    e.preventDefault();
    if (!selectedFile) {
      setError("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await axios.post(
        `http://localhost:8080/api/jobseeker/updatePhoto/${jobseekerDetails.jobseekerId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setJobseekerDetails({
        ...jobseekerDetails,
        profilePicture: response.data.profilePicture,
      });
      setShowPhotoModal(false);
      setSelectedFile(null);
      alert("Profile photo updated successfully!");
    } catch (err) {
      console.error("Error uploading photo:", err);
      setError("Failed to upload photo. Please try again.");
    }
  };

  const fetchJobs = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/getallpost");
      setJobs(response.data);
      setShowJobsModal(true);
    } catch (err) {
      setError("Failed to fetch jobs. Please try again.");
    }
  };

  const applyForJob = async (jobseekerId, postId) => {
    try {
      const response = await axios.post(
        `http://localhost:8080/api/jobapplications/apply?jobseekerId=${jobseekerId}&postId=${postId}`
      );
      alert(response.data); // Message from backend
    } catch (error) {
      console.error("Error applying for the job:", error);
      alert("Failed to apply for the job. Please try again.");
    }
  };


  const fetchJobApplications = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/jobapplications/jobseeker/${jobseekerDetails.jobseekerId}`
      );
      setJobApplications(response.data);
      setShowApplicationsModal(true);
    } catch (err) {
      setError("Failed to fetch job applications.");
    }
  };






  return (
    <div className="container mt-4">
      <h1 className="text-primary">Welcome, {user.username || "Jobseeker"}!</h1>
      <p className="text-muted">Your role is: {user.role}</p>
      <p>Email: {user.email}</p>
      <hr />
      {error && <p className="text-danger">{error}</p>}

      <div className="mb-4">
        <button
          className="btn btn-primary me-3"
          onClick={() => setShowProfile(!showProfile)}
        >
          {showProfile ? "Hide Profile" : "Show Profile"}
        </button>
        <button className="btn btn-secondary" onClick={fetchJobs}>
          Jobs
        </button>
        &nbsp;&nbsp;&nbsp;
        <button className="btn btn-secondary me-3" onClick={fetchJobApplications}>
          My Applications
        </button>
         &nbsp;&nbsp;&nbsp;
        <button className="btn btn-primary" onClick={() => navigate("/login")}>
          Logout
        </button>
        
      </div>

      {showProfile && jobseekerDetails ? (
        <div className="card shadow-lg p-4 mb-4">
          <div className="d-flex align-items-center mb-4">
            <img
              src={`http://localhost:8080/api/jobseeker/imgs/${jobseekerDetails.userId}`}
              alt="Profile"
              className="rounded-circle me-3"
              style={{
                width: "80px",
                height: "80px",
                objectFit: "cover",
                border: "3px solid #007bff",
              }}
            />
            <h3 className="text-primary mb-0">{jobseekerDetails.fullName}</h3>
          </div>
          <div className="text-center mt-2">
            <button
              className="btn btn-outline-primary updatebtn"
              onClick={() => setShowPhotoModal(true)}
            >
              Update Photo
            </button>
          </div>
          <table className="table table-borderless align-middle mt-4">
            <tbody>
              <tr>
                <th className="text-secondary">Gender</th>
                <td>{jobseekerDetails.gender}</td>
                <th className="text-secondary">Date of Birth</th>
                <td>{jobseekerDetails.dob}</td>
              </tr>
              <tr>
                <th className="text-secondary">Address</th>
                <td>{jobseekerDetails.address}</td>
                <th className="text-secondary">Education</th>
                <td>{jobseekerDetails.education}</td>
              </tr>
              {/* ------------------------------------ */}
              <tr>
                <th className="text-secondary">Branch</th>
                <td>{jobseekerDetails.branch}</td>
                <th className="text-secondary">Education</th>
                <td>{jobseekerDetails.education}</td>
              </tr>
              {/* _____-------------------------------------- */}
              <tr>
                <th className="text-secondary">Experience</th>
                <td>{jobseekerDetails.experience}</td>
                <th className="text-secondary">Skills</th>
                <td>{jobseekerDetails.skills}</td>
              </tr>
              <tr>
                <th className="text-secondary">Portfolio</th>
                <td colSpan="3">
                  <a
                    href={jobseekerDetails.portfolioUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary"
                  >
                    {jobseekerDetails.portfolioUrl}
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="text-center mt-4">
            <button
              className="btn btn-outline-primary"
              onClick={() => setShowEditModal(true)}
            >
              Edit Profile
            </button>
          </div>
        </div>
      ) : (
        showProfile && !error && <p>Loading jobseeker details...</p>
      )}

      {/* Photo Update Modal */}
      {showPhotoModal && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Update Profile Photo</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowPhotoModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handlePhotoUpload}>
                  <div className="mb-3">
                    <label className="form-label">Choose a photo</label>
                    <input
                      type="file"
                      className="form-control"
                      onChange={handleFileChange}
                      accept="image/*"
                    />
                  </div>
                  <button type="submit" className="btn btn-success">
                    Upload
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary ms-2"
                    onClick={() => setShowPhotoModal(false)}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Profile Modal */}
      {showEditModal && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="editModalLabel"
          aria-hidden="true"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="editModalLabel">
                  Edit Jobseeker Details
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowEditModal(false)}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleUpdateDetails}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Full Name</label>
                      <input
                        type="text"
                        name="fullName"
                        className="form-control"
                        value={formData.fullName || ""}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Date of Birth</label>
                      <input
                        type="date"
                        name="dob"
                        className="form-control"
                        value={formData.dob || ""}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Gender</label>
                      <select
                        name="gender"
                        className="form-control"
                        value={formData.gender || ""}
                        onChange={handleInputChange}
                      >
                        <option value="MALE">Male</option>
                        <option value="FEMALE">Female</option>
                        <option value="OTHER">Other</option>
                      </select>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Address</label>
                      <input
                        type="text"
                        name="address"
                        className="form-control"
                        value={formData.address || ""}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Education</label>
                      <input
                        type="text"
                        name="education"
                        className="form-control"
                        value={formData.education || ""}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Experience</label>
                      <input
                        type="text"
                        name="experience"
                        className="form-control"
                        value={formData.experience || ""}
                        onChange={handleInputChange}
                      />
                    </div>
                    {/* -------------------------------- */}
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Branch</label>
                      <input
                        type="text"
                        name="branch"
                        className="form-control"
                        value={formData.branch || ""}
                        onChange={handleInputChange}
                      />
                    </div>
                    {/* __________________________________ */}
                    <div className="col-md-12 mb-3">
                      <label className="form-label">Skills</label>
                      <input
                        type="text"
                        name="skills"
                        className="form-control"
                        value={formData.skills || ""}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-md-12 mb-3">
                      <label className="form-label">Portfolio URL</label>
                      <input
                        type="url"
                        name="portfolioUrl"
                        className="form-control"
                        value={formData.portfolioUrl || ""}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <button type="submit" className="btn btn-success mt-3">
                    Save Changes
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>




      )}


{showJobsModal && (
        <div className="modal fade show d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Available Jobs</h5>
                <button type="button" className="btn-close" onClick={() => setShowJobsModal(false)}></button>
              </div>
              <div className="modal-body">
                {jobs.length > 0 ? (
                  jobs.map((job) => (
                    <div key={job.id} className="card mb-3 shadow-sm">
                      <div className="card-body">
                        <h5 className="card-title">{job.jobTitle}</h5>
                        <h6 className="card-subtitle text-muted">{job.employerInfo.companyName} - {job.jobLocation}</h6>
                        <p className="card-text mt-2">{job.description}</p>
                        <p><strong>Salary:</strong> ${job.salary}</p>
                        <p><strong>Skills Required:</strong> {job.skillsRequired}</p>
                        <button className="btn btn-success" onClick={() => applyForJob(jobseekerDetails.jobseekerId, job.id)}>Apply</button>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No jobs available at the moment.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Job Applications Modal */}
      {showApplicationsModal && (
        <div className="modal fade show d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">My Job Applications</h5>
                <button type="button" className="btn-close" onClick={() => setShowApplicationsModal(false)}></button>
              </div>
              <div className="modal-body">
                {jobApplications.length > 0 ? (
                  jobApplications.map((app) => (
                    <div key={app.applicationId} className="card mb-3 shadow-sm">
                      <div className="card-body">
                        <h5 className="card-title">{app.jobTitle}</h5>
                        <h6 className="card-subtitle text-muted">{app.companyName}</h6>
                        <p className="card-text"><strong>Status:</strong> {app.applicationStatus}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No job applications found.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardJobseeker;