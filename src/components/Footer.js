function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <div className="container d-flex justify-content-center footer">
      <div className="col-3 ">
        <img className="col-7 picture-joe" src="https://i.imgur.com/3DGre8r.jpg?1" alt="joe and taz" />
        <p className="footer-text">&copy; Joe Freeman {currentYear} </p>
      </div>
    </div>
  )
}

export default Footer