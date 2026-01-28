import { supabase } from './supabase'

export async function getAllUsers() {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .order('id', { ascending: true })

  if (error) {
    console.error('Error fetching users:', error)
    return []
  }

  return data || []
}

export async function addUser(displayName: string, username: string, stats: any) {
  const { data, error } = await supabase
    .from('users')
    .insert({
      display_name: displayName,
      username,
      stats,
      last_updated: new Date().toISOString(),
      added_date: new Date().toISOString()
    })
    .select()
    .single()

  if (error) {
    console.error('Error adding user:', error)
    return null
  }

  return data
}

export async function updateUserStats(username: string, stats: any) {
  const { data, error } = await supabase
    .from('users')
    .update({
      stats,
      last_updated: new Date().toISOString()
    })
    .eq('username', username)
    .select()
    .single()

  if (error) {
    console.error('Error updating user stats:', error)
    return null
  }

  return data
}

export async function deleteUser(id: number) {
  const { error } = await supabase
    .from('users')
    .delete()
    .eq('id', id)

  return !error
}