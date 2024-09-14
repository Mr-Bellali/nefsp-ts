"use client"
import { useState } from "react";
import { Box, Link, IconButton, Drawer, List, ListItemButton, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { useMediaQuery } from "@mui/material";
import Logo from "../../../public/logo.png";
import Image from "next/image";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMediumScreen = useMediaQuery("(max-width:960px)"); // Medium screens and below
  const isMobileScreen = useMediaQuery("(max-width:600px)"); // Mobile screens and below

  const handleMenuOpen = () => setMenuOpen(true);
  const handleMenuClose = () => setMenuOpen(false);

  return (
    <nav>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}

      >
        {isMediumScreen ? (
          // Burger menu for medium screens and below
          <IconButton onClick={handleMenuOpen}>
            <MenuIcon />
          </IconButton>
        ) : (
          // Links for larger screens
          <Box
            sx={{
              fontSize: "14px",
              fontWeight: "700",
              display: "flex",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <Link
              sx={{ ":hover": { cursor: "pointer", color: "#F54D42" } }}
              underline="none"
              color="black"
              href="#"
            >
              Home
            </Link>
            <Link
              sx={{ ":hover": { cursor: "pointer", color: "#F54D42" } }}
              underline="none"
              color="black"
              href="#"
            >
              About
            </Link>
            <Link
              sx={{ ":hover": { cursor: "pointer", color: "#F54D42" } }}
              underline="none"
              color="black"
              href="#"
            >
              Store
            </Link>
            <Link
              sx={{ ":hover": { cursor: "pointer", color: "#F54D42" } }}
              underline="none"
              color="black"
              href="#"
            >
              Delivery
            </Link>
            <Link
              sx={{ ":hover": { cursor: "pointer", color: "#F54D42" } }}
              underline="none"
              color="black"
              href="#"
            >
              Support
            </Link>
            <Link
              sx={{ ":hover": { cursor: "pointer", color: "#F54D42" } }}
              underline="none"
              color="black"
              href="#"
            >
              SignUp
            </Link>
          </Box>
        )}

        <Box >
          <Image 
            src={Logo}
            alt="logo"
            width={60}
          />
        </Box>

        <Box
          sx={{
            fontSize: "24px",
            fontWeight: "700",
            display: "flex",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <SearchIcon sx={{ ":hover": { cursor: "pointer", color: "#F54D42" }, fontSize: "24px" }} />
          {/* Show other icons only if not on mobile */}
          {!isMobileScreen && (
            <>
              <FavoriteIcon sx={{ ":hover": { cursor: "pointer", color: "#F54D42" }, fontSize: "24px" }} />
              <ShoppingCartIcon sx={{ ":hover": { cursor: "pointer", color: "#F54D42" }, fontSize: "24px" }} />
              <PersonIcon sx={{ ":hover": { cursor: "pointer", color: "#F54D42" }, fontSize: "24px" }} />
            </>
          )}
        </Box>
      </Box>

      {/* Drawer for the burger menu */}
      <Drawer anchor="left" open={menuOpen} onClose={handleMenuClose}>
        <Box
          sx={{
            width: 250,
            textAlign: "center",
            fontSize: "14px",
            fontWeight: "700",
          }}
          role="presentation"
          onClick={handleMenuClose}
          onKeyDown={handleMenuClose}
        >
          <List>
            <ListItemButton>
              <ListItemText primary="Home" />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="About" />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Store" />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Delivery" />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Support" />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="SignUp" />
            </ListItemButton>
            {/* Add icons to the menu on mobile */}
            {isMobileScreen && (
              <>
                <ListItemButton>
                  <FavoriteIcon />
                  <ListItemText primary="Favorites" />
                </ListItemButton>
                <ListItemButton>
                  <ShoppingCartIcon />
                  <ListItemText primary="Cart" />
                </ListItemButton>
                <ListItemButton>
                  <PersonIcon />
                  <ListItemText primary="Profile" />
                </ListItemButton>
              </>
            )}
          </List>
        </Box>
      </Drawer>
    </nav>
  );
};

export default Header;
