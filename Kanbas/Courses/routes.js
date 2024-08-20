import * as dao from "./dao.js";

export default function CourseRoutes(app) {

    const createCourse = async (req, res) => {
        try {
            console.log("Received request to create course:", req.body);
            const newCourse = await dao.createCourse(req.body);
            console.log("Successfully created course:", newCourse);
            res.json(newCourse);
        } catch (error) {
            console.error("Error creating course:", error.message);
            res.status(500).json({ error: error.message });
        }
    };

    const deleteCourse = async (req, res) => {
        try {
            const { courseId } = req.params;
            const result = await dao.deleteCourse(courseId);
            if (result.deletedCount > 0) {
                res.sendStatus(204); 
            } else {
                res.status(404).json({ error: "Course not found" });
            }
        } catch (error) {
            console.error("Error deleting course:", error.message);
            res.status(500).json({ error: error.message });
        }
    };

    const findAllCourses = async (req, res) => {
        try {
            const courses = await dao.findAllCourses();
            res.json(courses);
        } catch (error) {
            console.error("Error retrieving courses:", error.message);
            res.status(500).json({ error: error.message });
        }
    };

    const findCourseById = async (req, res) => {
        try {
            const { courseId } = req.params;
            const course = await dao.findCourseById(courseId);
            if (course) {
                res.json(course);
            } else {
                res.status(404).json({ error: "Course not found" });
            }
        } catch (error) {
            console.error("Error retrieving course:", error.message);
            res.status(500).json({ error: error.message });
        }
    };

    const updateCourse = async (req, res) => {
        try {
            const { courseId } = req.params;
            const updatedCourse = req.body;
            const result = await dao.updateCourse(courseId, updatedCourse);
            if (result.modifiedCount > 0) {
                res.sendStatus(204); 
            } else {
                res.status(404).json({ error: "Course not found or no changes made" });
            }
        } catch (error) {
            console.error("Error updating course:", error.message);
            res.status(500).json({ error: error.message });
        }
    };

    app.post("/api/courses", createCourse);
    app.delete("/api/courses/:courseId", deleteCourse);
    app.get("/api/courses", findAllCourses);
    app.get("/api/courses/:courseId", findCourseById);
    app.put("/api/courses/:courseId", updateCourse);
}