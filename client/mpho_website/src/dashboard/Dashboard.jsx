import { UserButton } from "@clerk/clerk-react";

function Dashboard() {
  return (
    <div>
      <UserButton afterSignOutUrl="/login"/>
    </div>
  );
}

export default Dashboard;