import "./Feature.scss";

function Feature({ feature }) {
  return (
    <div className='awesome-feature two media'>
      <div className='awesome-feature-icon media-left'>
        <span>
          <i className={`icofont icofont-${feature.img}`}></i>
        </span>
      </div>
      <div className='asesome-feature-details media-body'>
        <h5>{feature.title}</h5>
        <p>{feature.description}</p>
      </div>
    </div>
  );
}

export default Feature;
