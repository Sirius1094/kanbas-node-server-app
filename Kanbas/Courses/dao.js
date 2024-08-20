import CourseModel from "./model.js";

export const createCourse = async (course) => {
    return await CourseModel.create(course);
};

export const findAllCourses = async () => {
    return await CourseModel.find();
};

export const findCourseById = async (courseId) => {
    return await CourseModel.findById(courseId);
};

export const updateCourse = async (courseId, course) => {
    return await CourseModel.updateOne({ _id: courseId }, { $set: course });
};

export const deleteCourse = async (courseId) => {
    return await CourseModel.deleteOne({ _id: courseId });
};