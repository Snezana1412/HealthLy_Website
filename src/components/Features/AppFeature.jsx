import AppFeatImg from "../../assets/images/app-feature-1.png";

function AppFeature({ feature }) {
  console.log(AppFeatImg);
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
