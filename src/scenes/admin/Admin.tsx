import Dashboard from "./components/Dashboard.tsx"
import ManageCategories from "./components/ManageCategories.tsx"
import ManageUsers from "./components/ManageUsers.tsx"
import MangeBlog from "./components/MangeBlog.tsx"
import Overview from "./components/Overview.tsx"



const Admin = () => (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <div>
      {/* // eslint-disable-next-line react/no-children-prop, react/no-children-prop */}
      <Dashboard>
        {/* <Overview /> */}
        {/* <MangeBlog /> */}
        {/* <ManageUsers /> */}
        <ManageCategories />
      </Dashboard>
    </div>
  )

export default Admin