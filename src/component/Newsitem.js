import React from 'react'
export default function Newsitem(props) {
    const {imageUrl, title, description, newsDetails, author, time, mode} = props;
  return (
    <>
                <div className="col">
                <div className={`card text-${mode === "light"? "dark":"white"} bg-${mode} `} style = {{ margin:"10px"
                }}>
                    <img src={imageUrl? imageUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNa1JGLFIadWHMQ0KvIuKWYGl-cxLwGlI2WA&s"} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description} </p>
                        <a href={newsDetails} target="_blank" className="btn btn-primary">Read more</a>
                        <p className="card-text"  ><small className="text-muted"> by {author} published on {new Date(time).toGMTString()}</small></p>
                    </div>
                </div>
                </div>
      
      </>
  )
}
