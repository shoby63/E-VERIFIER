import React from "react";
import { Navbar, Button, Link, Text, cyanDark} from "@nextui-org/react";
import { Layout } from "./Layout.js";
import { AcmeLogo } from "./AcmeLogo.js";
import { navbar } from "./navbar.stitches.js"
import { createTheme } from '@stitches/react';
// import { VariantsSelectorWrapper } from "./VariantsSelectorWrapper.js";
// const darkTheme=createTheme({type:'dark'}
const lightModernTheme = createTheme({
  type: 'light',
  className: 'light-modern',
  theme: {
    colors: {
      primary: '#7928CA',
      primaryLight: '#d9c2f0',
      success: '#FF1CF7'
    }
  }
});
const darkModernTheme = createTheme({
  type: 'dark',
  className: 'dark-modern',
  theme: {
    colors: {
      primary: '#7928CA',
      primaryLight: '#582A87',
      success: '#FF1CF7'
    }
  }
});
const lightElegantTheme = createTheme({
  type: 'light',
  className: 'light-elegant',
  theme: {
    colors: {
      primary: '#000000',
      primaryLight: '#AAAAAA',
      success: '#a2a2a2'
    },
    radii: {
      md: '4px'
    }
  }
});
const darkElegantTheme = createTheme({
  type: 'dark',
  className: 'dark-elegant',
  theme: {
    colors: {
      primary: '#ffffff',
      primaryLight: '#222222',
      success: '#a2a2a2'
    },
    radii: {
      md: '4px'
    }
  }
})
export default function NavbarC() {
  const [variant, setVariant] = React.useState("sticky");

  const variants = ["static", "floating", "sticky"];
  
  return (
    <Layout>
      <Navbar isBordered variant={"floating"} >
        <Navbar.Brand>
          <AcmeLogo />
          <Text b color="inherit" hideIn="xs">
            Email-verifier
          </Text>
        </Navbar.Brand>
        <Navbar.Content>
          <Navbar.Link color="inherit" href="#">
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} href="#">
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
    </Layout>  )
}
