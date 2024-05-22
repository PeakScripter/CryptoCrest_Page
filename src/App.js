import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";

function App() {
  const cardsData = [
    { title: 'Industry', description: 'Our Blockchain is a permissioned chain and You, yes You will be the king of your own data.', backgroundImage: './images/industry.png' },
    { title: 'Supply Chain', description: 'Our Blockchain is a permissioned chain and You, yes You will be the king of your own data.', backgroundImage: './images/supply.png' },
    { title: 'Database', description: 'Our Blockchain is a permissioned chain and You, yes You will be the king of your own data.', backgroundImage: './images/database.png' },
  ];
  const [showPopup, setShowPopup] = useState(false);
  const [showSecondPopup, setShowSecondPopup] = useState(false);
  const [email, setEmail] = useState('');
  const popupRef = useRef(null);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const toggleSecondPopup = () => {
    setShowSecondPopup(!showSecondPopup);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    console.log('Submitted email:', email);
    // Add your submission logic here
    // Reset email input
    setEmail('');
    // Close the first popup
    setShowPopup(false);
    // Open the second popup
    setShowSecondPopup(true);
  };

  const handleHomeClick = () => {
    // Close the second popup
    setShowSecondPopup(false);
  };
   const handleClickOutside = (e) => {
    if (popupRef.current && !popupRef.current.contains(e.target)) {
      setShowPopup(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-black h-screen w-screen m-0 overflow-x-hidden text-white">
      <div className="p-7 flex justify-between"> 
      <img className='md:w-40' src="./images/logo.png" alt="logo"></img>
      <button className="bg-vii text-white px-4 rounded-md w-24 h-8 md:w-30 md:rounded-xl md:h-12" onClick={togglePopup}>Join us</button>
     </div>
     <div className="flex flex-col justify-center mt-32 text-center">
      <h1 className="text-white text-4xl font-semibold ml-10 mr-10 md:text-6xl">Welcome to <span className="text-vii">CryptoCrest</span> Realm</h1>
      <h1 className=" text-gray mt-4 ml-10 mr-10 md:text-2xl">We Are The Vision To A Safer And Secured Digital Revolution</h1>
      <img className="overflow-hidden m-0" src="./images/1bg.png" alt="logo"></img>
     </div>
     {showPopup && (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
  <div ref={popupRef} className="p-4 rounded-md bg-black w-full max-w-md items-center justify-center text-center">
    <img className='mx-auto' src="./images/Polygon1.png" alt="logo"></img>
    <h1 className="text-white text-3xl font-semibold mt-4">Join The <span className="text-vii">CryptoCrest</span> Ecosystem</h1>
    <h1 className="text-gray mt-2">Our Blockchain is a permissioned chain and You, yes You will be the king of your own data.</h1>

    <div className="flex justify-between ml-14 p-2 w-80 mt-4 bg-blackish border-2 border-blackish rounded">
    <img src="./images/icon.png" alt="logo"></img>
    <input className=" text-white bg-transparent w-48 h-9 pt-4 pb-5" type="email" placeholder="Enter your email" value={email} onChange={handleEmailChange}></input>
    <button type="submit">
    <img className='pr-5' src="./images/icon1.png" alt="Submit" />
    </button>
    </div>
    <button className="bg-vii text-white px-4 rounded-md w-24 h-8 mt-5 md:w-30 md:rounded-xl md:h-12" onClick={handleSubmit}>Submit</button>
  </div>
</div>
      )}
      {showSecondPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-4 rounded-md bg-black w-full max-w-md items-center justify-center text-center">
          <img className='mx-auto' src="./images/Polygon1.png" alt="logo"></img>
          <h1 className="text-white text-3xl font-semibold mt-4">Thank you for being part of the <span className="text-vii">CryptoCrest</span> ecosystem</h1>
          <button className="bg-vii text-white px-4 rounded-md w-24 h-8 mt-5 md:w-30 md:rounded-xl md:h-12" onClick={handleHomeClick}>Home</button>
          </div>
        </div>
      )}
     <div className="flex justify-between">
     <div>
     <div className=" ml-5 h-[920px] w-2 rounded-full bg-vii md:ml-80"></div>
     {/* <div className="h-10 w-4 rounded-t-full rounded-b-full bg-vii m-0 p-0"></div> */}
     </div>
     <div>
     <div className="flex md:mr-80">
     <div className="flex-col">
      <h1 className="ml-5 ">We are developing a <span className="text-vii">safer</span></h1>
      <h1 className="ml-5">and <span className="text-vii">secured</span> network of</h1>
      <h1 className="ml-5">nodes by harvesting the</h1>
      <h1 className="ml-5">blockchain technologies in it's</h1>
      <h1 className="ml-5">entirety.</h1>
      </div>
      <img className="overflow-hidden ml-2 w-48 h-32" src="./images/gif1.png" alt="logo"></img>
      </div>


      <div className="flex mt-10">
      <img className="overflow-hidden ml-2 w-48 h-32" src="./images/gif2.png" alt="logo"></img>
     <div className="flex-col">
      <h1 className="ml-5"><span className="text-vii">Data storage</span> facility</h1>
      <h1 className="ml-5">provided by our</h1>
      <h1 className="ml-5">blockchain infused</h1>
      <h1 className="ml-5">database system will</h1>
      <h1 className="ml-5">be best in it's class</h1>
      </div>
      </div>


      <div className="flex mt-10">
     <div className="flex-col">
      <h1 className="ml-5"><span className="text-vii">Security</span> and <span className="text-vii">privacy</span> is</h1>
      <h1 className="ml-5">our top priority. To</h1>
      <h1 className="ml-5">achieve that our</h1>
      <h1 className="ml-5">technology is based on</h1>
      <h1 className="ml-5">rust, it is the best stack to</h1>
      <h1 className="ml-5">achieve security and </h1>
      <h1 className="ml-5">scalibilty together</h1>
      </div>
      <img className="overflow-hidden ml-2 w-48 h-32" src="./images/gif3.png" alt="logo"></img>
      </div>

      <div className="flex mt-10">
      <img className="overflow-hidden ml-2 w-48 h-32" src="./images/gif4.png" alt="logo"></img>
     <div className="flex-col">
      <h1 className="ml-5">Our blockchain is a</h1>
      <h1 className="ml-5">permissioned chain</h1>
      <h1 className="ml-5">and <span className="text-vii">You</span>, you will</h1>
      <h1 className="ml-5">be the king of your</h1>
      <h1 className="ml-5"> own data</h1>
      </div>
      </div>

      <div className="flex mt-10 mb-10">
     <div className="flex-col">
      <h1 className="ml-5">With permissioned nodes</h1>
      <h1 className="ml-5">mechanism and query</h1>
      <h1 className="ml-5">language - like syntax,</h1>
      <h1 className="ml-5">developers will be able to</h1>
      <h1 className="ml-5">build, store and deploy on</h1>
      <h1 className="ml-5">single blockchain</h1>
      <h1 className="ml-5">architecture easily</h1>
      </div>
      <img className="overflow-hidden ml-2 w-48 h-32" src="./images/gif5.png" alt="logo"></img>
      </div>
     </div>
     </div> 
     <h1 className="mt-20 text-4xl font-semibold text-center text-vii">Revolution</h1>
     <h1 className=" text-gray ml-10 mr-10 mt-10 mb-20 text-center">Our blockchain is a permissioned chain and You, yes you will be the king of your own data</h1>
    
     {/* <div className="container mx-auto px-4 py-8 mb-20">
     <div className='flex'>
      {cardsData.map(card => (
        <Card key={card.title} title={card.title} description={card.description} />
      ))}
    </div>
    </div> */}
    <div className="flex items-center justify-center flex-col">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1024: { // Added breakpoint for desktop view
            slidesPerView: 3, // Adjust number of slides as needed
            spaceBetween: 20, // Adjust space between slides as needed
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[90%]">
        {cardsData.map((card) => (
          <SwiperSlide key={card.title}>
            <div className="flex flex-col gap-6 mb-20 group relative shadow-lg rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden">
              <div
                className="absolute inset-0 bg-contain bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${card.backgroundImage})` }}
              />
              <div className="absolute inset-0  bg-black opacity-50" />
              <div className="relative flex flex-col gap-3 ml-5">
              
                <h1 className="text-xl lg:text-2xl ">{card.title} </h1>
                <p className="lg:text-[18px] text-[15px] justify-end">{card.description} </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    <div className="flex lala">
    <div className='ml-10 md:ml-40'>
    <h1 className='font-semibold'>Join The Blockchain Ecosystem Today</h1>
    <h1 className='text-gray font-thin mt-10 mb-10 text-sm mr-10'>Join our newsletter to be the first to know about the CryptoCrest development and interesting facts and latest news about the web3 and blockchain world !</h1>
    </div>
    <div>
    <button className="bg-vii px-2 rounded-xl py-2 w-24 h-10 mt-20 mr-10 md:mr-40" onClick={togglePopup}>Join us</button>
    </div>
    </div>
    <img className='ml-9 mt-10 md:ml-40' src="./images/logo.png" alt="logo"></img>
    <div className="flex justify-between mt-10 ml-10 md:ml-40 w-72 h-9 bg-blackish border-2 border-blackish rounded">
    <img src="./images/icon.png" alt="logo"></img>
    <input className=" text-white bg-transparent w-48 h-9 pt-4 pb-5" placeholder="Enter your email"></input>
    <button type="submit">
    <img className='pr-5' src="./images/icon1.png" alt="Submit" />
    </button>
    </div>
    <div className="flex justify-between mt-14 ml-10 mr-10 mb-20 md:mx-60">
    <a href='https://discord.gg/EeBU5yDE5'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAArVJREFUSEutV4t14kAMHLkSqASo5KASTCVJKglXCb5GPGft/2s7n30vgWdrJc1opF0EugQAzbfmql5v2FdOGvb6KF+7naaGHc9dMGKwfnvtzjGNYDYJJG7uIei530Dsgq153UCstHBNAntkUgkpQbyuMc68amFE5L3OVEDOVxATBJOITFtKXa0xySuAPwDOBrKYf5eG0wOAt+T5czF8AJgGkclrzJXXdFASOFaDnA+AvGywNEz6oHrpDLUsQbWK/CKDTGWtanEJwJn3xcv4XbkXKY0ioujtuPCqLp2TVNpePTzRftsi8X0s615RTZZovxTAjUClzWrC0R5Q+ymZBTa1JV7lWOlXs5BAozZRkzyKDEHttsZOVxFtI9RXgddJ3NJWzDVLfoI4B8QumPvQ/tX6n73PIhff3/pemTN0RBu+iww3v9cGjojzsR53XUREexNtVjgOMjyUOc5GnJ82SVdjx/diYyaBD2m+eDXXDNWZzuTLobdOdCUnK8m3ZYqZSVesoO6AmDOVIs20WHlgl2RkxrJiHUbmdIrp1EupVoVfBsdcyFQpXHyMNpNKSSHTmbwvNma4JPUbRQYzJAJz7akXBBbIqPu3BI4RYsSlh0Grj1QD2i4GabaifTtwRFwT/htPCNwGd7p1EO8ZGVW/bORm7JuIVVwqCqUzXdqff93xeCBwqHUQEvW2J6/qRAcqrqMek1k7JcK4A7zGo81sfYrYc5ikO5txWqj755J4JkV3PZzJT+uvaOPIrPixQ0DR69Go6PUvBE7tW/c17WECV3tngDLw4YdPubd75zHogJM/Tz1F6fTJR11oJ0360bwC9c5jm1XvZuly3ni97cLfUH7sqJeQc5x/GGDZjG3XL8ffqutaH7UxtX5JNCz3ENISaXXBCwdJFji/uKcXhLbTNJ0epX1N/AczeEo2GIp+PgAAAABJRU5ErkJggg==" /></a>
    <a href='https://github.com/Futics-Technologies'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAwxJREFUSEuNV+uZ4jAMHLmRg05IJQuVAJXAVgJXCakkukiWHfkVLj92+XDs0WNmZAjuIQDsv2g+2xvlv50d4xdlBdB1AoEN2IcwCmf8/naOHb2B5C8c8Cj3Mgjm5QTgYG//AfBXPjMwB6I559EcVyYQgb88zCxAVwAetN3FeINwIQugG4TtGgKn+Jj5AeCcUIQDpH88rv9CPz/BuFOgedyoAbkW5gMxHiDNMj8Npq000MAM8EQU5sgh3+8Ud8UlXrS0n3imEI7KLJu0R+Eo3rHX+4Jcrrwv66cgvy0pzXy3yjHQGVCSpUrNYEwUglQgV851KspjYRYS3Vx1hSxPXvi0viBrUo0UjJx1AOXvfonovTCfCHi5MG9EdN/OFCzfv8heLbHLbJLDesQfqV1VwPhUpx+13z1Wc5uthCAE6QL7YMyD1IiYlx7wkyhcMrCPegXOTbCMZ6JwrHuzb6tGSWapXDKahHdMGs+lNpPITFbCM24Uwr1x8C29XgcixbrVQ26bBxYWCpv9M+zvENG8ZYlkfFUqUKLKXg8s7vSo9JJLMwRqso/NSxUcAjvtRuCC5qK/ktGNBXpXcotqQmQmtKFnWX0r9YUoPHen9MAOO34gxZyCSbPWcc1qkVExbZqSd0pgRuTdT7cFIp0v2uNKTj0JFK6zvT+aOxD3O1PdNmAmomPHQFT4V5FQVBJkpB3Mwzpjzt9ANjvihR/rXgGuHr4RiTQt423V2LiwWJ0IX1xGLE4Il4xASi9+rJJIDzOfGbjGQC3Uis4rKPmrVRNYEr5NvuPKzB+7CCTwCwUd9GnMZunsaLsaEtU9wmWQev0mCpO/Z9XZpsIxLz1+yLL1tmxNkfGAaDIif+Ua07372qaF+eM4kXIoCOUr0nKg7J3PQvotB02eINwA2ypjprCxWCUUb9H5GrTTGjV7T5xhBuym0cqP26rZbfB3lLebccVctdNAdGnHokpRDOMtN43/0XoLbPXo/xpwIswW5H73dOyzKee3UjdDZ3SCj2U0QQbx5iO/l6g8+QtOnzu26R+3+pgwhXo62gAAAABJRU5ErkJggg=="/></a>
    <a href='https://twitter.com/YuvrajD95196596'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAApxJREFUSEuVV9GBrCAMTKzE18m+Tm4rUSvZu0rOTp6VOI8EkKhBlK89DBlmJgGOqTmYmEDQOCZKv/bLajE23sbETO7wIfaLy15StLPoNKUTkscMP+jI7cC5saiu0QO+IlCRvS58071k2hbXZlzbfx3qFmMAr1BHAzG9pJiiD+WXm95+roWCZmL6YebvnGPzGFh7Iv63S35KdGcTlzv5w8xLtCwNYB3CxBj/xHhR8A0LpfVKYt0GaExI78z6DBw3PHbMU+zde/6lLjm1+QoM4VsiRCN3PIl7nM0HMASIHCBo4scUpSnjsrwOHwH8EtHLLE/AfAks8QL614JfVn76CKAn0EeK9KDXyMyTzO0YB2nHpP03iL7M6bJ509Ie6/oiYmGaxxxZq/dq4QlYpRb9u45jsdEXEaTaJVZs+OmYl5r3AD5xzdaFyjDYmJcUxqWqi8chWJG0r4k+IOpTT89E/OaOF3tXqLREApqlFYtEJWEreQ7AO49LO2XguGjtQfzLoF6IBwsW3icVMCMtZhC/RZmN1ArpMFVt8/jEWKWOjO3IMprjIXZA6tE0r4mPBegyvpLaAR+06BL7w3epfpX2tM5jnBsfqy+1A66+hz4XX4XxQlz89O6senGJd6stri66mUaRrvxK0ostb7nY/ZdJTPC4qs/AnpBmroIfgbUKnhdXTO9kTlO1s7owbgHrcWaruvbOarA3n4ONkCtKGTuXhJw4UjQy7GWxewqka07J+zfv/s7ObZbzen0sVSoHgVZrAWhc/g3idnU4p5V3Nm1bCkBYyxkdW+XOcGg7U9LfU8c8b8DtB94d9DvVfnihXr0CvVvoaXzZ0q3/JO49Y72D5cj9aqNbe96DsxyuzivT97bXveKqnRFPoOqM91L/B0WPeTNTDZplAAAAAElFTkSuQmCC"/></a>
    <a href='https://www.linkedin.com/company/futics/?viewAsMember=true'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAs1JREFUSEuVV4Gxq0AIXKzEdJJ08lLJSypJOsnrJFYiXxAVhDP5zmQm4nkLy8IhYX8RAPbGaNju7F9a3353e0KQ19brcA9dJS+w+eVXF/YPfgXgOvqWOxFYaVLTZ/fnEHYXM/cA5DdTHlYkQ/K1MhDR357WRPU4Mmd3KicKiMIvNTEG6ui0T+t6z8xnAK/Ewhq45Jdko5oJb89OXDRyl/sSeHuPB4D6TPtXLPtF3wCvsE8iuo7MPTEeIJyNui1iW5rsBukCv3REf3OlhnIiMI+BaiIikyqY+XdS203vPVgGaFExRxyAjfddjgcAV1ksj0fmB4AflwKXaMu9h8w6uBB1q7olpLVRJXExBhCett+tLTojwfOdWXFU77W5qrqIIFHaquloTzkOqq6pFqjLRK9QLtevUD01F2HgbjZpNGK/S0qs+cijBxjntR/M6C7HVcSMl9PPiYgUmC3H0//bJDoFltSErrSwMnc/0YSIdbkKYB+xAetqxok6Ax5ZyknEdesMeNGHRKoOOsEws7Aj4EsVtHKcywnAiagb5M0QcUf35Uxwah+IcaVuLpncBTmqOlTAvmVqxAZcRKwAsbffiLq7HJ3SdAC8j6m2ot43kDniwxzvN9dOZxH3AL+djP6Xahp8A1FxGdWqYsbbqfdJnQGP3INixNoym4eEV7UXl6paBEOmatVEO2IF9hFXOTYvRimPeCzW4lJVe+B4qGxUFzm2KaXZMm2rA2BVboyYsVF9KK7dsFf06stUu7lzMe6WVwHWwcEclVJScdn49PItM5xOflwtVK1b6tThOkEYCg7HsPAwdq7W6VRPMc0DYI6xOKdTHS+q9hNpypnvLmnnbybO4MnaE9IEYq1xG2+Xpl/NwcGp41C1jc4zz3o1BvpiKG/N74kVMxTDvddTKKdtbfwk2T5b9j4vYXz39ZAjXopaFJz2iIYPjyOXlV+2wT8LYs82zanWyQAAAABJRU5ErkJggg=="/></a>
    <a href='https://www.instagram.com/futics.network/?next=%2F'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAyVJREFUSEuVVrtu1EAUPcc/wi4N/AENRSJRgRAUUJP0FHQgKLKRkCJRUdAnPTRB0NDsRjT8AtX6P5B88B3PeB4e725G2pU9vnPPnPsmZhYBKP7Nid1i3ykb5e1tfqWyt73EHvndwLe7FXAAWOB8EGNJC2clYhHvMmwMKz6T3NTvSxDy7gsnKyaVOgN5BeDI/yJAHTPFawFckTx3mxVLVBlLMrB10JTiRIL70QHYBU7ZcDPGlSeZAQfiUrcFOJp1Dlgw8yWm9oKFfEtymZs/nEt2JV32Nz1JBSfAE89mao2l/cxqYZnZT+NrHXjb+2cxB7YncUd26rQGceT1TFhPfCwpZvmEmVPjAgfAjf+8AHTmXROBJUfAy+wGLoOqTJX+fTVGau6ekAErQK1PFrtQknI4dqkWgivNpDrweHxFNudSdx/AS0APPcBvAF9J/u2tddZLr9x+GmjD8yHAQoxYR23DhsfqdE/AFwKPRsJOqX4JfE3gH4BLAUeVPB2A/Rq+e9qRcZ4X/duqIY3tB4AfZwLsPcmLgTVWmYxn3JCbasmcM7UrAuSV1P0E+HgG+DvJZzt05IyjjwmpyypWAuAOSfoh4Mm0QjtK1ySfS7IaYLWgXBVTh7SxUilY/qUxa0pdNEt6B+AiD9ZR9C3JT6WphxCoBFcGMdbovHwIaBtyKekugM8AnhZ0rgG8YcNWXbcVuPBgqdghwTWpHLbhyp4kq7svADzwUn8AfWvYtF0tsCL08a7gsr67LdtsKHuAriyXQxakdAy091AezblZlg3ZDuNU0Y9dwwes1O1aLYQNqBt//E5frU7SblY73McIs7afj2B91ZWsD4fi7nTsbxh7JVytLueNPNd3+2mQrTRoV+nm8c1Fp3HKDG0xuYo3t7H2c9Ykwj1AZb9yK5cRDZfJZOukZiYQ5+s1hEUlp0cL7TVwGH1cjU6iagyu8Q6xFXfSgn7Ymyn6ZZFJXTYOe+mct9PH4XTRLs0CyWg7H3JWWsuAHXTmsFVTl+lQV7Qn6Saf/Vzt96dtM3dFcdN5sLTZuME9FS1tbD4+mE3qrNR0EwU5s4ifC/4HZzeJMhuTWJQAAAAASUVORK5CYII="/></a>

    </div>
    </div>
  );
}

export default App;
