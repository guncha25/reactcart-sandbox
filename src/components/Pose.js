import posed from "react-pose";

const parentConfig = {
  enter: { opacity: 1, beforeChildren: true, staggerChildren: 50 },
  exit: { opacity: 0 }
};
const childConfig = {
  enter: { opacity: 1, x: 0 },
  exit: { x: 50, opacity: 0 }
};

const DivContainer = posed.div(parentConfig);

const UlContainer = posed.ul({
  enter: { ...parentConfig.enter, beforeChildren: false },
  exit: { ...parentConfig }.exit
});

const DivItem = posed.div(childConfig);

const FigureItem = posed.figure(childConfig);

const LiItem = posed.li(childConfig);

export { DivContainer, UlContainer, FigureItem, LiItem, DivItem };
