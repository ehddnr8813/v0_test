import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ImageGenerator from "@/components/image-generator";

// const RedirectHandler = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const params = new URLSearchParams(location.search);
//   const jwt = params.get("jwt");

//   useEffect(() => {
//     if (location.pathname == "/") return;
//     // 현재 경로를 쿼리 파라미터로 포함하여 "/"로 리다이렉션
//     navigate(`/`);
//   }, [location, navigate, jwt]);

//   return <div>Redirecting...</div>;
// };

// const ErrorHandler = () => {
//   return <div>비정상 접근..</div>;
// };

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ImageGenerator />} />
      </Routes>
    </Router>
  );
}

export default App;
