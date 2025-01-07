# Financial Data Filtering App

This is a Vite-based React web application that fetches and displays financial data for Apple Inc. (AAPL) using the Financial Modeling Prep API. Users can filter and sort the data based on various criteria such as date, revenue, and net income.

Hosted URL: [Click](https://value-glance-git-main-kartik11082s-projects.vercel.app/)
or goto https://value-glance-git-main-kartik11082s-projects.vercel.app/

## Features

- Fetches annual income statements for Apple Inc.
- Displays data in a table with columns for Date, Revenue, Net Income, Gross Profit, EPS, and Operating Income.
- Allows users to filter the data by date range, revenue, and net income.
- Enables sorting of the data by date, revenue, and net income.
- Mobile-friendly responsive design using Tailwind CSS.

## Technologies Used

- **Frontend**: React (via Vite), Tailwind CSS

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm (or Yarn) installed on your machine.
- A free API key from [Financial Modeling Prep](https://financialmodelingprep.com/developer/docs/).

## Getting Started

Follow these instructions to set up and run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/financial-data-filtering-app.git
cd financial-data-filtering-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root of the project and add your API key:

```env
VITE_API_KEY=your_api_key_here
```

### 4. Run the Application

Start the development server:

```bash
npm run dev
```

Open your browser and go to `http://localhost:5173` to view the app.

## Troubleshooting

- **API Data Issues**: If data is not loading, check the console for errors and ensure your API key is valid and correctly set in the `.env` file.
