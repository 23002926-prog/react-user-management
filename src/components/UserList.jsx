import React from 'react'

export default function UserList({ users }){
  if(!users || users.length === 0) return <p className="empty-state">Nenhuma pessoa cadastrada ainda.</p>

  function getInitials(name = '') {
    return name
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map(part => part[0]?.toUpperCase())
      .join('')
  }

  return (
    <ul className="list">
      {users.map(u => (
        <li key={u.id} className="list-item">
          <div className="avatar">{getInitials(u.name)}</div>
          <div>
            <strong>{u.name}</strong>
            <p>{u.email || 'Sem e-mail informado'}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}
