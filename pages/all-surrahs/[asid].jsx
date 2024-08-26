import React from "react";
import { useRouter } from "next/router";
import useSWR from "swr";

function SurrahDetailPage(props) {
  // const router = useRouter();
  // const { asid } = router.query;
  // console.log(asid);
  // const { data } = useSWR(`getData`, async () => {
  //   const response = await fetch(
  //     `https://api.quran.com/api/v4/chapters/:${asid}`
  //   );
  //   const data = await response.json();
  //   return data;
  // });
  console.log(props.post);

  return <div>{}</div>;
}

export default SurrahDetailPage;
export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://api.quran.com/api/v4/chapters/${params.asid}`
  );
  const data = await response.json();
  return {
    props: {
      post: data,
    },
  };
}
export async function getStaticPaths() {
  const response = await fetch(`https://api.quran.com/api/v4/chapters`);
  const data = await response.json();
  const paths = data.chapters.map((posts) => ({
    params: { postId: posts.id.toString() },
  }));
  return {
    paths: paths,
    fallback: false,
  };
}
