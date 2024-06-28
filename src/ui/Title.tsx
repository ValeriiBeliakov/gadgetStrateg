import React from "react";
interface TitleProps{
  title:string
}
const Title:React.FC<TitleProps> = ({ title }) => {
  document.title = "GadgetStarteg -" + title;
  return <div></div>;
};

export default Title;
