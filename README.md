📘 CRUD App – MERN Stack
This is a full-stack CRUD (Create, Read, Update, Delete) web application built using the MERN stack:
🌐 Live Demo - Netlyfy
[https://neon-fox-bf0b86.netlify.app/]

MongoDB – Database
Express.js – Backend framework
React.js – Frontend library
Node.js – Runtime environment
Bootstrap - Styling

🚀 Features
➕ Create new users/items
📄 Read and display data from the database
✏️ Update existing records
❌ Delete records
📦 RESTful API integration
🎨 Clean and responsive UI

📂 Project Structure
bash
Copy
Edit
├── client/         # React frontend
├── server/         # Node/Express backend
├── .env            # Environment variables
├── README.md
⚙️ Setup Instructions
1. Clone the repository
bash
Copy
Edit
git clone https://github.com/your-username/your-crud-app.git
cd your-crud-app
2. Install backend dependencies
bash
Copy
Edit
cd server
npm install
3. Install frontend dependencies
bash
Copy
Edit
cd ../client
npm install
4. Set up .env file (in server/)
env
Copy
Edit
PORT=5000
MONGO_URI=your_mongo_connection_string
5. Run the app
bash
Copy
Edit
# In one terminal (backend)
cd server
npm start

# In another terminal (frontend)
cd client
npm run dev
