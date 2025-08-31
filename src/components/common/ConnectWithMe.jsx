import { ConnectWithMeInfo } from "../sectionsConstant/common"

export default function ConnectWithMe() {
  const handleConnectWithMeLogo = (evt) => {
    (evt.target.name === "LinkedIn") ?
      window.open("https://www.linkedin.com/in/ayush2421gupta", "_blank")
      : window.open("https://github.com/Ayush2421", "_blank")
  }
  
  return (
    <div className="connectWithMe">
      {
        ConnectWithMeInfo.map((element)=>{
          return(
            <div key={element.name}>
                <img name={element.name} src={element.logo} alt={element.name} id="connectWithMeLogo" onClick={handleConnectWithMeLogo} />
              </div>
          )
        })
      }
      {/* <img name="linkedIn_logo" src={linkedIn_logo} alt="linkedIn_logo" id="connectWithMeLogo" onClick={handleConnectWithMeLogo} />
      <img name="git_logo" src={git_logo} alt="git_logo" id="connectWithMeLogo" onClick={handleConnectWithMeLogo} /> */}
    </div>
  )
}