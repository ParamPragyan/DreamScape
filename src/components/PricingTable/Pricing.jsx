import React from "react";
import "./Pricing.css";
import check from "../../assets/check.png"

const Pricing = () => {
  return (
    <section class="pricing-plans p-[10rem]">
      <div class="pricing-card basic">
        <div class="heading">
          <h4>Creative Hourly</h4>
          <p className="font-bold">Hourly Plan</p>
        </div>
        <p class="price">
          299/-
          <sub  >/hour</sub>
        </p>
        <ul class="feature">
        <li className="flex">
           <img className="w-[3rem]" src={check} alt="" />
            <strong>Basic access</strong>
          </li>
          <li className="flex">
           <img className="w-[3rem]" src={check} alt="" />
            <strong>High-speed internet</strong>
          </li>
          <li className="flex">
           <img className="w-[3rem]" src={check} alt="" />
            <strong>Secure storage</strong>
          </li>
          <li className="flex">
           <img className="w-[3rem]" src={check} alt="" />
            <strong>Basic editing</strong>
          </li>
          <li className="flex">
           <img className="w-[3rem]" src={check} alt="" />
            <strong>Technical support</strong> 
          </li>
          <li className="flex">
           <img className="w-[3rem]" src={check} alt="" />
            <strong>Collaboration tools</strong> 
          </li>
          <li className="flex">
           <img className="w-[3rem]" src={check} alt="" />
            <strong>Props available</strong> 
          </li>
          <li className="flex">
           <img className="w-[3rem]" src={check} alt="" />
            <strong>Free beverages</strong>
          </li>
        </ul>
        <button class="cta-btn">SELECT</button>
      </div>
      <div class="pricing-card standard">
        <div class="heading">
          <h4>Creative Daily</h4>
          <p>Daily Plan</p>
        </div>
        <p class="price">
          1999/-
          <sub>Day</sub>
        </p>
        <ul class="feature">
        <li className="flex">
           <img className="w-[3rem]" src={check} alt="" />
            <strong>Exclusive access</strong> 
          </li>
          <li className="flex">
           <img className="w-[3rem]" src={check} alt="" />
            <strong>High-speed internet</strong> 
          </li>
          <li className="flex">
           <img className="w-[3rem]" src={check} alt="" />
            <strong>Equipment storage</strong>
          </li>
          <li className="flex">
           <img className="w-[3rem]" src={check} alt="" />
            <strong>Advance editing</strong>
          </li>
          <li className="flex">
           <img className="w-[3rem]" src={check} alt="" />
            <strong>High Technical assistance</strong> 
          </li>
          <li className="flex">
           <img className="w-[3rem]" src={check} alt="" />
            <strong>Collaboration tools</strong> 
          </li>
          <li className="flex">
           <img className="w-[3rem]" src={check} alt="" />
            <strong>Props available</strong> 
          </li>
          <li className="flex">
           <img className="w-[3rem]" src={check} alt="" />
            <strong>meals(2 times)</strong>
          </li>
        </ul>
        <button class="cta-btn">SELECT</button>
      </div>
      <div class="pricing-card premium">
        <div class="heading">
          <h4>Creative Monthly</h4>
          <p>Monthly Plan</p>
        </div>
        <p class="price">
          29,999/-
          <sub>/month</sub>
        </p>
        <ul class="feature">
        <li className="flex">
           <img className="w-[3rem]" src={check} alt="" />
            <strong>Unlimited access</strong>
          </li>
          <li className="flex">
           <img className="w-[3rem]" src={check} alt="" />
            <strong>High-speed internet</strong>
          </li>
          
          <li className="flex">
           <img className="w-[3rem]" src={check} alt="" />
            <strong>Exclusive environment</strong>
          </li>
          <li className="flex">
           <img className="w-[3rem]" src={check} alt="" />
            <strong>Comprehensive support</strong> 
          </li>
          <li className="flex">
           <img className="w-[3rem]" src={check} alt="" />
            <strong>Collaboration tools</strong> 
          </li>
          <li className="flex">
           <img className="w-[3rem]" src={check} alt="" />
            <strong>Props available</strong> 
          </li>
          <li className="flex">
           <img className="w-[3rem]" src={check} alt="" />
            <strong>Free Software</strong>
          </li>
          <li className="flex">
           <img className="w-[3rem]" src={check} alt="" />
            <strong>2 meals a day</strong>
          </li>
        </ul>
        <button class="cta-btn">SELECT</button>
      </div>
    </section>
  );
};

export default Pricing;
