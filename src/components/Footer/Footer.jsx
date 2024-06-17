import "./Footer.scss";

function Footer() {
  return (
    <footer id='footer-area'>
      <div className='container'>
        <ul className='social list-inline text-center'>
          <li>
            <a href='https://www.facebook.com/HealthLyApp/'>
              <i className='icofont icofont-social-facebook'></i>
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/company/healthcare-central'>
              <i className='icofont icofont-social-linkedin'></i>
            </a>
          </li>
          <li>
            <a href='#'>
              <i className='icofont icofont-social-twitter'></i>
            </a>
          </li>
          <li>
            <a href='https://www.instagram.com/hcc.healthlyapp/'>
              <i className='icofont icofont-social-instagram'></i>
            </a>
          </li>
          <li>
            <a href='https://www.youtube.com/channel/UC72hirm2yEIqKjZrKSbikcw'>
              <i className='icofont icofont-youtube-play'></i>
            </a>
          </li>
        </ul>
        <div className='copyright text-center'>
          <p>
            Copyright @ 2020{" "}
            <a href='https://healthcarecentral.co/' target='_blank'>
              Healthcare Central Co.
            </a>{" "}
            all right reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
