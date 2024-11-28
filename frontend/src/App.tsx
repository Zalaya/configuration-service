import { BrowserRouter } from "react-router-dom";

import AuthProvider from "@/contexts/auth/AuthProvider";
import AppRouter from "@/router/AppRouter";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
