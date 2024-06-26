// hook for useQuery for lb data

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { addScores, getLeaderboard } from '../apis/leaderboard.ts'

export function useLeaderboard() {
  const query = useQuery({ queryKey: ['leaderboard'], queryFn: getLeaderboard })
  return {
    ...query,
  }
}

// hook for useMutation to post score

export function useLeaderboardMutation() {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: addScores,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['leaderboard'] })
    },
  })

  return mutation
}
