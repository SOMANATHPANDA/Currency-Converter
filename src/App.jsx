import { useState, useEffect } from 'react';
import { InputBox } from './components';
import useCurrencyInfo from './customHooks/useCurrencyInfo';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [exchangeRate, setExchangeRate] = useState(1);
  const [greeting, setGreeting] = useState("");

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  useEffect(() => {
    if (currencyInfo[to]) {
      setExchangeRate(currencyInfo[to]);
    }
  }, [from, to, currencyInfo]);

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good morning");
    else if (hour < 18) setGreeting("Good afternoon");
    else setGreeting("Good evening");
  }, []);

  const swap = () => {
    setTo(from);
    setFrom(to);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = (amount) => {
    const converted = amount * exchangeRate;
    setConvertedAmount(converted);
  };

  return (
    <div
      className="relative w-full h-screen flex flex-col items-center justify-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/6534318/pexels-photo-6534318.jpeg?auto=compress&cs=tinysrgb&w=600)`,
      }}
    >
      {/* Greeting and Welcome Message */}
      <header className="absolute top-4 left-4 text-white text-2xl font-semibold">
        {greeting}, welcome to <span className="text-yellow-300">CurrencyConverter Pro</span>
      </header>

      {/* Social Icons */}
      <div className="absolute top-4 right-4 flex space-x-4">
        <a href="https://www.linkedin.com/in/somanath-panda-software-engineer/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-white text-2xl hover:text-blue-400 transition" />
        </a>
        <a href="https://github.com/SOMANATHPANDA" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-white text-2xl hover:text-gray-400 transition" />
        </a>
      </div>

      {/* Main Content */}
      <div className="flex gap-8 w-full max-w-4xl mt-20">
        {/* First Card */}
        <div className="w-1/2 p-6 rounded-lg bg-gradient-to-br from-purple-500 via-blue-500 to-indigo-500 shadow-lg backdrop-blur-sm transform hover:scale-105 transition duration-300">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert(amount);
            }}
          >
            <div className="mb-4">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative mb-4">
              <button
                type="button"
                className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-black rounded-md px-3 py-1 shadow-md mt-[-0.5rem] transition-transform hover:scale-110"
                onClick={swap}
              >
                Swap
              </button>
            </div>
            <div className="mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 rounded-lg bg-pink-500 text-white font-semibold transform hover:scale-105 transition"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>

        {/* Second Card with Calculation Information */}
        <div
          className="w-1/2 p-6 rounded-lg bg-gradient-to-br from-green-400 via-teal-500 to-cyan-500 shadow-lg flex flex-col items-center justify-center text-white text-center transform hover:scale-105 transition duration-300"
        >
          <h2 className="text-xl font-bold mb-2">Did You Know?</h2>
          <p className="text-sm">
            Currency exchange rates change frequently based on market trends.
            Keep an eye on rates for the best conversion!
          </p>
          <h2 className="text-xl font-bold my-2">Conversion Details</h2>
          <p className="text-sm mb-2">
            1 {from.toUpperCase()} = {exchangeRate.toFixed(2)} {to.toUpperCase()}
          </p>
          <p className="text-lg">
            Total: {amount} {from.toUpperCase()} = {convertedAmount.toFixed(2)} {to.toUpperCase()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
