import { useEffect } from "react"

export default function Blog() {
  useEffect(() => {
    fetch('/api/hello')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      
    })
  }, [])

  return <h1>Nested routing test</h1>
}