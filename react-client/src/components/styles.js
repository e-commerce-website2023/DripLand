// styles.js
export const commonStyles = {
  gradientBackground: {
    background: `linear-gradient(to right, #984D38, #181E41)`,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: `calc(10px + 2vmin)`,
  },
};

export const navStyles = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between', // Add this to distribute items along the main axis
  position: 'fixed',
  top: 0,
  width: '100%',
  backgroundColor: 'linear-gradient(to right, #984D38, #181E41)',
  
  padding: '20px',
  zIndex: 1000,

//home nav

linkContainer: {
  display: 'flex',
  flexDirection: 'row', // Align links horizontally
  margin: 'auto'
},
  // Style for the "Home" link
 linkHome: {
    fontFamily: 'SF Pro Display',
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '19.09px',
    color: '#FFFFFF',
    textDecoration: 'none',
    margin: '0 20px 0 800px',
    // Add any additional styles for the "Home" link
  },
  linkCheckout: {
    fontFamily: 'SF Pro Display',
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '19.09px',
    color: '#FFFFFF',
    textDecoration: 'none',
    margin: '0 20px 0 400px',
    // Add any additional styles for the "Home" link
  },
  linkProfile: {
    fontFamily: 'SF Pro Display',
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '19.09px',
    color: '#FFFFFF',
    textDecoration: 'none',
    margin: '0 30px 0 0px',
    // Add any additional styles for the "Home" link
  }
};













//search styles
export const searchBarStyles = {
  position: "absolute",
  left: "10%", // Adjust this value as needed
  right: "63.19%",
  top: "20%", // Adjust this value to move it to the top
  bottom: "1%",
};

export const searchItemStyles = {
  rectangle: {
    boxSizing: "border-box",
    position: "absolute",
    left: "15%", // Adjust this value as needed
    right: "15%",
    top: "1%", // Adjust this value to match the top of the search bar
    bottom: "1%",
    border: "0.5px solid rgba(255, 255, 255, 0.5)",
    borderRadius: "184px",
  },
  // vector: {
  //   position: "absolute",
  //   left: "21%", // Adjust this value as needed
  //   right: "85.56%",
  //   top: "19.6%", // Adjust this value to match the top of the search bar
  //   bottom: "39.6%",
  //   background: "#FFFFFF",
  // },
  text: {
    position: "absolute",
    left: "19%", // Adjust this value as needed
    right: "1%",
    top: "21.58%", // Adjust this value to match the top of the search bar
    bottom: "41.58%",
    fontFamily: 'SF Pro Display',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "17px",
    letterSpacing: "0.03em",
    color: "#FFFFFF",
  },
};

