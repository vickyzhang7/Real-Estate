import React, { useState } from 'react';

const Contact = () => {
  // Initial default state for form data
  const initialFormState = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    companyName: '',
    propertyInterest: 'Residential', // Default value for the dropdown
    message: '',
  };

  // Create state to store form data
  const [formData, setFormData] = useState(initialFormState);

  // Create state to control success message display
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  // Update form state when input fields change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission and reset form to initial state
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    // Here we can add code to save the data, e.g., send it to a backend server
    setSubmissionSuccess(true); // Set success state to true
    setFormData(initialFormState); // ***Reset form to initial state
  };

  return (
    <div className="relative rounded-xl bg-primary-white w-full h-[768px] overflow-hidden text-left text-base text-black font-label-small14sb">
      <img
        className="absolute top-[calc(50%_-_320px)] left-[64px] rounded-xl w-[554px] h-[640px] object-cover"
        alt=""
        src="/landing/launchPhoto.png"
      />
      <div className="absolute top-[65px] left-[688px] w-[547px] h-[558px] flex flex-col items-start justify-start gap-[24px]">
        <div className="font-medium font-['Poppins']">{`Contact Us`}</div>

        <form onSubmit={handleSubmit}>
          <div className="relative w-[484px] h-[72px] flex justify-between">
            <div className="w-[234px] h-[72px]">
              <div className="font-medium">First Name</div>
              <input
                type="text"
                name="firstName"
                placeholder="Enter your first name"
                className="rounded-lg bg-primary-white box-border border-[1px] border-solid border-dimgray-600 w-full h-[44px] p-2"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="w-[234px] h-[72px]">
              <div className="font-medium">Last Name</div>
              <input
                type="text"
                name="lastName"
                placeholder="Enter your last name"
                className="rounded-lg bg-primary-white box-border border-[1px] border-solid border-dimgray-600 w-full h-[44px] p-2"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          
          <div className="relative w-[484px] h-[72px]">
            <div className="font-medium">Phone Number</div>
            <input
                type="text"
                name="phoneNumber"
                placeholder="Enter your phone number"
                className="rounded-lg bg-primary-white box-border border-[1px] border-solid border-dimgray-600 w-full h-[44px] p-2"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
          </div>
          
          <div className="relative w-[484px] h-[75px] flex justify-between">
            <div className="w-[234px] h-[72px]">
              <div className="font-medium">Company Name</div>
              <input
                type="text"
                name="companyName"
                placeholder="Enter your company name"
                className="rounded-lg bg-primary-white box-border border-[1px] border-solid border-dimgray-600 w-full h-[44px] p-2"
                value={formData.companyName}
                onChange={handleChange}
              />
            </div>
            
            <div className="w-[234px] h-[72px]">
              <div className="font-medium">Property Interest</div>
              <select
                name="propertyInterest"
                className="rounded-lg bg-primary-white box-border border-[1px] border-solid border-dimgray-600 w-full h-[44px] p-2"
                value={formData.propertyInterest}
                onChange={handleChange}
              >
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
              </select>
            </div>
          </div>

          <div className="relative w-[484px] h-[74px]">
            <div className="font-medium">Message</div>
            <textarea
                name="message"
                placeholder="Enter your message"
                className="rounded-lg bg-primary-white box-border border-[1px] border-solid border-dimgray-600 w-full h-[60px] p-2"
                value={formData.message}
                onChange={handleChange}
              />
          </div>

          <div className="flex flex-col justify-center ">
            <button
              type="submit"
              className="rounded-lg bg-blue-500 text-white px-20 py-3 mt-8 mb-8"
            >
              Submit
            </button>
            {/* Show success message after form submission */}
            {submissionSuccess && (
            <div className="mt-4 text-green-500">Your message has been submitted successfully!</div>
            )}
          </div>
        </form>

        
      </div>
    </div>
  );
};

export default Contact;
