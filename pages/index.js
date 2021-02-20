import StoryCard from "../components/storyCard";
import Intro from "../components/intro";
import Head from "next/head";
const axios = require("axios");
const notionTableId = process.env.notionTableId;

export default function Index({ allPosts }) {
  return (
    <>
      <Head>
        <title>Next.js + Notion</title>
      </Head>
      <div className="container">
        <Intro />
        {allPosts.length > 0 && <StoryCard posts={allPosts} />}
      </div>
    </>
  );
}

export async function getStaticProps() {
  let allPosts = [];

  await axios
    .get(`https://notion-api.splitbee.io/v1/table/${notionTableId}`)
    .then(function (response) {
      response.data.forEach((x) => {
        allPosts.push({
          title: x.title,
          coverImage: x.coverImage[0].url,
          slug: x.slug,
        });
      });
    })
    .catch((err) => console.log(err));

  return { props: { allPosts } };
}
