export type Client =
  | "BedKingdom"
  | "CookersOvens"
  | "CycleUK"
  | "SecretLab"
  | "TheWorm"
  | "Aldi"
  // | "AlicesGarden"
  | "CotswoldCo"
  | "Echelon"
  | "JulianBowen"
  | "NectarSleep"
  | "OliverBonas"
  | "RicherSounds"
  | "Tikamoon"
  | "XRocker"
  | "Wayfair"
  | "CBS"
  | "KTCEdibles"
  | "OnboardCorrugated"
  // | "TaskConsumerProducts"
  | "GRSRoadstone"
  // | "IbstockBrickWire"
  | "AggregateIndustries"
  | "Forterra"
  | "Tarmac"
  | "TaylorMaxwell"
  | "Wienerberger"
  | "Sweeek";

export const paths: Record<Client, string> = {
  BedKingdom: "PNG_BedKingdom.png",
  CookersOvens: "PNG_CookersOvens.png",
  CycleUK: "PNG_CycleUK.png",
  SecretLab: "PNG_SecretLab.png",
  TheWorm: "PNG_TheWorm.png",
  Aldi: "SVG_Aldi.svg",
  // AlicesGarden: "SVG_AlicesGarden.svg",
  CotswoldCo: "SVG_CotswoldCo.svg",
  Echelon: "SVG_Echelon.svg",
  JulianBowen: "SVG_JulianBowen.svg",
  NectarSleep: "SVG_NectarSleep.svg",
  OliverBonas: "SVG_OliverBonas.svg",
  RicherSounds: "SVG_RicherSounds.svg",
  Tikamoon: "SVG_Tikamoon.svg",
  XRocker: "SVG_XRocker.svg",
  Wayfair: "SVG_Wayfair.svg",
  CBS: "PNG_CBS.png", // Haulage starts
  KTCEdibles: "PNG_KTCEdibles.png",
  OnboardCorrugated: "PNG_OnboardCorrugated.png",
  // TaskConsumerProducts: "PNG_TaskConsumerProducts.png",
  GRSRoadstone: "PNG_GRSRoadstone.png", // constructit starts
  // IbstockBrickWire: "PNG_IbstockBrickWire.png",
  AggregateIndustries: "SVG_AggregateIndustries.svg",
  Forterra: "SVG_Forterra.svg",
  Tarmac: "SVG_Tarmac.svg",
  TaylorMaxwell: "SVG_TaylorMaxwell.svg",
  Wienerberger: "SVG_Wienerberger.svg",
  Sweeek: "SVG_sweeek.svg"
};

export const homeDeliveryClients = [
  "Aldi",
  "SecretLab",
  "CotswoldCo",
  // "AlicesGarden",
  "BedKingdom",
  "CookersOvens",
  "CycleUK",
  "Echelon",
  "JulianBowen",
  "NectarSleep",
  "OliverBonas",
  "RicherSounds",
  "Sweeek",
  "TheWorm",
  "Tikamoon",
  "Wayfair",
  "XRocker",
];

export const haulageClients = [
  "CBS",
  "OnboardCorrugated",
  "KTCEdibles",
  // "TaskConsumerProducts",
];

export const constructITClients = [
  "AggregateIndustries",
  "Forterra",
  "GRSRoadstone",
  // "IbstockBrickWire",
  "Tarmac",
  "TaylorMaxwell",
  "Wienerberger",
];
