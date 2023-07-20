import { useCallback, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import {
  FaCalendar,
  FaChevronLeft,
  FaComment,
  FaExternalLinkAlt,
  FaGithub,
} from 'react-icons/fa'

import { PostContainer, TitleContent, ArticleContent } from './styles'

import { Issue } from '../Home'
import { api } from '../../lib/axios'
import { formattedDate } from '../../utils/formattedDate'

import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'

const username = import.meta.env.VITE_GITHUB_USERNAME
const repoName = import.meta.env.VITE_GITHUB_REPONAME

export function Post() {
  const [issue, setIssue] = useState({} as Issue)

  const { id } = useParams()

  const getIssueDetails = useCallback(async () => {
    const { data: issue } = await api.get<Issue>(
      `repos/${username}/${repoName}/issues/${id}`,
    )

    setIssue(issue)
  }, [id])

  useEffect(() => {
    getIssueDetails()
  }, [getIssueDetails])

  return (
    <PostContainer>
      <TitleContent>
        <nav>
          <Link to="/">
            <FaChevronLeft size={12} />
            <span>VOLTAR</span>
          </Link>

          <a href={issue.html_url} target="__blank">
            <FaExternalLinkAlt size={12} />
            <span>VER NO GITHUB</span>
          </a>
        </nav>

        <h1>{issue?.title}</h1>

        <ul>
          <li>
            <FaGithub size={18} />
            <span>{issue?.user?.login}</span>
          </li>

          <li>
            <FaCalendar size={18} />
            <span>{formattedDate(issue.created_at)}</span>
          </li>

          <li>
            <FaComment size={18} />
            <span>{issue.comments} comentários</span>
          </li>
        </ul>
      </TitleContent>

      <ArticleContent>
        <ReactMarkdown
          // eslint-disable-next-line react/no-children-prop
          children={issue.body}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  // eslint-disable-next-line react/no-children-prop
                  children={String(children).replace(/\n$/, '')}
                  style={dracula as any}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            },
          }}
        />
        ,
      </ArticleContent>
    </PostContainer>
  )
}
