import { useParams } from "react-router-dom"
import Dashboard from "./components/Dashboard.tsx"
import ManageCategories from "./components/ManageCategories.tsx"
import ManageUsers from "./components/ManageUsers.tsx"
import MangeBlog from "./components/MangeBlog.tsx"
import Overview from "./components/Overview.tsx"



const Admin = () => {
  const {action} = useParams();

  // default action
  const defaultAction = action || "overview";
  
  return(
    <div>
    {/* // eslint-disable-next-line react/no-children-prop, react/no-children-prop */}
    <Dashboard>
      {defaultAction === "overview" && <Overview />}
      {defaultAction === "manage-users" && <ManageUsers />}
      {defaultAction === "manage-blogs" && <MangeBlog />}
      {defaultAction === "manage-categories" && <ManageCategories />}
      
    </Dashboard>
  </div>
   
  )}

export default Admin