const CTA = () => (
  <section
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "6rem",
      padding: "2rem",
      borderRadius: "20px",
      boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)",
      backgroundColor: "#cccccc",
    }}
  >
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2
        style={{
          fontFamily: "Poppins",
          fontWeight: "600",
          fontSize: "40px",
          lineHeight: "66.8px",
          width: "100%",
          marginBottom: "1rem",
          textAlign: "center",
        }}
      >
        "Are you hosting a healthy yoga practicer?"
      </h2>
      <p
        style={{
          fontFamily: "Poppins",
          fontSize: "18px",
          lineHeight: "30.8px",
          maxWidth: "470px",
          margin: "0 auto",
        }}
      >
        Everything you need to host an event and organize your plan anywhere on
        the planet.
      </p>
    </div>

    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
    ></div>
  </section>
);

export default CTA;
