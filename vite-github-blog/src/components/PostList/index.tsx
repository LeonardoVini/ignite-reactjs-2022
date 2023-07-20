import { Issue } from '../../pages/Home'
import { formattedDate } from '../../utils/formattedDate'

import { Post, PostListContainer } from './styles'

interface PostListProps {
  issues: Issue[]
}

export function PostList({ issues }: PostListProps) {
  return (
    <PostListContainer>
      {issues.map((issue) => {
        return (
          <Post to={`post/${issue.number}`} key={issue.id}>
            <header>
              <h1>{issue.title}</h1>
              <span>{formattedDate(issue.created_at)}</span>
            </header>

            <p>{issue.body.substring(0, 300) + '...'}</p>
          </Post>
        )
      })}
    </PostListContainer>
  )
}
