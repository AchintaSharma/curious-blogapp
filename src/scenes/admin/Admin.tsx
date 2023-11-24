import Dashboard from "./components/Dashboard.tsx"
import Overview from "./components/Overview.tsx"



const Admin = () => (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <div>
      {/* // eslint-disable-next-line react/no-children-prop, react/no-children-prop */}
      <Dashboard>
        <Overview />
      </Dashboard>
    </div>
  )

export default Admin