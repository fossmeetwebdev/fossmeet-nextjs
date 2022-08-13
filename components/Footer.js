import Image from "next/image";

export default function Footer() {
  return (
    <div>
      <div>
        <div>
          <Image
            src="/fosscell-logo.jpg"
            alt="FOSS Cell Logo"
            height="32"
            width="64"
            layout="fixed"
          />
        </div>
        <div></div>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
