

export default function Header() {
  return (
    <div>
  <img
    style={{
      filter:
        "invert(43%) sepia(61%) saturate(1400%) hue-rotate(2deg) brightness(90%) contrast(104%) opacity(4)"
    }}
    src="rectangle-212@1x.png"
    alt=""
  />
  <p
    style={{
      fontFamily: '"JetBrains Mono", monospace',
      fontWeight: 400,
      color: "white",
      fontSize: 24,
      position: "absolute",
      top: 100,
      left: 50
    }}
  >
    Workshops,Seminars and Competitions
  </p>
  <p
    style={{
      fontFamily: '"JetBrains Mono", monospace',
      fontWeight: "bold",
      color: "white",
      fontSize: 64,
      position: "absolute",
      top: 160,
      left: 50
    }}
  >
    Events
  </p>
</div>

  );
}