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
  alignItems: 'center',
};

export const walletButtonStyles = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "10px",
  gap: "10px",
  position: "absolute",
  width: "108px",
  height: "38px",
  left: "1217px",
  top: "32px",
  border: "0.5px solid #FFFFFF",
  borderRadius: "5px",
};

export const walletTextStyles = {
  fontWeight: 600,
  fontSize: "16px",
  lineHeight: "19px",
  letterSpacing: "0.02em",
  color: "#FFFFFF",
};

export const searchBarStyles = {
  position: "absolute",
  left: "20%", // Adjust this value as needed
  right: "63.19%",
  top: "25.74%",
  bottom: "26.73%",
};

export const searchItemStyles = {
  rectangle: {
    boxSizing: "border-box",
    position: "absolute",
    left: "20%", // Adjust this value as needed
    right: "20%",
    top: "25.74%",
    bottom: "26.73%",
    border: "0.5px solid rgba(255, 255, 255, 0.5)",
    borderRadius: "184px",
  },
  vector: {
    position: "absolute",
    left: "21%", // Adjust this value as needed
    right: "85.56%",
    top: "39.6%",
    bottom: "39.6%",
    background: "#FFFFFF",
  },
  text: {
    position: "absolute",
    left: "23%", // Adjust this value as needed
    right: "65.62%",
    top: "41.58%",
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

export const logoStyles = {
  position: "absolute",
  left: "3.54%",
  right: "90.83%",
  top: "27.72%",
  bottom: "30.69%",
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: "36px",
  lineHeight: "42px",
  color: "#6C5DD3",
};