import { BrowserRouter as Router } from "react-router-dom"; // Use only Router, not Routes

export const SharedRouter = ({ children }) => {
  return (
    <Router>
      {children} {/* children already contains <Routes> from HostApp */}
    </Router>
  );
};
