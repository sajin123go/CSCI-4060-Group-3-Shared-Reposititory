import { eventData } from "./EventsData";
import { scholarshipData } from "./ScholarshipData";
import { membershipData } from "./membershipData";

export const scholarshipComponents = {
  id: "scholarship",
  heading: "Donate for our Tigers",
  cardsData: scholarshipData,
  buttonTo: "/scholarship/all",
  buttonLable: "More Scholarship",
  lightBg: false,
  lightText: true,
  cLightBg: true,
  cButtonLabel: "Donate",
  cButtonTo: "/payment",
};

export const eventsComponents = {
  id: "events",
  heading: "Events",
  cardsData: eventData,
  buttonTo: "/event/all",
  buttonLable: "More Events",
  lightBg: true,
  lightText: false,
  cLightBg: false,
  cButtonTo: "/event",
  cButtonLabel: "Learn More",
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
