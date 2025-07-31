import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import Jobs from "./pages/Jobs";
import Job, { jobLoader } from "./pages/Job";
import AddJob from "./pages/AddJob";
import EditJob from "./pages/EditJob";
import NotFound from "./pages/NotFound";

const App = () => {
  // Add Job (POST)
  const addJob = (newJob) => {
    const postJob = async () => {
      try {
        const apiUrl = "/api/jobs";
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newJob),
        });
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(
            `HTTP error! Status: ${response.status}, Message: ${
              errorData.message || "Unknown error"
            }`
          );
        }
        return;
      } catch (error) {
        console.log("Failed To Add Job", error);
      }
    };
    postJob();
  };

  // Delete Job (DELETE)
  const deleteJob = async (id) => {
    try {
      const apiUrl = `/api/jobs/${id}`;
      const response = await fetch(apiUrl, {
        method: "DELETE",
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `HTTP error! Status: ${response.status}, Message: ${
            errorData.message || "Unknown error"
          }`
        );
      }
      return;
    } catch (error) {
      console.log("Failed To Delete Job", error);
    }
  };

  // Edit Job (PUT)
  const updateJob = async (job) => {
    try {
      const apiUrl = `/api/jobs/${job.id}`;
      const response = await fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(job),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `HTTP error! Status: ${response.status}, Message: ${
            errorData.message || "Unknown error"
          }`
        );
      }
      return;
    } catch (error) {
      console.log("Failed To Update Job", error);
    }
  };
  // ROUTER
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/add-job" element={<AddJob addJobSubmit={addJob} />} />
        <Route
          path="/jobs/:id"
          element={<Job deleteJob={deleteJob} />}
          loader={jobLoader}
        />
        <Route
          path="edit-job/:id"
          element={<EditJob updateJobSubmit={updateJob} />}
          loader={jobLoader}
        />
        <Route path="/*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
