
const color = {
  blue: "#1795CC",
  blueLight: "#23A0D3",
  blueLighter: "#5BB8E2",
  blueLightest: "#EFF8FD",
  blueAlpha80: "rgba(24, 149, 204, 0.80)",

  blueGreyDark: "#535e6a",
  blueGrey: "#677482",
  blueGreyLight: "#D9E1E9",
  blueGreyLighter: "#E8EFF6",
  blueGreyLightest: "#F7F9FB",

  greenDarkerest: "#66A66A",
  greenDarker: "#5AAC44",
  greenDark: "#67BB7A",
  green: "#19CB52",
  greenLight: "#68DD8E",
  greenLightest: "#92DA96",
  greenPizza: "#8CD790",
  greenPaid: "#ACF39D",
  greenPayment: "#8CC680",

  grey98: "hsl(0, 0%, 98%)",
  grey97: "hsl(0, 0%, 97%)",
  grey96: "hsl(0, 0%, 96%)",
  grey95: "hsl(0, 0%, 95%)",
  grey94: "hsl(0, 0%, 94%)",
  grey93: "hsl(0, 0%, 93%)",
  grey88: "hsl(0, 0%, 88%)",
  grey87: "hsl(0, 0%, 87%)",
  grey85: "hsl(0, 0%, 85%)",
  grey80: "hsl(0, 0%, 80%)",
  grey60: "hsl(0, 0%, 60%)",
  grey50: "hsl(0, 0%, 50%)",
  grey37: "hsl(0, 0%, 37%)",
  grey33: "hsl(0, 0%, 33%)",
  grey30: "hsl(0, 0%, 30%)",
  grey27: "hsl(0, 0%, 27%)",
  grey23: "hsl(0, 0%, 23%)",
  grey20: "hsl(0, 0%, 20%)",
  grey10: "hsl(0, 0%, 10%)",

  orange: "#FF9055",

  red: "#FF818C",
  redDark: "#E35757",
  redLightest: "#FCEBEB",

  burntPink: "#CCA084",

  yellow: "#FFDB28",

  glimmerColor: "#f6f7f9",
  glimmerGradient: "#e9ebee",

  black: "#000",
  blackAlpha95: "rgba(0, 0, 0, 0.95)",
  blackAlpha80: "rgba(0, 0, 0, 0.80)",
  blackAlpha45: "rgba(0, 0, 0, 0.45)",
  blackAlpha40: "rgba(0, 0, 0, 0.40)",
  blackAlpha25: "rgba(0, 0, 0, 0.25)",
  blackAlpha15: "rgba(0, 0, 0, 0.15)",

  white: "#FFF",
  whiteAlpha40: "rgba(255, 255, 255, 0.40)",

  transparent: "transparent",

  // XXX Possibly simplify these w/ Mitchell
  slaFailure: "#D3605C",
  slaSuccess: "#5ACC25",
  slaWarning: "#F9DB54",
  canceledAccent: "#EDEEEE",
  completedAccent: "#E2FBDD",
  jobInfo: "#D0BA83",
  jobInfoAccent: "#FDFBF9",
  lost: "#FFA4AC",
  lostAccent: "#FFFAFA",
  note: "#EFE88F",
  noteAccent: "#FFFEF8",
  noteIconBackground: "#FFF7BE",
  noteIconEdge: "#FFEF7E",
  offered: "#5ACC25",
  offerAccent: "#ECEEFF",
  partial: "#A5E9FE",
  paused: "#FFE31C",
  pausedAccent: "#FFE6E8",
  paymentAccent: "#F9FCF8",
  scheduledAccent: "#DDF1F9",
  sent: "#FFC8A5",
  sentAccent: "#FFFBF9",
  startedAccent: "#FFEFE4",
  surveyStar: "#FFD578",
  surveyBox: "#B9C3CB",
  unscheduled: "#CCBB67",
  unscheduledAccent: "#FFFADC",
  won: "#A6B0FF",
  wonAccent: "#F9FAFF",

  // Pizza Tracker
  pizzaTrackerHeaderBackground: "#2B2F35",
  pizzaTrackerDetailsBackground: "#30353D",
  pizzaTrackerTimelineBackground: "#424B54",
  pizzaTrackerBlueGreyLight: "#ABB3BC"
};

const statusColors = {
  // Color Aliases
  canceled: color.grey60,
  lost: color.red,
  placeholder: color.grey60,
  overdue: color.red,
  paused: color.red,
  scheduled: color.blue,
  started: color.sent,
  appointmentCanceledAccent: color.lostAccent,
  paid: color.greenPaid,
  payment: color.greenPayment,

  flatBtnSuccess: color.green,

  appointment: {
    canceled: "#ABB3BC",
    complete: "#CAD4DD",
    draft: "#454A52",
    enroute: color.orange,
    issue: "#FB3640",
    scheduled: color.blue,
    started: color.orange
  },

  job: {
    all: color.grey27,

    // Service
    canceled: "#ABB3BC",
    complete: "#CAD4DD",
    in_progress: color.orange,
    issue: "#FB3640",
    offered: "#5ACC25",
    paused: "#FFDB28",
    scheduled: color.blue,
    unscheduled: "#FB3640",

    // Sales
    lead: "#5ACC25",
    contact_again: "#FB3640",
    sales_appointment: color.blue,
    quote: "#A6B0FF",
    lost: color.grey23,
    won: color.grey88
  },

  warrantyBilling: {
    draft: color.grey60,
    authorization_requested: color.yellow,
    authorized: color.green,
    authorization_denied: color.red,
    invoice_submitted: color.blue,
    invoice_approved: color.green,
    invoice_denied: color.red
  }
};

export default {
  ...color,
  ...statusColors,
};
