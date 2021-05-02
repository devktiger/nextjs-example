import Head from 'next/head';
import Posts from '../src/components/home/posts';
import Layout from '../src/components/layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Posts />
    </Layout>
  );
}
