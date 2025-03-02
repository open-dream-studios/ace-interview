import { useEffect } from "react"

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function setOverflow(input) {
    var home = document.getElementById("home");
  }

  return (
    <div className="home" id="home" >
    </div>
  )
}

export default Home