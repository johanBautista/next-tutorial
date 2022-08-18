import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { Key } from "react";
// import { useEffect, useState } from "react";
import PageLayout from "../components/PageLayout";
import styles from "../styles/Home.module.css";

interface ArticleResponse {
  source?: {};
  author?: string;
  title?: string;
  description?: string;
  url?: string;
  urlToImage?: string;
  publishedAt?: string;
  content?: string;
}
// const teste = [11, 2, 3, 4, 5, 6, 7];
const Home: NextPage = ({ articles }) => {
  // const [articles, setArticles] = useState([]);

  // useEffect(() => {
  // fetch("https://newsapi.org/v2/top-headlines?sources=techcrunch&apikey=b5dbd67693af4df080df4680eb8b164b")
  //   .then((res) => res.json)
  //   .then((response) => {
  //     const { articles } = response;
  //     setArticles(articles);
  //   });
  // });

  return (
    <PageLayout title="Home">
      <div className={styles.container}>
        {/* <main className={styles.main}> */}
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <Link href="/about">Ir About</Link>
        {articles?.length === 0 && <p>Loading...</p>}
        {articles?.length > 0 &&
          articles?.map((article: ArticleResponse, index: Key | null | undefined) => (
            <div key={index} className={styles.articleContaine}>
              <Image layout="responsive" width={450} height={300} alt={`Image for the article ${article.title}`} src={article.urlToImage} />
              <h2>{article.title}</h2>
              <i>{article.description}</i>
              <p>{article.content}</p>
            </div>
          ))}
        {/* {teste.length > 0 && teste.map((x, i) => <p key={i}>{x}</p>)} */}
        {/* </main> */}

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <span className={styles.logo}>
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
          </a>
        </footer>
      </div>
    </PageLayout>
  );
};

// Nrequest -> se ejecuta 1 vez o  para refrescar la vista
export async function getStaticProps() {
  const response = await fetch(
    "https://newsapi.org/v2/top-headlines?sources=techcrunch&apikey=b5dbd67693af4df080df4680eb8b164b"
  );
  const { articles } = await response.json();
  return {
    props: {
      articles,
    },
  };
}

// Nrequest -> se ejecuta N veces
// para datos q deban actualizarse constantemente o demasiados datos dinamicos
// export async function getServerSideProps() {
//   const response = await fetch(
//     "https://newsapi.org/v2/top-headlines?sources=techcrunch&apikey=b5dbd67693af4df080df4680eb8b164b"
//   );
//   const { articles } = await response.json();
//   return {
//     props: {
//       articles,
//     },
//   };
// }
export default Home;

// Formas de fetchear data
// usefect fetch  client side rendering
// getServerSideProps server side rendering mejor opcion se pasa un obj. de
// propsdel lado del server al client para
