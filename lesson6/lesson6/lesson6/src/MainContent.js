import Postpreview from "./Postpreview";
function MainContent(){
    const list = [
        {
            title : 'Man must explore, and this is exploration at its greatest',
            content : 'Problems look mighty small from 150 miles up',
            postby: 'on September 24, 2022' ,
            hr : false
        },
        {
            title : "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",
            postby: ' on September 18, 2022  '
        },
        {
            title : 'Science has not yet mastered prophecy',
            content : 'We predict too much for the next year and yet far too little for the next ten.',
            postby: 'on August 24, 2022'
        },
        {
            title : 'Failure is not an option',
            content : 'Many say exploration is part of our destiny, but it’s actually our duty to future generations.',
            postby: ' on July 8, 2022 '
        },
    ]
    return(
        <div className="container px-4 px-lg-5">
  <div className="row gx-4 gx-lg-5 justify-content-center">
    <div className="col-md-10 col-lg-8 col-xl-7">
        {list.map((post)=>{
            return (
                <Postpreview
                hr = {post.hr}
                title = {post.title}
                content = {post.content}
                postby = {post.postby}     
                />
            )
        })}
    <div className="d-flex justify-content-end mb-4"> <a className="btn btn-primary text-uppercase" href="#!"> Older Posts →</a></div>
    </div>
  </div>
</div>

    )
}
export default MainContent;