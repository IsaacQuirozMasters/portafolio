"use client"

import { useState } from "react"
import { Send, Phone, Video, MoreVertical } from "lucide-react"

const WhatsAppContact = () => {
  const [message, setMessage] = useState("")
  const phoneNumber = "529985242217"

  const sendToWhatsApp = () => {
    if (message.trim()) {
      const encodedMessage = encodeURIComponent(message)
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
      window.open(whatsappUrl, "_blank")
      setMessage("")
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendToWhatsApp()
    }
  }

  return (
    <div name="contact" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white p-4">
      <div className="flex flex-col justify-center max-w-screen-lg mx-auto h-full mt-10">

        {/* WhatsApp Chat Interface */}
        <div className="flex justify-center items-center">
          <div className="w-full md:w-2/3 lg:w-1/2 bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
            {/* WhatsApp Header */}
            <div className="bg-gray-800 p-4 flex items-center justify-between border-b border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold">
                  I
                </div>
                <div>
                  <h3 className="font-semibold text-white">Isaac Quiroz</h3>
                  <p className="text-xs text-gray-400">En línea</p>
                </div>
              </div>
              <div className="flex space-x-4 text-gray-400">
                <Phone className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
                <Video className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
                <MoreVertical className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
              </div>
            </div>

            {/* Chat Area */}
            <div className="h-80 bg-gray-900 p-4 overflow-y-auto">
              <div className="flex flex-col space-y-4">
                {/* Welcome Message */}
                <div className="flex justify-start">
                  <div className="bg-gray-700 text-white p-3 rounded-lg rounded-tl-none max-w-xs">
                    <p className="text-sm">¡Hola! 👋</p>
                    <p className="text-sm mt-1">Escríbeme tu mensaje y te responderé lo antes posible.</p>
                    <span className="text-xs text-gray-400 mt-2 block">Ahora</span>
                  </div>
                </div>

                {/* Preview of user message if typing */}
                {message && (
                  <div className="flex justify-end">
                    <div className="bg-green-600 text-white p-3 rounded-lg rounded-tr-none max-w-xs">
                      <p className="text-sm">{message}</p>
                      <span className="text-xs text-green-200 mt-2 block">Escribiendo...</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Message Input */}
            <div className="bg-gray-800 p-4 border-t border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="flex-1 relative">
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Escribe tu mensaje..."
                    className="w-full bg-gray-700 text-white p-3 rounded-full resize-none focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400"
                    rows={1}
                    style={{ minHeight: "44px", maxHeight: "120px" }}
                  />
                </div>
                <button
                  onClick={sendToWhatsApp}
                  disabled={!message.trim()}
                  className={`p-3 rounded-full transition-all duration-300 ${
                    message.trim()
                      ? "bg-green-600 hover:bg-green-700 text-white hover:scale-110"
                      : "bg-gray-600 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* WhatsApp Footer */}
            <div className="bg-gray-800 p-2 text-center">
              <p className="text-xs text-gray-500">
                Powered by <span className="text-green-400 font-semibold">WhatsApp</span>
              </p>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            Escribe tu mensaje y presiona Enter o haz clic en enviar para abrir WhatsApp
          </p>
        </div>
      </div>
    </div>
  )
}

export default WhatsAppContact
