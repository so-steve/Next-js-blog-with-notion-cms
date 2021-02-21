import Head from "next/head";
import { NotionRenderer } from "react-notion";
const axios = require("axios");
import Intro from "../../components/intro";
import Form from "../../components/form";
const notionTableId = process.env.notionTableId;

export default function Article(props) {
  return (
    <div>
      <Head>
        <title>{props.name}</title>
        <meta name="description" content={props.description} />
      </Head>
      <div>
        <Intro />
        <div className="article pt-5 pb-1">
          <div style={{ maxWidth: 768 }} className="mx-auto container blogpost">
            <NotionRenderer id="blog" blockMap={props.blog} />
          </div>
        </div>
        <div id="article-bottom" className="pb-5">
          <hr />
          <div className="row pt-4">
            <div className="col-md-6 offset-md-3 col-12">
              <h2 className="txt-light text-center">
                {"Do you want to read more stories like that?"}
              </h2>
            </div>
            <div className="col-md-4 offset-md-4 offset-3 col-6">
              <p className="txt-light text-center">
                Leave your info on the bottom to subscribe 👇
              </p>
            </div>
          </div>
          <Form />
          <div className="text-center"></div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const url = `https://notion-api.splitbee.io/v1/table/${notionTableId}`;
  const { data } = await axios.get(url);
  const paths = data.map((e) => ({
    params: {
      slug: e.slug,
      title: "test",
    },
  }));
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  try {
    console.log(params);
    let res0;
    await axios
      .get(`https://notion-api.splitbee.io/v1/table/${notionTableId}`)
      .then(function (response) {
        // console.log(
        //   params.slug + " vs " + response.data[0].slug.replace(/\-/g, "")
        // );
        res0 = response.data.find((obj) => {
          return obj.slug === params.slug;
        });
      });

    const res = await fetch(
      "https://notion-api.splitbee.io/v1/page/" + res0.ID
    );
    const data = await res.json();

    return {
      props: {
        name: `BLOG | ${res0.title}` || null,
        description: res0.description || null,
        blog: data || null,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
