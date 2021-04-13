import React from 'react'

const PageContact = () => {
  return (
    <>
      <h1>Contact Us</h1>
      <p>For all enquiries, please contact us using the form below.</p>

      <div>
        <form action="/action_page.php">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="yourname" placeholder="Your name.." />

          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" placeholder="Your email.." />
          
          <label htmlFor="subject">Message</label>
          <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  )
}

export default PageContact