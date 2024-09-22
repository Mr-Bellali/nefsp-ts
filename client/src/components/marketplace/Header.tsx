"use client";
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
import SearchBar from './SearchBar'; 

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false); // Manage search bar visibility
  const isMediumScreen = useMediaQuery("(max-width:960px)"); // Medium screens and below
  const isMobileScreen = useMediaQuery("(max-width:600px)"); // Mobile screens and below

  const handleMenuOpen = () => setMenuOpen(true);
  const handleMenuClose = () => setMenuOpen(false);
  const handleSearchToggle = () => setSearchOpen(prev => !prev); // Toggle search bar

  return (
    <nav>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        sx={{ position: 'relative' }} // Ensure the search bar shows at the top
      >
        {isMediumScreen ? (
          <IconButton onClick={handleMenuOpen}>
            <MenuIcon />
          </IconButton>
        ) : (
          <Box
            sx={{
              fontSize: "14px",
              fontWeight: "700",
              display: "flex",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <Link sx={{ ":hover": { cursor: "pointer", color: "#F54D42" } }} underline="none" color="black" href="#">
              Home
            </Link>
            <Link sx={{ ":hover": { cursor: "pointer", color: "#F54D42" } }} underline="none" color="black" href="#">
              About
            </Link>
            <Link sx={{ ":hover": { cursor: "pointer", color: "#F54D42" } }} underline="none" color="black" href="#">
              Store
            </Link>
            <Link sx={{ ":hover": { cursor: "pointer", color: "#F54D42" } }} underline="none" color="black" href="#">
              Delivery
            </Link>
            <Link sx={{ ":hover": { cursor: "pointer", color: "#F54D42" } }} underline="none" color="black" href="#">
              Support
            </Link>
            <Link sx={{ ":hover": { cursor: "pointer", color: "#F54D42" } }} underline="none" color="black" href="#">
              SignUp
            </Link>
          </Box>
        )}

        <Box>
          <Image src={Logo} alt="logo" width={60} />
        </Box>

        <Box sx={{ fontSize: "24px", fontWeight: "700", display: "flex", justifyContent: "center", gap: 2 }}>
          {/* Search Icon */}
          <IconButton sx={{ color: "black", ":hover": { color: "#F54D42" }, fontSize: "24px", padding: 0 }} onClick={handleSearchToggle}>
            <SearchIcon sx={{ fontSize: "24px" }} />
          </IconButton>

          {!isMobileScreen && (
            <>
              <IconButton sx={{ color: "black", ":hover": { color: "#F54D42" }, fontSize: "24px", padding: 0 }}>
                <FavoriteIcon sx={{ fontSize: "24px" }} />
              </IconButton>
              <IconButton sx={{ color: "black", ":hover": { color: "#F54D42" }, fontSize: "24px", padding: 0 }}>
                <ShoppingCartIcon sx={{ fontSize: "24px" }} />
              </IconButton>
              <IconButton sx={{ color: "black", ":hover": { color: "#F54D42" }, fontSize: "24px", padding: 0 }}>
                <PersonIcon sx={{ fontSize: "24px" }} />
              </IconButton>
            </>
          )}
        </Box>
      </Box>

      {/* Search Bar */}
      <SearchBar open={searchOpen} onClose={() => setSearchOpen(false)} />

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
