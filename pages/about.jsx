import Head from 'next/head';

import Navbar from '../components/Navbar';

function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-cy="pageTitle" className="title">
              About Me
            </h1>
            <p className="description">
              My name is Michael Harenberg and I worked in different tech startups in the past. In coding, I hope to quench my desire to build things.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
