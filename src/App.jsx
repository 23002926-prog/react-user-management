import React, { useEffect, useState } from 'react'
import { getUsers, createUser } from './api'
import UserForm from './components/UserForm'
import UserList from './components/UserList'

export default function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => { load() }, [])

  async function load() {
    setLoading(true)
    setError('')

    try {
      const data = await getUsers()
      setUsers(data)
    } catch {
      setError('Não foi possível carregar os registros da API mock.')
    } finally {
      setLoading(false)
    }
  }

  async function handleAdd(user) {
    setSaving(true)
    setError('')

    try {
      await createUser(user)
      await load()
    } catch {
      setError('Não foi possível salvar o registro. Verifique se o mock server está ativo.')
    } finally {
      setSaving(false)
    }
  }

  const total = users.length

  return (
    <div className="app-shell">
      <main className="container">
        <header className="topbar">
          <div>
            <span className="eyebrow">Empresa X</span>
            <h1>Portal de Cadastro de Pessoas</h1>
            <p>
              Área interna para registrar e consultar colaboradores com uma interface simples,
              objetiva e pronta para uso diário.
            </p>
          </div>

          <button type="button" className="ghost-button" onClick={load}>
            Atualizar lista
          </button>
        </header>

        <section className="summary-grid">
          <article className="summary-card">
            <span>Total de pessoas</span>
            <strong>{total}</strong>
          </article>

          <article className="summary-card">
            <span>Status</span>
            <strong>Ativo</strong>
          </article>

          <article className="summary-card">
            <span>Origem</span>
            <strong>Cadastro interno</strong>
          </article>
        </section>

        <section className="content-grid">
          <div className="panel panel-highlight">
            <h2>Novo cadastro</h2>
            <p className="panel-text">Preencha os dados da pessoa para incluir no registro da empresa.</p>
            <UserForm onAdd={handleAdd} isSubmitting={saving} />
          </div>

          <div className="panel">
            <div className="panel-header">
              <div>
                <h2>Pessoas cadastradas</h2>
                <span>{total} registro(s) no sistema</span>
              </div>
            </div>

            {error ? <p className="status error">{error}</p> : null}
            {loading ? <p className="status">Carregando...</p> : <UserList users={users} />}
          </div>
        </section>
      </main>
    </div>
  )
}
