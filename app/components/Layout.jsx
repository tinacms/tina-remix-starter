export const Layout = (props) => {
  return (
    <div
      style={{
        margin: '3rem',
      }}
    >
      <header>
        <a href="/">Home</a>
        {' | '}
        <a href="/posts">Posts</a>
      </header>
      <main>{props.children}</main>
    </div>
  )
}
