import { CommonInfo } from "../sectionsConstant/common"
import "./CommonFile.css"
export default function PageHeading(props) {
  return (
    <>
      <div className="pageHeading">
        <h2  className={props.colored ? "headingColored": "noHeadingColored" }>{props.title}</h2>
        <div className="underLineContainer">
          <div className="underLine"></div>
          <img src={CommonInfo.headingLineImg} />
        </div>
      </div>
      {!props.colored? <p>A collection of techinal skills and experties through various project</p> :null}
    </>
  )
}
