const mongoose = require("mongoose");
const resumeModel = new mongoose.Schema(
    {
        profileinfo: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
        education: {
            type: Array,
            default: [],
            required: [true, "Education is required"],
        },
        skill: {
            type: Array,
            default: [],
            required: [true, "Skill is required"],
        },
        projects: [],
        experience: [],
        interest: [],
    },
    
    { timestamps: true }
);

const Resume = mongoose.model("resume", resumeModel);
module.exports = Resume;