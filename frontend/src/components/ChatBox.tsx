import React, { useState } from "react";
import axios from "axios";

const ChatBot: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ from: string; text: string }[]>([]);
  const [input, setInput] = useState("");

  // Hàm gửi tin nhắn (có thể thay bằng gọi API AI thật)
 const sendMessage = async () => {
  if (!input.trim()) return;
  setMessages((msgs) => [...msgs, { from: "user", text: input }]);
  const userInput = input;
  setInput("");

  try {
    const response = await axios.post("http://localhost:8082/api/ask-ai", {
      message: userInput,
    });
    setMessages((msgs) => [
      ...msgs,
      { from: "bot", text: response.data.reply },
    ]);
  } catch (err) {
    setMessages((msgs) => [
      ...msgs,
      { from: "bot", text: "Xin lỗi, hệ thống đang bận. Vui lòng thử lại sau!" },
    ]);
  }
};

  return (
    <>
      {/* Nút mở chat */}
      <button
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 1000,
          background: "#ff6600",
          color: "#fff",
          borderRadius: "50%",
          width: 56,
          height: 56,
          fontSize: 28,
          border: "none",
          boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
          cursor: "pointer",
        }}
        onClick={() => setOpen((o) => !o)}
        aria-label="Chat với CSKH"
      >
        💬
      </button>

      {/* Khung chat */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: 90,
            right: 24,
            width: 320,
            height: 400,
            background: "#fff",
            borderRadius: 12,
            boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
            display: "flex",
            flexDirection: "column",
            zIndex: 1001,
          }}
        >
          <div style={{ padding: 12, borderBottom: "1px solid #eee", fontWeight: "bold", background: "#ff6600", color: "#fff" }}>
            CSKH AI Chat
            <button style={{ float: "right", background: "none", border: "none", color: "#fff", fontSize: 18, cursor: "pointer" }} onClick={() => setOpen(false)}>×</button>
          </div>
          <div style={{ flex: 1, padding: 12, overflowY: "auto" }}>
            {messages.map((msg, idx) => (
              <div key={idx} style={{ textAlign: msg.from === "user" ? "right" : "left", margin: "8px 0" }}>
                <span
                  style={{
                    display: "inline-block",
                    background: msg.from === "user" ? "#e0e0e0" : "#ffecd2",
                    color: "#222",
                    borderRadius: 8,
                    padding: "6px 12px",
                    maxWidth: "80%",
                  }}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          <div style={{ padding: 8, borderTop: "1px solid #eee", display: "flex" }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Nhập câu hỏi..."
              style={{ flex: 1, border: "1px solid #ccc", borderRadius: 6, padding: 8, marginRight: 8 }}
            />
            <button onClick={sendMessage} style={{ background: "#ff6600", color: "#fff", border: "none", borderRadius: 6, padding: "8px 16px" }}>
              Gửi
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;