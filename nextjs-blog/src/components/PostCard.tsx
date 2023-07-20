interface PostCardProps {
  post: {
    title: string;
    excerpt: string;
  };
}

export function PostCard({ post }: PostCardProps) {
  return (
    <div>
      {post.title}
      {post.excerpt}
    </div>
  )
}
