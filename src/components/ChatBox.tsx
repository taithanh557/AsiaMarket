import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, SendHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import clsx from "clsx";

type Message = {
  sender: "user" | "bot";
  text: string;
};

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage = input.trim();

    // Thêm tin nhắn user vào messages
    setMessages((prev) => [...prev, { sender: "user", text: userMessage }]);
    setInput("");
    setLoading(true);

    try {
      // Gửi API với history message + message mới
      // Chuyển sang định dạng OpenAI Chat API
      const formattedMessages = [
        { role: "system", content: "You are a helpful assistant." },
        ...messages.map((m) => ({
          role: m.sender === "user" ? "user" : "assistant",
          content: m.text,
        })),
        { role: "user", content: userMessage },
      ];

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: formattedMessages }),
      });

      const data = await response.json();

      if (data.reply) {
        setMessages((prev) => [...prev, { sender: "bot", text: data.reply }]);
      } else {
        setMessages((prev) => [...prev, { sender: "bot", text: "Xin lỗi, tôi không thể trả lời." }]);
      }
    } catch (error) {
      setMessages((prev) => [...prev, { sender: "bot", text: "Xin lỗi, có lỗi xảy ra." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-orange-500 text-white rounded-full p-3 shadow-lg"
          aria-label="Open chat"
        >
          <MessageCircle className="h-5 w-5" />
        </Button>
      ) : (
        <div className="w-80 h-[400px] bg-white shadow-lg rounded-lg flex flex-col border border-gray-300">
          {/* Header */}
          <div className="bg-orange-500 text-white p-3 font-semibold flex justify-between items-center">
            Hỗ trợ khách hàng
            <button
              onClick={() => setIsOpen(false)}
              className="text-white font-bold text-xl"
              aria-label="Close chat"
            >
              &times;
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-2 overflow-y-auto space-y-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={clsx(
                  "px-3 py-2 rounded-lg max-w-[80%]",
                  msg.sender === "user"
                    ? "bg-orange-100 self-end text-right ml-auto"
                    : "bg-gray-100 self-start"
                )}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-2 border-t flex items-center space-x-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Nhập câu hỏi..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              disabled={loading}
            />
            <Button size="icon" onClick={sendMessage} disabled={loading}>
              <SendHorizontal className="h-5 w-5" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBox;
