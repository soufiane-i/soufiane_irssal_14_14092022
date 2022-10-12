function Modal() {
  return (
    <div
      className="modalContainer"
      style={{
        position: "absolute",
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.6)",
      }}
    >
      <div
        className="modal"
        style={{
          width: "20%",
          height: "90px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: "10px",
          position: "relative",
          fontWeight: "bold",
        }}
      >
        <p>Employee Created !</p>
        <div
          className="imgContainer"
          style={{
            position: "absolute",
            top: "-10px",
            right: "-10px",
            backgroundColor: "black",
            borderRadius: "50%",
            height: "25px",
            width: "25px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <img
            src="/cross.png"
            style={{
              height: "15px",
              width: "auto",
              filter: "invert(100%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Modal;
