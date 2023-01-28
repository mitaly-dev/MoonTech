import { RouterProvider } from "react-router-dom";
import { router } from "./route/route";

function App() {
 
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
