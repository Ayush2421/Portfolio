
export default function ExperiencesCard({expInfoData}) {
const {img, position,company, date, 
  location, responsibilities, content } = expInfoData
    return (
      <section className="experiencesCard">
        <div className="eCardHeadings">
            <img src={img?.logo} alt={img?.name}/>
            <div className="eCardHeadingsContents">
              <h4>{position}</h4> 
              <h5>{company}</h5> 
              <div className="dateRow">
                  <i>{date}</i> 
                  <i>{location}</i>
              </div>
            </div>
        </div>

        {/* //content */}
        <div className="eCardContent">
         <i>{responsibilities}</i>
          <ul className="eCardContentList">
           {
              content.map((e, index)=>{
                return <li key={index}>{e}</li>
              })
           }
          </ul>
        </div>
           
      </section>
    )
  }
  