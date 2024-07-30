import AboutPage from "components/about/page/AboutPage";

const pages: AboutPage[] = [
  "our values",
  "Our technology",
  "What makes BJS different",
  "Training academy",
  "Charity and community",
  "our story",
];

export const getSiblings = (current: AboutPage): [AboutPage?, AboutPage?] => {
  const index = pages.indexOf(current);
  return [pages[index - 1], pages[index + 1]];
};

export default pages;
