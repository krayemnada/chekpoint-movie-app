import React from 'react'
import { Pagination } from 'react-bootstrap'
import "./Footer.css"
const Footer = () => {
  return (
    <div>
      <Pagination className='num'>
  <Pagination.First />
  <Pagination.Prev />
  <Pagination.Item style={{color:"orange"}}>{1}</Pagination.Item>
  <Pagination.Ellipsis />

  <Pagination.Item>{10}</Pagination.Item>
  <Pagination.Item>{11}</Pagination.Item>
  <Pagination.Item active style={{backgroundColor:"orange"}}>{12}</Pagination.Item>
  <Pagination.Item>{13}</Pagination.Item>
  <Pagination.Item disabled>{14}</Pagination.Item>

  <Pagination.Ellipsis />
  <Pagination.Item>{20}</Pagination.Item>
  <Pagination.Next />
  <Pagination.Last />
</Pagination>
    </div>
  )
}

export default Footer
