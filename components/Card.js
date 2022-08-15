const Card = ({img_name}) => {
  let location = "/gallery_images/".concat(img_name);
  return (
    <div>
        <img src={location} />
    </div>
  )
}

export default Card