import { useState, useCallback, useEffect } from 'react'

import { api } from '../../lib/axios'

import { HomeContainer } from './styles'

import { Avatar } from '../../components/Avatar'
import { SearchForm } from '../../components/SearchForm'
import { PostList } from '../../components/PostList'

export interface Issue {
  id: string
  number: number
  title: string
  body: string
  html_url: string
  comments: number
  user: {
    login: string
  }
  created_at: string
}

interface SearchResponse {
  items: Issue[]
}

const username = import.meta.env.VITE_GITHUB_USERNAME
const repoName = import.meta.env.VITE_GITHUB_REPONAME

export function Home() {
  const [issues, setIssues] = useState<Issue[]>([])

  const fetchIssues = useCallback(async (query: string = '') => {
    const { data } = await api.get<SearchResponse>(
      `/search/issues?q=${query}%20repo:${username}/${repoName}`,
    )

    const { items: issues } = data

    setIssues(issues)
  }, [])

  useEffect(() => {
    fetchIssues()
  }, [fetchIssues])

  return (
    <HomeContainer>
      <Avatar />

      <SearchForm fetchIssues={fetchIssues} issuesLength={issues.length} />

      <PostList issues={issues} />
    </HomeContainer>
  )
}
