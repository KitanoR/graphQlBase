'use strict'

const { ObjectID } = require('mongodb');
const connectDB = require('./db');

module.exports = {
    getCourses: async () => {
        let courses = [];
        try {
            let db = await connectDB();
            courses = await db.collection('courses').find().toArray();

        } catch (error) {
            console.error(error)
        }
        return courses;
    },
    getCourse: async (root, {id}) => {
        // const course = courses.filter(course => course._id = args.id);
        let db;
        let course;
        try {
            db = await connectDB();
            course = await db.collection('courses').findOne({_id: ObjectID(id)})
        } catch (error) {
            console.log(error);
        }
        return course;
    },
    getStudents: async () => {
        let estudiantes = [];
        try {
            let db = await connectDB();
            estudiantes = await db.collection('students').find().toArray();

        } catch (error) {
            console.error(error)
        }
        return estudiantes;
    },
    getStudent: async (root, {id}) => {
        // const course = courses.filter(course => course._id = args.id);
        let db;
        let estudiante;
        try {
            db = await connectDB();
            estudiante = await db.collection('students').findOne({_id: ObjectID(id)})
        } catch (error) {
            console.log(error);
        }
        return estudiante;
    },
}