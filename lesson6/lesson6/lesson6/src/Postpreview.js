import PropTypes from 'prop-types';
function Postpreview(Props){
    const {title , content , postby, hr} = Props;
    return(
        <>
        {hr == true ? (
             <hr className="my-4" />
        ) : (
            ''
        )
    }
  {/* Post preview*/}
  <div className="post-preview">
    <a href="post.html">
      <h2 className="post-title">{title}</h2>
      <h3 className="post-subtitle">
       {content}
      </h3>
    </a>
    <p className="post-meta">
      Posted by
      <a href="#!"> Start Bootstrap </a>
      {postby}
    </p>
  </div>
</>
    )
}
// Postpreview.PropTypes = {
//     title : PropTypes.string.isRequired,
//     content : PropTypes.string.isRequired,
//     postby : PropTypes.string.isRequired,
// }
Postpreview.defaultProps = {
    hr : true ,
}
export default Postpreview;
