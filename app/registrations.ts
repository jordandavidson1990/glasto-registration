export type Registration = {
  id: string;
  name: string;
  registration: string;
  postcode: string;
  note?: string;
};

// Add or update your crew here, then commit and deploy the change.
// Keep this repository private if these details should not be public.
export const registrations: Registration[] = [
  {
    id: "jordan-davidson",
    name: "Jordan Davidson",
    registration: "2091269074",
    postcode: "G42 9SG",
  },
  {
    id: "gina-mackenzie-loughrey",
    name: "Gina Mackenzie Loughrey",
    registration: "1279026373",
    postcode: "G42 9SG",
  },
  {
    id: "iona-grant",
    name: "Iona Grant",
    registration: "948973004",
    postcode: "G42 9SN",
  },
  {
    id: "craig-gough",
    name: "Craig Gough",
    registration: "2292931903",
    postcode: "G41 3HR",
  },
  {
    id: "emma-cockburn",
    name: "Emma Cockburn",
    registration: "945300668",
    postcode: "G41 2SX",
  },
  {
    id: "lorna-begg",
    name: "Ms Lorna Begg",
    registration: "3608505278",
    postcode: "G31 2QG",
  },
];
