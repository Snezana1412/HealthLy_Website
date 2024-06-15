import AppStore from "../../assets/images/app-store.png";
import GooglePlay from "../../assets/images/googleplay.png";

function StoreBadges() {
  return (
    <>
      <div className='store-badges'>
        <a href='https://play.google.com/store/apps/details?id=com.healthcarecentral.healthly'>
          <img src={GooglePlay} alt='' />
        </a>
      </div>
      <div className='store-badges'>
        <a href='https://apps.apple.com/us/app/healthly/id1536292632'>
          <img src={AppStore} alt='' />
        </a>
      </div>
    </>
  );
}

export default StoreBadges;
