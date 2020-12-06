/* -- Copyright (C) JheysonDev ~ All right reserved -- */
import { useRouter } from "next/router";
import Layout from "@/components/layout";
import ReactMarkdown from "react-markdown";
import fs from "fs";

async function Post() {
  const router = await useRouter();
  const { post } = await router.query;
  let file_name = `../../../posts/${post}.md`;

  return (
    <Layout title="Post">
      <ReactMarkdown children="# nosi" />
    </Layout>
  );
}
export default Post;
