import {
  Civil_PTU,
  Civil_PKIET,
  Mech_PTU,
  ECE_PTU,
  ECE_PKIET,
  CSE_PTU,
  CSE_PKIET,
  EEE_PTU,
  EIE_PTU,
  Chemical_PTU,
  IT_PTU,
  IT_PKIET,
  Physics_PTU,
  Physics_PKIET,
  Chemistry_PKIET,
  Chemistry_PTU,
  Mathematics_PTU,
  Mathematics_PKIET,
} from "./Supervisors";

const Supervisors_dept = [
  {
    dept: "Civil Engineering",
    id: 1,
    ptu: Civil_PTU,
    pkiet_status: true,
    pkiet: Civil_PKIET,
  },
  {
    dept: "Mechanical Engineering",
    id: 2,
    ptu: Mech_PTU,
    pkiet_status: false,
  },
  {
    dept: "Computer Science and Engineering",
    id: 3,
    ptu: CSE_PTU,
    pkiet_status: true,
    pkiet: CSE_PKIET,
  },
  {
    dept: "Electronics and Communication Engineering",
    id: 4,
    ptu: ECE_PTU,
    pkiet_status: true,
    pkiet: ECE_PKIET,
  },
  {
    dept: "Electrical and Electronics Engineering",
    id: 5,
    ptu: EEE_PTU,
    pkiet_status: false,
  },
  {
    dept: "Chemical Engineering",
    id: 6,
    ptu: Chemical_PTU,
    pkiet_status: false,
  },
  {
    dept: "Information Technology",
    id: 7,
    ptu: IT_PTU,
    pkiet_status: true,
    pkiet: IT_PKIET,
  },
  {
    dept: "Physics",
    id: 8,
    ptu: Physics_PTU,
    pkiet_status: true,
    pkiet: Physics_PKIET,
  },
  {
    dept: "Chemistry",
    id: 9,
    ptu: Chemistry_PTU,
    pkiet_status: true,
    pkiet: Chemistry_PKIET,
  },
  {
    dept: "Mathematics",
    id: 10,
    ptu: Mathematics_PTU,
    pkiet_status: true,
    pkiet: Mathematics_PKIET,
  },
];

export { Supervisors_dept };
