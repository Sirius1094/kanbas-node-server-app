import assignmentModel from "./model.js";

export const createAssignment = (assignment) => assignmentModel.create(assignment);
export const findAllAssignments = () => assignmentModel.find().populate('course');
export const findAssignmentById = (id) => assignmentModel.findById(id).populate('course');
export const updateAssignment = (id, assignment) => assignmentModel.updateOne({ _id: id }, { $set: assignment });
export const deleteAssignment = (id) => assignmentModel.deleteOne({ _id: id });
