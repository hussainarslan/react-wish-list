const Popup = (props) => {
  return (
    <div className="popupBox">
        <div className="box">
            {props.content}
        </div>
    </div>
  )
}

export default Popup