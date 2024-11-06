# CurrencyConverter Pro

A currency converter application built with React and styled using Tailwind CSS. This app allows users to convert between different currencies, shows detailed conversion information, and displays a time-based greeting. It also includes links to LinkedIn and GitHub profiles for user engagement.

## Features

- **Dynamic Greetings**: Displays "Good Morning," "Good Afternoon," or "Good Evening" based on the time of the day.
- **Currency Conversion**: Converts between different currencies based on real-time exchange rates.
- **Detailed Conversion Information**: Shows the exchange rate and the total converted amount.
- **LinkedIn & GitHub Links**: Includes social media links in the top-right corner of the app.
- **Animations**: Smooth animations for interactive elements such as buttons and the card hover effect.

## Demo

You can view the live version of this app hosted on GitHub Pages at:  
[https://yourusername.github.io/currencyconverter-pro](https://yourusername.github.io/currencyconverter-pro)

## Table of Contents

1. [Technologies Used](#technologies-used)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Project Structure](#project-structure)

## Technologies Used

- **React**: Frontend JavaScript library to build user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for fast styling.
- **React Icons**: Used for adding social media icons (LinkedIn, GitHub).
- **Vite**: Build tool that provides a fast development environment for React.
- **Custom Hooks**: Fetching real-time exchange rates using custom hooks.

## Installation

### Prerequisites

To run this project locally, you need to have the following installed on your machine:

- Node.js (v14 or later)
- npm or yarn

### Steps to Install

1. Clone the repository:

```bash
git clone https://github.com/SOMANATHPANDA/Currency-Converter.git
cd Currency-Converter

2. Install dependencies:

```bash
npm install

3. Start the development server:

```bash
npm run dev

The app should now be running locally at http://localhost:3000.

## Usage

- The user can select the currency they want to convert from and to using dropdowns.
- Enter the amount to convert, and the app will display the converted amount along with the exchange rate.
- The app will greet the user based on the time of day.
- Links to LinkedIn and GitHub are displayed in the top-right corner of the app.

## Project Structure

The project has the following structure:

currencyconverter-pro/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── InputBox.js
│   ├── customHooks/
│   │   └── useCurrencyInfo.js
│   ├── App.js
│   └── main.js
├── package.json
├── tailwind.config.js
└── README.md

### Components

- **InputBox.js**:  A reusable component for displaying the input fields (amount and currency dropdowns).

### Custom Hooks

- **useCurrencyInfo.js**:   A custom hook to fetch and return the real-time currency exchange rates.