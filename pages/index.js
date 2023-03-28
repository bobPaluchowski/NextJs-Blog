import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, I'm Robert. I'm software engineer and language enthusiast. You cannot contact me on Twitter or Facebook, because I do not have one, but you can contact me via email on rpaluchowski77@gmail.com.</p>
        <p>
          (This is my GitHub page, where you can check out my development journey{' '}
          <a href="https://https://github.com/bobPaluchowski">My GitHub</a>.)
        </p>
      </section>
    </Layout>
  );
}
