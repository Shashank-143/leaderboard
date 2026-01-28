import { NextRequest, NextResponse } from 'next/server'
import { getAllUsers, addUser, deleteUser } from '../../../lib/database'

export async function GET() {
  try {
    const users = await getAllUsers()
    
    // Transform data to match existing interface
    const transformedUsers = users.map((user: any) => ({
      id: user.id,
      displayName: user.display_name,
      username: user.username,
      stats: user.stats,
      lastUpdated: user.last_updated,
      addedDate: user.added_date
    }))

    return NextResponse.json(transformedUsers)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const { displayName, username, stats } = await request.json()
    
    const user = await addUser(displayName, username, stats)
    
    if (!user) {
      return NextResponse.json({ error: 'Failed to add user' }, { status: 400 })
    }

    return NextResponse.json({
      id: user.id,
      displayName: user.display_name,
      username: user.username,
      stats: user.stats,
      lastUpdated: user.last_updated,
      addedDate: user.added_date
    })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to add user' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const url = new URL(request.url)
    const id = url.searchParams.get('id')
    
    if (!id) {
      return NextResponse.json({ error: 'ID required' }, { status: 400 })
    }

    const success = await deleteUser(parseInt(id))
    
    if (!success) {
      return NextResponse.json({ error: 'Failed to delete user' }, { status: 400 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete user' }, { status: 500 })
  }
}