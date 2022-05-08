export const fetchTodos = async () => {
  const response = await fetch('http://localhost:3001/todos')
  return await response.json()
}

export const addTodo = async todo => {
  const response = await fetch('http://localhost:3001/todos', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify(todo),
  })
  return response
}

export const patchTodo = async todo => {
  const response = await fetch('http://localhost:3001/todos', {
    method: 'PATCH',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify(todo),
  })
  return response
}
