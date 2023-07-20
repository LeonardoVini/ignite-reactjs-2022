import { useState, useCallback, useEffect } from 'react'
import {
  FaExternalLinkAlt,
  FaGithub,
  FaBuilding,
  FaUserFriends,
} from 'react-icons/fa'

import { api } from '../../lib/axios'

import { AvatarContainer, AvatarContent } from './styles'

interface User {
  name: string
  login: string
  avatar_url: string
  bio: string
  company: string
  followers: number
  html_url: string
}

export function Avatar() {
  const [user, setUser] = useState({} as User)

  const fetchUser = useCallback(async () => {
    const { data: user } = await api.get<User>('/users/LeonardoVini')

    setUser(user)
  }, [setUser])

  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  return (
    <AvatarContainer>
      <img src={user.avatar_url} alt={user.name} />

      <AvatarContent>
        <header>
          <h1>{user.name}</h1>

          <a href={user.html_url} target="__blank">
            GITHUB
            <FaExternalLinkAlt size={12} />
          </a>
        </header>

        <p>{user.bio}</p>

        <ul>
          <li>
            <FaGithub size={18} />
            <span>{user.login}</span>
          </li>

          <li>
            <FaBuilding size={18} />
            <span>{user.company}</span>
          </li>

          <li>
            <FaUserFriends size={18} />
            <span>{user.followers} seguidores</span>
          </li>
        </ul>
      </AvatarContent>
    </AvatarContainer>
  )
}
