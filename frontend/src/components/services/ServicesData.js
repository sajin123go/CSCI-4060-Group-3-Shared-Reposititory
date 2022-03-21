import { eventData } from "./EventsData";
import { scholarshipData } from "./ScholarshipData";
import { membershipData } from "./membershipData";

export const scholarshipComponents = {
  id: "scholarship",
  heading: "Donate for out Tigers",
  cardsData: scholarshipData,
  buttonTo: "",
  buttonLable: "More Scholarship",
  lightBg: false,
  lightText: true,
  cLightBg: true,
};

export const eventsComponenets = {
  id: "events",
  heading: "Events",
  cardsData: eventData,
  buttonTo: "",
  buttonLable: "More Events",
  lightBg: true,
  lightText: false,
  cLightBg: false,
};

export const membershipComponents = {
  id: "membershipPayment",
  heading: "Membership",
  cardsData: membershipData,
  buttonTo: "",
  buttonLable: "pay",
  lightBg: false,
  lightText: true,
  cLightBg: true,
};
