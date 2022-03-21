import { eventData } from "./EventsData";
import { scholarshipData } from "./ScholarshipData";
import { membershipData } from "./membershipData";

export const scholarshipComponents = {
  id: "scholarship",
  heading: "Donate for our Tigers",
  cardsData: scholarshipData,
  buttonTo: "/scholarship",
  buttonLable: "More Scholarship",
  lightBg: false,
  lightText: true,
  cLightBg: true,
  cButtonTo: "/scholarship",
  cButtonLabel: "Donate",
};

export const eventsComponenets = {
  id: "events",
  heading: "Events",
  cardsData: eventData,
  buttonTo: "/events",
  buttonLable: "More Events",
  lightBg: true,
  lightText: false,
  cLightBg: false,
  cButtonTo: "/events",
  cButtonLabel: "Going",
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
  cButtonTo: "",
  cButtonLabel: "Buy",
};
