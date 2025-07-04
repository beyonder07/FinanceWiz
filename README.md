# Personal Finance Visualizer

A comprehensive personal finance management application built with Next.js, React, and modern web technologies. Track your expenses, manage budgets, and visualize your financial data with beautiful charts and insights.

![Finance Visualizer Dashboard](https://via.placeholder.com/800x400?text=Dashboard+Screenshot)

## ✨ Features

### 📊 **Dashboard & Analytics**
- Real-time financial overview with summary cards
- Interactive charts for expense tracking and category breakdown
- Monthly spending trends and budget vs actual comparisons
- Recent transactions and budget status overview

### 💰 **Transaction Management**
- Add, edit, and delete income/expense transactions
- Categorize transactions for better organization
- Search and filter transactions by description or category
- Form validation with comprehensive error handling

### 🎯 **Budget Management**
- Set monthly/yearly budgets by category
- Track spending against budget limits
- Visual progress indicators and status alerts
- Budget vs actual spending comparisons

### 🎨 **Modern UI/UX**
- Clean, responsive design that works on all devices
- Dark/light mode support with system preference detection
- Smooth animations and transitions
- Accessible design with proper ARIA labels

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Charts**: [Recharts](https://recharts.org/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **State Management**: React hooks (useState, useEffect)
- **Database**: MongoDB (ready for integration)
- **Deployment**: [Vercel](https://vercel.com/)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Git

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/yourusername/personal-finance-visualizer.git
   cd personal-finance-visualizer
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. **Set up environment variables**
   \`\`\`bash
   cp .env.example .env.local
   \`\`\`
   Edit `.env.local` with your configuration values.

4. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Screenshots

### Dashboard
![Dashboard](https://via.placeholder.com/600x400?text=Dashboard+View)

### Transactions
![Transactions](https://via.placeholder.com/600x400?text=Transactions+List)

### Budget Management
![Budget](https://via.placeholder.com/600x400?text=Budget+Overview)

## 🏗️ Project Structure

\`\`\`
├── app/                    # Next.js App Router
│   ├── dashboard/         # Dashboard page
│   ├── transactions/      # Transactions management
│   ├── budget/           # Budget management
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   ├── loading.tsx       # Loading UI
│   ├── not-found.tsx     # 404 page
│   └── page.tsx          # Home page (redirects to dashboard)
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── charts/           # Chart components
│   ├── dashboard/        # Dashboard-specific components
│   ├── transactions/     # Transaction components
│   ├── budget/           # Budget components
│   └── layout/           # Layout components
├── lib/                  # Utility functions
│   ├── constants.ts      # App constants
│   ├── mock-data.ts      # Mock data for development
│   └── utils.ts          # Helper functions
└── hooks/                # Custom React hooks
\`\`\`

## 🎯 Roadmap

- [ ] **Database Integration**: Connect to MongoDB for persistent data
- [ ] **User Authentication**: Add user accounts and data isolation
- [ ] **Data Export**: Export financial data as CSV/PDF
- [ ] **Recurring Transactions**: Support for recurring income/expenses
- [ ] **Financial Goals**: Goal setting and progress tracking
- [ ] **Mobile App**: React Native version
- [ ] **Bank Integration**: Connect to bank accounts via APIs
- [ ] **Advanced Analytics**: More detailed financial insights

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Recharts](https://recharts.org/) for the charting library
- [Lucide](https://lucide.dev/) for the icons
- [Vercel](https://vercel.com/) for hosting and deployment

## 📞 Support

If you have any questions or need help, please open an issue or contact [your-email@example.com](mailto:your-email@example.com).

---

**Live Demo**: [https://your-app.vercel.app](https://your-app.vercel.app)

Made with ❤️ by [Your Name](https://github.com/yourusername)
