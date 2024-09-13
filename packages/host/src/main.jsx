import React, { Suspense, lazy } from "react";
import { createRoot } from "react-dom/client"; // Import createRoot from react-dom/client
import { SharedRouter } from "shared-router";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route

const App1 = lazy(() => import("./../../app1/src/App"));
const App2 = lazy(() => import("./../../app2/src/App"));

const HostApp = () => {
  return (
    <SharedRouter>
      <Routes>
        <Route
          path="/app1/*"
          element={
            <Suspense fallback={<div>Loading App 1...</div>}>
              <App1 />
            </Suspense>
          }
        />
        <Route
          path="/app2/*"
          element={
            <Suspense fallback={<div>Loading App 2...</div>}>
              <App2 />
            </Suspense>
          }
        />
      </Routes>
    </SharedRouter>
  );
};

// Use createRoot instead of ReactDOM.render
const container = document.getElementById("root");
const root = createRoot(container); // Create a root
root.render(<HostApp />); // Render the application
