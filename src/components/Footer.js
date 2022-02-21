function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <div className="container footer">
      <h4 className="footer-text">Joe Freeman &copy; {currentYear}</h4>
    </div>
  )
}

export default Footer