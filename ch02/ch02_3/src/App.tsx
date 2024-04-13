import ArrowComponent from "./ArrowComponent";
import ClassComponent from "./ClassComponent";

export default function App() {
  return(
    <ul>
      <ClassComponent href="http://www.google.com" text="go to Google" />
      <ArrowComponent href="https://www.instagram.com/" text="go to Instagram" />
    </ul>
  )
}