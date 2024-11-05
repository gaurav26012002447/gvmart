## GV Mart
# GV Mart is an online marketplace application inspired by the functionality of popular e-commerce platforms, built as part of a final year project. The project aims to provide a simplified and functional e-commerce experience, with a focus on key features like secure payments, session management, and an admin panel for easy inventory management.

## Features
User Registration and Authentication: User registration includes JWT-based session tokens to securely manage user sessions.
Message Notifications: SendGrid is used to send important messages to users, such as order confirmations.
Media Storage: Cloudinary is integrated for storing product images and media files.
Payment Gateway: Paytm integration allows secure payment handling.
Admin Panel: An admin panel is available where the owner can manage inventory. Currently, three items are added for demonstration purposes.
Technologies Used
Backend: Node.js, Express.js
Frontend: React.js (or specify if different)
Database: MongoDB (or specify if different)
Other Integrations:
SendGrid for message notifications.
Cloudinary for image and media storage.
Paytm as the payment gateway.
JWT (JSON Web Tokens) for secure session management.
Setup and Installation
Clone the Repository

```bash
Copy code
git clone <repository-url>
cd gv-mart
Install Dependencies
```
```bash
Copy code
npm install
Environment Variables
```
Set up a .env file in the root directory with the following keys:
SENDGRID_API_KEY - Your SendGrid API key
CLOUDINARY_URL - Your Cloudinary URL
PAYTM_MERCHANT_KEY - Your Paytm merchant key
JWT_SECRET - Secret key for JWT
Run the Application

bash
Copy code
npm start
Features in Progress
Email Verification: There was an initial plan to implement two-way verification by sending an OTP for email confirmation, which is currently a work in progress.
Project Structure
/admin - Admin panel for item management.
/api - API routes for managing products, users, and orders.
/client - Frontend codebase.
/config - Configuration files for SendGrid, Cloudinary, and Paytm integrations.
Future Enhancements
Implement OTP-based two-way verification for more secure user registration.
Add more items to the inventory.
Enhance payment integration with more payment options.
License
MIT License

Let me know if there’s anything specific you’d like to add!







