import moduleModel from "./model.js";

export const createModule = (module) => moduleModel.create(module);
export const findAllModules = () => moduleModel.find().populate('course');
export const findModuleById = (id) => moduleModel.findById(id).populate('course');
export const updateModule = (id, module) => moduleModel.updateOne({ _id: id }, { $set: module });
export const deleteModule = (id) => moduleModel.deleteOne({ _id: id });
export const findModulesByCourseId = async (courseId) => {
    return moduleModel.find({ course: courseId });
  };