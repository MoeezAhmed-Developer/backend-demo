import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server is running successfully.",
    status: "success",
  });
});

app.get("/api", (req, res) => {
  const data = [
    {
      name: "Ahmed Khan",
      age: 24,
      email: "ahmed@example.com",
      location: "Karachi",
      profession: "Web Developer",
    },
    {
      name: "Sara Malik",
      age: 22,
      email: "sara@example.com",
      location: "Lahore",
      profession: "UI/UX Designer",
    },
    {
      name: "Hamza Ali",
      age: 27,
      email: "hamza@example.com",
      location: "Islamabad",
      profession: "Software Engineer",
    },
    {
      name: "Ayesha Noor",
      age: 25,
      email: "ayesha@example.com",
      location: "Karachi",
      profession: "Digital Marketer",
    },
    {
      name: "Usman Raza",
      age: 29,
      email: "usman@example.com",
      location: "Faisalabad",
      profession: "Backend Developer",
    },
    {
      name: "Hina Ahmed",
      age: 23,
      email: "hina@example.com",
      location: "Multan",
      profession: "Graphic Designer",
    },
    {
      name: "Bilal Hassan",
      age: 31,
      email: "bilal@example.com",
      location: "Rawalpindi",
      profession: "Project Manager",
    },
    {
      name: "Maham Fatima",
      age: 26,
      email: "maham@example.com",
      location: "Peshawar",
      profession: "Content Writer",
    },
    {
      name: "Danish Shah",
      age: 28,
      email: "danish@example.com",
      location: "Quetta",
      profession: "Mobile App Developer",
    },
    {
      name: "Zoya Iqbal",
      age: 21,
      email: "zoya@example.com",
      location: "Hyderabad",
      profession: "Frontend Developer",
    },
  ];
  res.status(200).json({
    message: data,
    status: "success",
  });
});

app.listen(3200);
