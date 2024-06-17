function AppFeature({ feature }) {
  return (
    <div className='single-feature media'>
      <div className='feature-icon media-left'>
        <img src={`src/assets/images/${feature.img}`} alt='' />
      </div>
      <div className='feature-details media-body'>
        <h5 className='text-uppercase'>{feature.title}</h5>
        <p>{feature.description}</p>
      </div>
    </div>
  );
}

export default AppFeature;
