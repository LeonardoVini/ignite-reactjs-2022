import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { FormContainer } from './styles'
import { useCallback } from 'react'

const searchFormSchema = zod.object({
  query: zod.string(),
})

type SearchFormType = zod.infer<typeof searchFormSchema>

interface SearchFormProps {
  fetchIssues: (query?: string) => void
  issuesLength: number
}

export function SearchForm({ fetchIssues, issuesLength }: SearchFormProps) {
  const { handleSubmit, register } = useForm<SearchFormType>({
    resolver: zodResolver(searchFormSchema),
  })

  const onFormSubmit = useCallback(
    (data: SearchFormType) => {
      const { query } = data

      fetchIssues(query)
    },
    [fetchIssues],
  )

  return (
    <FormContainer onSubmit={handleSubmit(onFormSubmit)}>
      <header>
        <h2>Publicações</h2>
        <span>{issuesLength} publicações</span>
      </header>

      <input type="text" placeholder="Buscar conteúdo" {...register('query')} />
    </FormContainer>
  )
}
