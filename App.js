import express from "express";
import Hello from "./Hello.js";
import Lab5 from "./Lab5/index.js";
import cors from "cors";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import AssignmentRoutes from "./Kanbas/Assignments/routes.js";
import PathParameters from "./Lab5/PathParameters.js";
import QueryParameters from "./Lab5/QueryParameters.js";

const app = express();
app.use(cors());
app.use(express.json());
Hello(app);
Lab5(app);
PathParameters(app);
QueryParameters(app);
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);

app.listen(process.env.PORT || 4000);
