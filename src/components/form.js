import React from 'react'

import 'tachyons/css/tachyons.min.css'
import styled from 'styled-components'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: 'Sign up',
    }
  }

  onClickButton = (e) => {
    this.setState({
      text: 'Thank you!',
      placeholder: 'Email sent',
    })
    e.preventDefault()
    console.log("Form submitted!")
    alert("Thank you for submitting your email! We will be in touch");
  }

  render() {
    return (
      <form action="https://formcarry.com/s/ePt1ELouRyA" method="POST" accept-charset="UTF-8" >
        <div>
          <input
            type="email"
            name="email"
            class="pa2 pl3 mt4 input-reset white ba bg-transparent w-60 w-50-m w-60-l measure b--white-70 helvetica f6"
            placeholder="Your email address"
            required
          />
          <button
            class="ph4 pv2 f6 dib purple bg-animate hover-bg-black-70 hover-white no-underline ba b--white-70 bg-white pointer helvetica"
            type="submit"
            name="submit"
          >
            {this.state.text}
          </button>
        </div>
      </form>
    )
  }
}

export default Form
