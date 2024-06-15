function SubscribeForm() {
  return (
    <form method='post' id='s_form' className='subscription-form' action=''>
      <input
        type='text'
        name='email'
        className='form-control'
        id='subscribe-input2'
        placeholder='Enter Your Email Address'
        required=''
      />
      <span id='email_error2' className='text-danger'></span>
      <button className='email-submit-btn' type='submit' value='Submit'>
        <i className='icofont icofont-paper-plane'></i>
      </button>
      <div id='result2'></div>
    </form>
  );
}

export default SubscribeForm;
