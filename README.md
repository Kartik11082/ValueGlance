# Financial Data Filtering App

This is a Vite-based React web application that fetches and displays financial data for Apple Inc. (AAPL) using the Financial Modeling Prep API. Users can filter and sort the data based on various criteria such as date, revenue, and net income.

## Features

- Fetches annual income statements for Apple Inc.
- Displays data in a table with columns for Date, Revenue, Net Income, Gross Profit, EPS, and Operating Income.
- Allows users to filter the data by date range, revenue, and net income.
- Enables sorting of the data by date, revenue, and net income.
- Mobile-friendly responsive design using Tailwind CSS.

## Technologies Used

- **Frontend**: React (via Vite), Tailwind CSS
- **Deployment**: Vercel, Netlify, GitHub Pages, or AWS (optional)

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

````

### 2. Install Dependencies

```bash
npm install
```

or if using Yarn:

```bash
yarn install
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

or if using Yarn:

```bash
yarn dev
```

Open your browser and go to `http://localhost:3000` to view the app.

### 5. Build for Production (Optional)

To build the project for production, run:

```bash
npm run build
```

or if using Yarn:

```bash
yarn build
```

The build files will be created in the `dist` directory. You can deploy these files using any static site hosting service.

## Folder Structure

```bash
financial-data-filtering-app/
├── public/
├── src/
│   ├── components/
│   │   └── FinancialDataTable.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── assets/
├── .env
├── .gitignore
├── package.json
├── README.md
└── tailwind.config.js
```

## Deployment

You can deploy the application using services like Vercel, Netlify, or GitHub Pages. Follow the specific instructions for each service to deploy your Vite application.

## Troubleshooting

- **Tailwind CSS Issues**: If Tailwind CSS is not applying styles, ensure the Tailwind configuration is correctly set up and that the necessary directives are included in your CSS file.
- **API Data Issues**: If data is not loading, check the console for errors and ensure your API key is valid and correctly set in the `.env` file.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
````
