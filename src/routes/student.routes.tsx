import OfferedCorse from "../pages/student/OfferedCourse";
import StudentDashboard from "../pages/student/StudentDashboard";

 const studentPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <StudentDashboard />,
  },
  {
    name: "Offered Course",
    children: [
      {
        name: "Offered Course",
        path: "offered-course",
        element: <OfferedCorse />,
      },
    ],
  },
];


export default studentPaths