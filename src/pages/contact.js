import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Contact" />

    <div className="container">
      <h1>Contact</h1>
      
      <form className="w-full max-w-lg">
        <div className="flex flex-wrap">
          <label htmlFor="name">
            Name
          </label>
          <input className="focus:outline-none focus:bg-white" id="name" type="text" placeholder="Jane" />

          <label htmlFor="email">
            Email
          </label>
          <input className="focus:outline-none focus:bg-white" id="email" type="email" placeholder="jane@email.com" />

          <label htmlFor="message">
            Message
          </label>
          <textarea className="focus:outline-none focus:bg-white mb-6" id="message" placeholder="I love your music..." />

          <button class="shadow bg-orange-400 hover:bg-orange-500 focus:shadow-outline focus:outline-none text-lt-black font-bold py-2 px-4 rounded" type="button">
            Send
          </button>
        </div>
      </form>

    </div>
  </Layout>
)

export default SecondPage
