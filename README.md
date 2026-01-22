# ExpenseTracker AI 💸🤖

An AI-powered expense tracking web application that helps users understand and improve their spending habits through intelligent categorization, real-time analytics, and personalized financial insights.

🔗 **Live Demo:** https://next-expense-tracker-ai-dusky.vercel.app  
🔗 **GitHub Repo:** https://github.com/Richwell111/next-expense-tracker-ai

---

## 🚀 Features

- 🔐 Secure authentication with **Clerk** (Google, GitHub, Email)
- 🧠 **AI-powered expense categorization** using natural language
- 📊 **Real-time analytics & charts** with Chart.js
- ✨ **Personalized AI insights** with confidence scores and smart tips
- 🌗 **Light & Dark mode** support
- ⚡ Smooth UI interactions and real-time updates
- 📱 Fully responsive design
- ☁️ **Serverless deployment on Vercel**
- 🛟 Graceful fallbacks when AI services are unavailable

---

## 🛠 Tech Stack

### Frontend
- **Next.js 16 (App Router)**
- **React 19**
- **Tailwind CSS**
- **Chart.js**

### Backend & Database
- **Prisma ORM**
- **PostgreSQL (Neon)**
- **Server Actions**

### Authentication
- **Clerk**

### AI
- **OpenRouter API**
  - Expense categorization
  - Financial insights generation

### Deployment
- **Vercel**

---

## 🧠 AI Capabilities

- Categorizes expenses automatically based on descriptions
- Analyzes spending patterns
- Generates actionable financial insights
- Assigns confidence scores to AI suggestions
- Provides helpful fallback responses if AI is unavailable

---

## 📦 Environment Variables

Create a `.env` file with the following:

```env
DATABASE_URL=your_neon_database_url
OPENROUTER_API_KEY=your_openrouter_api_key
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Clone the repository
git clone https://github.com/Richwell111/next-expense-tracker-ai.git

# Install dependencies
npm install

# Generate Prisma Client
npx prisma generate

# Run database migrations
npx prisma migrate dev

# Start the dev server
npm run dev

Project Structure
app/
 ├─ actions/        # Server actions
 ├─ api/            # API routes
 ├─ components/     # Reusable UI components
 ├─ contexts/       # Theme & global contexts
 ├─ lib/            # Prisma, AI utilities
 └─ page.tsx        # Main dashboard
prisma/
 └─ schema.prisma

