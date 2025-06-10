import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./postSlice";

const PostsView = () => {
  const { isLoading, post, error } = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <h3>Loading....</h3>}
      {error && <h3>{error}</h3>}
      <section>
        {post &&
          post.map((p) => {
            return (
              <article key={p.id}>
                <h5>{p.title}</h5>
              </article>
            );
          })}
      </section>
    </div>
  );
};

export default PostsView;
