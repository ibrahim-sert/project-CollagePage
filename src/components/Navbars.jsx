import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import React from 'react'

const Navbars = () => {
  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand href="https://flowbite.com/">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Dropdown label="Kurumsal" inline={true}>
          <Dropdown.Item>Eğitim Sistemimiz</Dropdown.Item>
          <Dropdown.Item>Etkinlikler</Dropdown.Item>
          <Dropdown.Item>Rehberlik</Dropdown.Item>
          <Dropdown.Item>Hakkımızda</Dropdown.Item>
          <Dropdown.Item>İnsan Kaynakları</Dropdown.Item>
        </Dropdown>
        <Dropdown label="Okullarımız" inline={true}>
          <Dropdown.Item>Anaokulu</Dropdown.Item>
          <Dropdown.Item>Liselerimiz</Dropdown.Item>
         
        </Dropdown>
        <Navbar.Link href="/navbars" active={true}>
          Home
        </Navbar.Link>
        <Navbar.Link href="/navbars">Uygulamalarımız</Navbar.Link>
        <Navbar.Link href="/navbars">Basında Biz</Navbar.Link>
        <Navbar.Link href="/navbars">İletişim</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navbars