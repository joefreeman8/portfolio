function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <div className="container d-flex justify-content-center footer">
      <div className="col-3 ">
        <img className="col-7 picture-joe" src="https://i.imgur.com/3DGre8r.jpg?1" alt="joe and taz" />
        {/* <img className="col-12" src="https://i.imgur.com/JWVnfPS.jpg?1" alt="joe and taz" /> */}

        <h4 className="footer-text">&copy; Joe Freeman {currentYear} </h4>      </div>
    </div>
  )
}

export default Footer