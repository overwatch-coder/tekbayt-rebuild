import { sendEmail } from "../actions/contact-us.action";
import SubmitBtn from "./SubmitBtn";

const Form = () => {
  return (
    <form action={sendEmail} className="flex flex-col gap-5 w-full pb-10">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        {/* Full Name */}
        <div className="flex flex-col gap-5 w-full">
          <label
            className="font-medium text-base tracking-wide text-black-80"
            htmlFor="fullName"
          >
            Full Name
          </label>
          <input
            type="text"
            placeholder="e.g John Doe"
            className="rounded px-5 py-2 w-full border border-black-60 focus:border-black-80 focus:border-2 valid:border-green-500 valid:border-2"
            required
            name="fullName"
          />
        </div>

        {/* Company Name */}
        <div className="flex flex-col gap-5 w-full">
          <label
            className="font-medium text-base tracking-wide text-black-80"
            htmlFor="companyName"
          >
            Company Name
          </label>
          <input
            type="text"
            placeholder="e.g Tekbayt Inc Ltd"
            className="rounded px-5 py-2 w-full border border-black-60 focus:border-black-80 focus:border-2 valid:border-green-500 valid:border-2"
            required
            name="companyName"
          />
        </div>
      </div>

      <div className="flex flex-col gap-5 w-full lg:flex-row lg:items-center lg:justify-between">
        {/* Email */}
        <div className="flex flex-col gap-5 w-full">
          <label
            className="font-medium text-base tracking-wide text-black-80"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            placeholder="e.g johndoe@tekbayt.com"
            className="rounded px-5 py-2 w-full border border-black-60 focus:border-black-80 focus:border-2 valid:border-green-500 valid:border-2"
            required
            name="email"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-5 w-full">
          <label
            className="font-medium text-base tracking-wide text-black-80"
            htmlFor="phone"
          >
            Phone Number
          </label>

          <input
            type="tel"
            id="phone"
            name="phone"
            pattern="\+[0-9]{3}\s?[0-9]{9}"
            placeholder="+234 456789450"
            required
            className="rounded px-5 py-2 w-full border border-black-60 focus:border-black-80 focus:border-2 valid:border-green-500 valid:border-2"
          />
        </div>
      </div>

      {/* Comment */}
      <div className="flex flex-col gap-5 w-full">
        <label
          className="font-medium text-base tracking-wide text-black-80"
          htmlFor="comment"
        >
          What can we help you with?
        </label>

        <textarea
          required
          className="rounded px-5 py-2 w-full border border-black-60 focus:border-black-80 focus:border-2 valid:border-green-500 valid:border-2"
          name="comment"
          placeholder="your message"
          cols={30}
          rows={10}
        />
      </div>

      {/* Hear from Us */}
      <div className="flex flex-col gap-5 w-full">
        <label
          className="font-medium text-base tracking-wide text-black-80"
          htmlFor="hearAboutUs"
        >
          How did you hear about us ?
        </label>

        <select
          name="hearAboutUs"
          className="rounded px-5 py-2 w-full border border-black-60 focus:border-black-80 focus:border-2 valid:border-green-500 valid:border-2"
          required
        >
          <option disabled selected value={""}>
            Kindly choose one
          </option>
          <option value="internet">Internet</option>
          <option value="social media">Social Media</option>
          <option value="relatives">Family and Friends</option>
          <option value="tekbayt website">Tekbayt Website</option>
          <option value="other">Other</option>
        </select>
      </div>

      <SubmitBtn
        buttonName="Submit"
        pendingText="please wait..."
        className="uppercase w-full bg-orange-100"
      />
    </form>
  );
};

export default Form;
