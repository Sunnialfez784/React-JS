import {Bookmark} from "lucide-react";

function Card({logo,companyName,date,post,tag1,tag2,pay,location}) {
  return (
    <div className="card">
        <div>
          <div className="top">
          <img src={logo} alt="" />
          <button>
            Save <Bookmark size={12}/>
          </button>
        </div>

        <div className="center">
          <h3>
            {companyName} <span>{date}</span>
          </h3>
          <h2>{post}</h2>
          <div className="tag">
            <h4>{tag1}</h4>
            <h4>{tag2}</h4>
          </div>
        </div>
        </div>

        <div className="bottom">
          <div>
            <h3>{pay}</h3>
            <p>{location}</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
  )
}

export default Card