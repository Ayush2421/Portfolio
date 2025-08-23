
import linkedIn_logo from "../../assets/linkedIn_logo.png"
import git_logo from "../../assets/git_logo.png"

export default function ConnectWithMe() {
  const handleConnectWithMeLogo = (evt) => {
    (evt.target.name === "linkedIn_logo") ?
      window.open("https://www.linkedin.com/in/ayush2421gupta", "_blank")
      : window.open("https://github.com/Ayush2421", "_blank")
  }
  return (
    <div className="connectWithMe">
      <img name="linkedIn_logo" src={linkedIn_logo} alt="linkedIn_logo" id="connectWithMeLogo" onClick={handleConnectWithMeLogo} />
      <img name="git_logo" src={git_logo} alt="git_logo" id="connectWithMeLogo" onClick={handleConnectWithMeLogo} />
    </div>
  )
}