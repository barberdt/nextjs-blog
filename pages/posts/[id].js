import Head from 'next/head'
import useSWR from 'swr'
import Date from '../../components/Date'
import Layout from '../../components/Layout'
import { getAllPostIds, getContentfulPosts, getPostData } from '../../lib/posts'
import utilStyles from '../../styles/utils.module.css'


export async function getStaticPaths() {
  const paths = getAllPostIds()
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  const contentfulPosts = await getContentfulPosts()
  return { props: { contentfulPosts, postData } }
}

export default function Post({ contentfulPosts, postData }) {
  const { data } = useSWR('/api/getEntries', async () => {
    const res = await fetch('/api/getEntries')
    return res.json()
  })

  console.log(data)

  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}
