
// desestructuramos el id y el name
export const Episode = ( { id, name }) => {
  return (
    <blockquote className="blockquote text-end">
          <p className="mb-1"> {id} </p>
          <footer className="blockquote-footer"> {name} </footer>
    </blockquote>
  )
}
