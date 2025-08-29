export default function Services_item({ img, name, openModal }) {
  return (
    <div className="item">
      <div className="overlay"></div>
      <div className="img">
        <img src={img} alt="" />
      </div>
      <p className="title">{name}</p>
      <div className="text">
        <p className="name">{name}</p>
        <p className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure natus
          repudiandae cum similique odio consequuntur.
        </p>
        <div className="types">
          <p className="type">Lorem2</p>
          <p className="type">Lorem2</p>
          <p className="type">Lorem2</p>
          <p className="type">Lorem2</p>
          <p className="type">Lorem2</p>
          <p className="type">Lorem2</p>
        </div>
        <div className="btns">
          <a href="#courses" className="btn otherBtn">
            Kurslarga o'tish
          </a>
          <p className="btn" onClick={openModal}>
            Biz bilan aloqa
          </p>
        </div>
      </div>
    </div>
  );
}
