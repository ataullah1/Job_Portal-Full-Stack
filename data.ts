export interface Job {
  id: number;
  title: string;
  image: string;
  salary: string;
  location: string;
  jobtype: string;
}

const JobData: Job[] = [
  {
    id: 1,
    title: "Software Engineer",
    image: "/images/c1.png",
    salary: "60k - 80k BDT",
    location: "Dhaka, Bangladesh",
    jobtype: "full time",
  },
  {
    id: 2,
    title: "DevOps Engineer",
    image: "/images/c2.png",
    salary: "70k - 90k BDT",
    location: "Chittagong, Bangladesh",
    jobtype: "full time",
  },
  {
    id: 3,
    title: "Frontend Developer",
    image: "/images/c3.png",
    salary: "50k - 70k BDT",
    location: "Sylhet, Bangladesh",
    jobtype: "full time",
  },
  {
    id: 4,
    title: "Backend Developer",
    image: "/images/c4.png",
    salary: "55k - 75k BDT",
    location: "Khulna, Bangladesh",
    jobtype: "Part time",
  },
  {
    id: 5,
    title: "Full Stack Developer",
    image: "/images/c5.png",
    salary: "80k - 100k BDT",
    location: "Dhaka, Bangladesh",
    jobtype: "full time",
  },
  {
    id: 6,
    title: "UI/UX Designer",
    image: "/images/c6.png",
    salary: "45k - 65k BDT",
    location: "Rajshahi, Bangladesh",
    jobtype: "Freelance",
  },
];

export default JobData;
