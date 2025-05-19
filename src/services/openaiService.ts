// src/services/openaiService.ts

// Hàm tìm kiếm sản phẩm thông qua backend (gửi yêu cầu đến backend Node.js)
export const searchProducts = async (searchTerm: string) => {
    try {
      // Gửi yêu cầu POST đến backend để tìm kiếm sản phẩm
      const response = await fetch('http://localhost:5000/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Định dạng dữ liệu gửi đi là JSON
        },
        body: JSON.stringify({ searchTerm }), // Chuyển từ khóa tìm kiếm thành JSON
      });
  
      // Kiểm tra xem yêu cầu có thành công không
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      // Lấy dữ liệu phản hồi từ backend
      const data = await response.json();
      
      // Trả về kết quả tìm kiếm từ OpenAI API
      return data.result;  // Trả về văn bản kết quả từ GPT
    } catch (error) {
      // Xử lý lỗi nếu có
      console.error('Error fetching from backend:', error);
      return null; // Trả về null nếu có lỗi
    }
  };
  