import { useState } from "react";
import { CheckoutItem } from "../components/CheckoutItem";
import { useShopCart } from "../context/Catalog-context";
import { motion } from "framer-motion";
import { animateInView } from "../animations";

export function Checkout() {
  const { cartItems } = useShopCart();
  const [isCheckboxChecked, setCheckboxChecked] = useState(false);

  const handleCheckboxChange = () => {
    setCheckboxChecked(!isCheckboxChecked);
  };

  return (
    <motion.div 
      className='section flex justify-center bg-center bg-cover py-20 px-3 sm:px-5'
      initial="hidden"
      whileInView="visible"
      variants={animateInView}
      transition={{ duration: 0.8 }}
      viewport={{once: true}}
    >
      <div className="container flex flex-col items-center mt-10">
        <div className="w-[100%] mx-auto px-4 pb-16 pt-4 sm:px-6 sm:pb-24 sm:pt-8 lg:px-8 xl:px-2 xl:pt-14 border-1 border-slate-100 shadow-xl shadow-stone-300 rounded-[20px]">
          <h1 className="sr-only">Оформление заказа</h1>
          <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="w-[100%] sm:w-[90%] mx-0 sm:mx-6 mt-5 sm:mt-0">
              <div className="flow-root">
                <ul role="list" className="-my-6">
                  {cartItems.map((item) => (
                    <CheckoutItem key={item.id} {...item} />
                  ))}
                </ul>
              </div>
                  
              <dl className="mt-10 space-y-6 text-sm font-medium text-gray-500">
                <div className="flex justify-between">
                  <dt>Подытог</dt>
                  <dd className="text-gray-900">
                    {cartItems.reduce((total, product) => {
                      const item = cartItems.find(i => i.id === product.id);
                      if (item) {
                          return total + ((item.price || 0) * product.quantity);
                      } else {
                          return total;
                      }
                    }, 0)} руб.
                  </dd>
                </div>
                <div className="flex justify-between border-t border-gray-200 pt-6 text-gray-900">
                  <dt className="text-base">Итог</dt>
                  <dd className="text-base">
                    {cartItems.reduce((total, product) => {
                      const item = cartItems.find(i => i.id === product.id);
                      if (item) {
                          return total + ((item.price || 0) * product.quantity);
                      } else {
                          return total;
                      }
                    }, 0)} руб.
                  </dd>
                </div>
              </dl>
            </div>
                  
            <div className="mx-auto w-full max-w-lg">
              <button
                type="button"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-black py-2 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
              >
                <span className="sr-only">Pay with Apple Pay</span>
                <svg className="h-5 w-auto" fill="currentColor" viewBox="0 0 50 20">
                  <path d="M9.536 2.579c-.571.675-1.485 1.208-2.4 1.132-.113-.914.334-1.884.858-2.484C8.565.533 9.564.038 10.374 0c.095.951-.276 1.884-.838 2.579zm.829 1.313c-1.324-.077-2.457.751-3.085.751-.638 0-1.6-.713-2.647-.694-1.362.019-2.628.79-3.323 2.017-1.429 2.455-.372 6.09 1.009 8.087.676.99 1.485 2.075 2.552 2.036 1.009-.038 1.409-.656 2.628-.656 1.228 0 1.58.656 2.647.637 1.104-.019 1.8-.99 2.475-1.979.771-1.122 1.086-2.217 1.105-2.274-.02-.019-2.133-.828-2.152-3.263-.02-2.036 1.666-3.007 1.742-3.064-.952-1.408-2.437-1.56-2.951-1.598zm7.645-2.76v14.834h2.305v-5.072h3.19c2.913 0 4.96-1.998 4.96-4.89 0-2.893-2.01-4.872-4.885-4.872h-5.57zm2.305 1.941h2.656c2 0 3.142 1.066 3.142 2.94 0 1.875-1.142 2.95-3.151 2.95h-2.647v-5.89zM32.673 16.08c1.448 0 2.79-.733 3.4-1.893h.047v1.779h2.133V8.582c0-2.14-1.714-3.52-4.351-3.52-2.447 0-4.256 1.399-4.323 3.32h2.076c.171-.913 1.018-1.512 2.18-1.512 1.41 0 2.2.656 2.2 1.865v.818l-2.876.171c-2.675.162-4.123 1.256-4.123 3.159 0 1.922 1.495 3.197 3.637 3.197zm.62-1.76c-1.229 0-2.01-.59-2.01-1.494 0-.933.752-1.475 2.19-1.56l2.562-.162v.837c0 1.39-1.181 2.379-2.743 2.379zM41.1 20c2.247 0 3.304-.856 4.227-3.454l4.047-11.341h-2.342l-2.714 8.763h-.047l-2.714-8.763h-2.409l3.904 10.799-.21.656c-.352 1.114-.923 1.542-1.942 1.542-.18 0-.533-.02-.676-.038v1.779c.133.038.705.057.876.057z" />
                </svg>
              </button>
                  
              <div className="relative mt-8">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-white px-4 text-sm font-medium text-gray-500">or</span>
                </div>
              </div>
                  
              <form className="mt-6">
                <h2 className="text-lg font-medium text-gray-900 tracking-[0.8px]">Контактная информация</h2>
                  
                <div className="mt-6">
                  <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                    Ваш Email
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      id="email-address"
                      name="email-address"
                      autoComplete="email"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                  
                <div className="mt-6">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Ваш телефон
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                  
                <div className="mt-6 flex space-x-2">
                  <div className="flex h-5 items-center">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      onClick={handleCheckboxChange}
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-transparent"
                    />
                  </div>
                  <label htmlFor="terms" className="text-sm text-gray-500">
                    Я прочитал оферту и политику конфиденциальности.
                  </label>
                </div>
                  
                <button
                  type="submit"
                  disabled={!isCheckboxChecked}
                  className="w-[100%] rounded-[8px] py-4 px-10 text-lg tracking-[0.5px] enabled:bg-grad text-white font-exo mt-4 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500"
                >
                  Продолжить
                </button>
              </form>
                  
              
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
  