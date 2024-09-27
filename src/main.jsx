import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider} from "./context/RouterProvider.jsx";
import {router} from "./context/router.jsx";

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
