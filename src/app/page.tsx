const Homepage = () => {
  const containerStyles = {
    // Full viewport width
    height: "100vh", // Full viewport height
    backgroundImage: "url(/about.jpg)",
    backgroundSize: "cover",
    /* Other background properties if needed */
  };
  return (
    <div className="min-h-screen flex items-center" style={containerStyles}>
      {/* Your component content */}
      <h1>Hello, Background Image!</h1>
    </div>
  );
};

export default Homepage;
