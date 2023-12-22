import React from 'react'
import { FiShoppingBag } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
        <h2>Logo Here</h2>
        <div>
            <Link to={'/'}>Home</Link>
            <Link to={'/cart'}>
                <FiShoppingBag />
                <p>{0}</p>
            </Link>
        </div>

    </nav>
  )
}

export default Header