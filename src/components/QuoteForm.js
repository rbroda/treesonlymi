import React from "react";
import emailjs from "emailjs-com";

const QuoteForm = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ge1kacr",
        "template_xy3o8vq",
        e.target,
        "user_XIgnjJOe0bEreE5jjQXgB"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="h-screen flex bg-gray-bg1">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
        <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
          Request a Quote
        </h1>

        <form onSubmit={sendEmail}>
          <div>
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="fullName"
              placeholder="Jane Doe"
              name="fullName"
            />
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone</label>
            <input
              type="tel"
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="phoneNumber"
              placeholder="734-999-8319"
              name="phoneNumber"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="email"
              placeholder="JaneDoe@email.com"
              name="email"
            />
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="address"
              placeholder="123 Tree Ln, Pine City, MI 48484"
              name="address"
            />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <textarea
              className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
              rows="5"
              placeholder="Large pine tree in the corner of the yard. Power lines by tree. Easy yard access."
              name="description"
            />
          </div>

          <div className="flex justify-center items-center mt-6">
            <button
              type="submit"
              className={`bg-black py-2 px-4 text-sm text-white rounded border`}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuoteForm;
