import { fetchEntries } from "utils/fetchData"

const Post = ({ title, ...p }) => (
  <div>
    <h2>{title}</h2>
    <p>{JSON.stringify(p.content)}</p>
  </div>
)

export default function AboutUs({ posts }) {
  return (
    <div>
      <div>
        {posts.map((p) => {
          return <Post key={p.date} title={p.title} {...p} />
        })}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetchEntries()
  const posts = res.map((p) => p.fields)
  return {
    props: {
      posts,
    },
  }
}
