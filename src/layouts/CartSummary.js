import React from 'react'
import { NavLink } from 'react-router-dom'
import { Dropdown } from 'semantic-ui-react'

export default function CartSummary() {
    return (
        <div>
            <Dropdown item text="Sepetiniz" icon="shopping cart">
            <Dropdown.Menu>
              <Dropdown.Item>LAPTOP</Dropdown.Item>
              <Dropdown.Item>TELEFON</Dropdown.Item>
              <Dropdown.Item>TV</Dropdown.Item>
              <Dropdown.Divider/>
              <Dropdown.Item as={NavLink} to="/cart">Sepete git</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
    )
}
