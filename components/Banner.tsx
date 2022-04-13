import React from 'react'

function Banner() {
  return (
    <div className="botder-y flex items-center justify-between border-black bg-yellow-400 py-10 lg:py-0">
      <div className="space-y-5 px-10">
        <h1 className="textfont-serif max-w-xl text-6xl">
          <span className="py-0 underline decoration-black decoration-4">
            Medium
          </span>{' '}
          is a place to write, read, and connect
        </h1>
        <h2>
          Its easy and free to post your thinking on any topic and connect with
          millions of readers
        </h2>
      </div>
      <div>
        <img
          className="hidden h-32 md:inline-flex lg:h-full"
          src="https://iconape.com/wp-content/png_logo_vector/medium-m.png"
          alt=""
        />
      </div>
    </div>
  )
}

export default Banner
