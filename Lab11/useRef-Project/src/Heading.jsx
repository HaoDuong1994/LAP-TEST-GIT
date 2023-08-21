import { memo } from "react";
function Heading(props) {
  console.log(props);
  console.log("Component Heading");
  return <div>{props.title}</div>;
}

const MemoHeading = memo(Heading);
export default MemoHeading;
