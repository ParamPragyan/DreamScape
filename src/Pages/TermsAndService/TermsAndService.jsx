import React from "react";
import "./TermsAndService.scss";

import { useEffect } from "react";
import Pricing from "../../components/PricingTable/Pricing";
import AskedQuestions from "../../components/QuestionPannel/AskedQuestions";


// Particles js Configuration file
import particles from "../../particlesjs-config";

function TermsAndService(props) {
  useEffect(() => {
    tsParticles.load("particles", particles);
  });
  return (
    <>
      <div className="tos">
        <div></div>
        <div
          className="tos__header padding flex items-center justify-center"
          id="particles"
        >
          <h1 className="tos__header__heading ">Terms of Service</h1>
        </div>
        <div>
          <div className="text-white flex items-center justify-center">
            <div className="mt-[5rem]">
			<ol class="  text-left">
            <li className="py-11">
                <h2 class="text-5xl font-semibold uppercase  bg-[#ec3737] text-black rounded-2xl p-8 my-11">Booking and Usage</h2>
                <ul class="list-disc list-inside text-[#cbcbcb] ml-4 space-y-4 gap-5 tracking-wide text-3xl">
                    <li>Users must book studio sessions in advance.</li>
                    <li>Hourly bookings require a minimum of 2 hours.</li>
                    <li>The studio is accessible during specified hours.</li>
                </ul>
            </li>
            <li>
                <h2 class="text-5xl font-semibold uppercase bg-[#ec3737] text-black rounded-2xl p-8 my-11">Cancellation and Refunds</h2>
                <ul class="list-disc list-inside text-[#cbcbcb] ml-4 space-y-4 gap-5 tracking-wide text-3xl">
                    <li>Cancellations must be made at least 24 hours in advance.</li>
                    <li>Refunds are provided for cancellations within the specified timeframe.</li>
                </ul>
            </li>
            <li>
                <h2 class="text-5xl font-semibold uppercase bg-[#ec3737] text-black rounded-2xl p-8 my-11">Equipment and Facilities</h2>
                <ul class="list-disc list-inside text-[#cbcbcb] ml-4 space-y-4 gap-5 tracking-wide text-3xl">
                    <li>Users are responsible for equipment during use.</li>
                    <li>Any damage to equipment or facilities will be charged to the user.</li>
                </ul>
            </li>
            <li>
                <h2 class="text-5xl font-semibold uppercase bg-[#ec3737] text-black rounded-2xl p-8 my-11">Conduct</h2>
                <ul class="list-disc list-inside text-[#cbcbcb] ml-4 space-y-4 gap-5 tracking-wide text-3xl">
                    <li>Respectful behavior is expected from all users.</li>
                    <li>Any disruptive conduct may result in immediate eviction.</li>
                </ul>
            </li>
            <li>
                <h2 class="text-5xl font-semibold uppercase bg-[#ec3737] text-black rounded-2xl p-8 my-11">Privacy and Data</h2>
                <ul class="list-disc list-inside text-[#cbcbcb] ml-4 space-y-4 gap-5 tracking-wide text-3xl">
                    <li>User data is protected and used only for studio operations.</li>
                    <li>Privacy policies apply to user information.</li>
                </ul>
            </li>
            <li>
                <h2 class="text-5xl font-semibold uppercase bg-[#ec3737] text-black rounded-2xl p-8 my-11">Payments</h2>
                <ul class="list-disc list-inside text-[#cbcbcb] ml-4 space-y-4 gap-5 tracking-wide text-3xl">
                    <li>Payments are due at the time of booking.</li>
                    <li>Monthly subscriptions auto-renew unless canceled.</li>
                </ul>
            </li>
            <li>
                <h2 class="text-5xl font-semibold uppercase bg-[#ec3737] text-black rounded-2xl p-8 my-11">Safety and Security</h2>
                <ul class="list-disc list-inside text-[#cbcbcb] ml-4 space-y-4 gap-5 tracking-wide text-3xl">
                    <li>Safety guidelines must be followed at all times.</li>
                    <li>Security measures are in place for user safety.</li>
                </ul>
            </li>
            <li>
                <h2 class="text-5xl font-semibold uppercase bg-[#ec3737] text-black rounded-2xl p-8 my-11">Membership</h2>
                <ul class="list-disc list-inside text-[#cbcbcb] ml-4 space-y-4 gap-5 tracking-wide text-3xl">
                    <li>Membership benefits may change over time.</li>
                    <li>Users can upgrade, downgrade, or cancel memberships.</li>
                </ul>
            </li>
            <li>
                <h2 class="text-5xl font-semibold uppercase bg-[#ec3737] text-black rounded-2xl p-8 my-11">Termination</h2>
                <ul class="list-disc list-inside text-[#cbcbcb] ml-4 space-y-4 gap-5 tracking-wide text-3xl">
                    <li>DreamScape STUDIO reserves the right to terminate user access for violations of terms.</li>
                </ul>
            </li>
            <li>
                <h2 class="text-5xl font-semibold uppercase bg-[#ec3737] text-black rounded-2xl p-8 my-11">Feedback and Concerns</h2>
                <ul class="list-disc list-inside text-[#cbcbcb] ml-4 space-y-4 gap-5 tracking-wide text-3xl">
                    <li>Users are encouraged to provide feedback and report concerns.</li>
                    <li>Concerns will be addressed promptly.</li>
                </ul>
            </li>
        </ol>
        <p class="mt-20 text-4xl text-gray-600">
            Please note that these terms are subject to change, and users are encouraged to review them regularly.
        </p>

            </div>

          </div>
          <div className="pp">
            <Pricing />
          </div>
        </div>
      </div>
    </>
  );
}
import "./TermsAndService.scss";

export default TermsAndService;
