function AppFeature() {
  return (
    <div className='single-feature media'>
      <div className='feature-icon media-left'>
        <img
          src='https://healthlyapp.com/wp-content/themes/healthly-app/img/icons/app-feature-1.png'
          alt=''
        />
      </div>
      <div className='feature-details media-body'>
        <h5 className='text-uppercase'>USER-FRIENDLY</h5>
        <p>
          With a simple interface, you can easily set up medication reminders or
          schedule appointments with physicians/pharmacists.
        </p>
      </div>
    </div>
  );
}

export default AppFeature;
