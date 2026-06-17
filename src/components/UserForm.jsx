import React, { useState } from 'react'

export default function UserForm({ onAdd, isSubmitting }){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const submit = async (e) =>{
    e.preventDefault()
    if(!name) return
    await onAdd({ name, email })
    setName('')
    setEmail('')
  }

  return (
    <form onSubmit={submit} className="form">
      <label>
        Nome completo
        <input value={name} onChange={e=>setName(e.target.value)} placeholder="Ex.: Maria Silva" required />
      </label>
      <label>
        E-mail corporativo
        <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Ex.: maria@empresa.com" />
      </label>
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Salvando...' : 'Cadastrar pessoa'}
      </button>
    </form>
  )
}
