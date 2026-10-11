import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
}

const fetchPosts = async (): Promise<Post[]> => {
  const response = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
};

fetchPosts()
  .then((posts: Post[]) => {
    console.log(`Total posts fetched: ${posts.length}`);
    if (posts.length > 0) {
      console.log(`Title of the first post: ${posts[0].title}`);
    }
  })
  .catch((error: unknown) => {
    console.error("Error fetching posts:", error);
  });