import React from "react";

export default function ActivationSettingHS() {
  return (
    <div className="px-7 py-5 w-full md:w-3/4 mx-auto">
      <div className="flex justify-between items-center flex-wrap gap-5">
        <div className="space-y-4">
          <section>
            <h1 className="text-2xl font-bold">Verify Account</h1>
            <p className="text-gray-500">Verify the account</p>
          </section>
          <button className="bg-orange px-5 py-2 text-white rounded-md">
            Verify Account
          </button>
        </div>
        <div className="space-y-4">
          <section>
            <h1 className="text-2xl font-bold">Activate Account</h1>
            <p className="text-gray-500">Activate the account</p>
          </section>
          <button className="bg-orange px-5 py-2 text-white rounded-md">
          Activate Account
          </button>
        </div>
        <div className="space-y-4">
          <section>
            <h1 className="text-2xl font-bold">Deactivate Account</h1>
            <p className="text-gray-500">Deactivate the account</p>
          </section>
          <button className="bg-orange px-5 py-2 text-white rounded-md">
          Deactivate Account
          </button>
        </div>
      </div>
    </div>
  );
}
