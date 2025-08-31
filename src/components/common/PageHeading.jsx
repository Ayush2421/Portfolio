import { CommonInfo, PageHeadingInfo } from "../sectionsConstant/common"
import "./CommonFile.css"

export default function PageHeading({title, colored}) {
  return (
    <>
      <div className="pageHeading">
        <h2  className={colored ? "headingColored": "noHeadingColored" }>{title}</h2>
        <div className="underLineContainer">
          <div className="underLine"></div>
          <img src={CommonInfo.headingLineImg} />
        </div>
      </div>
      {!colored?
       Object.entries(PageHeadingInfo).map(([keys, values], index)=>
       (title === keys)? <p key={index}>{values}</p> :null
       )
       :null}
      
    </>
  )
}
