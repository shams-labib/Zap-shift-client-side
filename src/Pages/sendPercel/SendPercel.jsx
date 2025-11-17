import React from "react";
import { useForm } from "react-hook-form";

const SendPercel = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSendSubmit = (data) => {};

  return (
    <div>
      <h2 className="text-2xl font-bold">Send a parcel</h2>
      <form onSubmit={handleSubmit(handleSendSubmit)}>
        {/* Document */}
        <div></div>
        {/* parcel info name, weight */}
        <div></div>
        {/* Two column section */}
        <div>
          {/* Sender Info */}
          <div></div>
          {/* Receiver Info */}
          <div></div>
        </div>
      </form>
    </div>
  );
};

export default SendPercel;
