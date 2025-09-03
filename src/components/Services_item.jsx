export default function Services_item({ img, name, openModal, desc, tags }) {
  return (
    <div className="item">
      <div className="overlay"></div>
      <div className="img">
        <img src={img} alt="" />
      </div>
      <p className="title">{name}</p>
      <div className="text">
        <p className="name">{name}</p>
        <p className="desc">{desc}</p>
        <div className="types" id="types">
          {tags.map((item, index) => {
            <p key={index} className="type">
              {item}
            </p>;
          })}
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
