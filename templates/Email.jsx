export default function ContactEmail({ name, email, phone, message, isArabic }) {
  const title = isArabic ? "رسالة تواصل جديدة" : "New Contact Message";
  const titleAccent = isArabic ? "من يونايتد ستون" : "from United Stone";

  return (
    <div
      style={{
        fontFamily: "'Montserat', Helvetica, sans-serif",
        padding: "0",
        margin: "0",
        backgroundColor: "#111",
        color: "#fff",
        direction: isArabic ? "rtl" : "ltr",
      }}
    >

      {/* Header */}
      <div style={{ backgroundColor: "#f7951e", padding: "20px 30px", textAlign: "center" }}>
        <h2 style={{ margin: 0, fontSize: "22px", fontWeight: 700 }}>
          {title}
        </h2>
        <p style={{ margin: 0, fontSize: "14px", opacity: 0.9 }}>
          {titleAccent}
        </p>
      </div>

      {/* Content */}
      <div style={{ padding: "30px", backgroundColor: "#181818" }}>
        <p style={{ fontSize: "16px", lineHeight: "28px", margin: "0 0 15px" }}>
          <strong>{isArabic ? "الاسم" : "Name"}:</strong> {name}
        </p>

        <p style={{ fontSize: "16px", lineHeight: "28px", margin: "0 0 15px" }}>
          <strong>Email:</strong> {email}
        </p>

        <p style={{ fontSize: "16px", lineHeight: "28px", margin: "0 0 15px" }}>
          <strong>{isArabic ? "الهاتف" : "Phone"}:</strong> {phone}
        </p>

        <p style={{ fontSize: "16px", lineHeight: "28px", margin: "0 0 10px" }}>
          <strong>{isArabic ? "الرسالة" : "Message"}:</strong>
        </p>

        <div style={{ backgroundColor: "#222", padding: "20px", borderRadius: "6px" }}>
          <p style={{ fontSize: "15px", lineHeight: "26px", margin: 0 }}>
            {message}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div style={{ backgroundColor: "#000", padding: "20px 30px", textAlign: "center", fontSize: "12px", opacity: 0.7 }}>
        © {new Date().getFullYear()} United Stone Marble — Riyadh, Saudi Arabia
      </div>

    </div>
  );
}
