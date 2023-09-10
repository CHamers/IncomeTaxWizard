import Job from "../models/JobModel.js";
import { StatusCodes } from "http-status-codes";

// import { nanoid } from "nanoid";
// let jobs = [
//   {
//     id: nanoid(),
//     company: "apple",
//     position: "front-end",
//   },
//   {
//     id: nanoid(),
//     company: "google",
//     position: "back-end",
//   },
// ];

export const getAllJobs = async (req, res) => {
  console.log(req.user);
  const jobs = await Job.find({ createdBy: req.user.userId });
  // console.log(req);
  // const jobs = await Job.find({company:"FacebookManager"})
  // res.status(200).json({ jobs });
  res.status(StatusCodes.OK).json({ jobs });
};

export const createJob = async (req, res) => {
  // const { company, position } = req.body;
  // if (!company || !position) {
  //   return res.status(400).json({ msg: "Please provide company and position" });
  // }
  // const id = nanoid(10);
  // const job = { id, company, position };
  // jobs.push(job);

  // try {
  //   const job = await Job.create(req.body);
  //   res.status(201).json({ job });
  // } catch (err) {
  //   console.log(err);
  //   res.status(500).json({ mess: "server error" });
  // }
 req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  // res.status(201).json({ job });
  res.status(StatusCodes.CREATED).json({ job });
};

export const getJob = async (req, res) => {
  // const { id } = req.params;
  // const job = jobs.find((job) => job.id === id);
  const job = await Job.findById(req.params.id).exec();
  // if (!job) {
  //   // throw new Error(`no job with that id`);
  //   return res.status(404).json({ msg: `no job with id ${id}` });
  // }
  // if (!job) throw new NotFoundError(`no job with id ${id}`);
  // res.status(200).json({ job });
  res.status(StatusCodes.OK).json({ job });
};

export const updateJob = async (req, res) => {
  // const { id } = req.params;
  // const job = jobs.find((job) => job.id === id);
  const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  // if (!updatedJob) {
  //   return res.status(404).json({ msg: `no job with id ${id}` });
  // }
  // if (!updatedJob) throw new NotFoundError(`no job with id ${id}`);
  // const { company, position } = req.body;
  // if (!company || !position) {
  //   return res.status(400).json({ msg: "Please provide company and position" });
  // }
  // job.company = company;
  // job.position = position;
  res.status(StatusCodes.OK).json({ msg: `job modified`, job: updatedJob });
};

export const deleteJob = async (req, res) => {
  // const { id } = req.params;
  // const job = jobs.find((job) => job.id === id);
  const removedJob = await Job.findByIdAndDelete(req.params.id);
  // if (!removedJob) {
  //   return res.status(404).json({ msg: `no job with id ${id}` });
  // }
  // if(!removedJob) throw new NotFoundError(`no job with id ${id}`);
  // const newJobs = jobs.filter((job) => job.id !== id);
  // jobs = newJobs;
  res.status(StatusCodes.OK).json({ msg: "job deleted", job: removedJob });
};
