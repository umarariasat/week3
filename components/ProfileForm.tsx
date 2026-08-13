"use client";

import { useState } from "react";

interface ProfileFormProps {
  profile?: {
    membership?: string;
    goal?: string;
    level?: string;
    preference?: string;
  };
}

export default function ProfileForm({ profile }: ProfileFormProps) {

  const [membership, setMembership] = useState(
    profile?.membership ?? ""
  );

  const [goal, setGoal] = useState(
    profile?.goal ?? ""
  );

  const [level, setLevel] = useState(
    profile?.level ?? ""
  );

  const [preference, setPreference] = useState(
    profile?.preference ?? ""
  );

  const [message, setMessage] = useState("");

  const isUpdate = Boolean(
    profile?.membership ||
    profile?.goal ||
    profile?.level ||
    profile?.preference
  );


  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {

    e.preventDefault();

    setMessage("Saving changes...");


    try {

      const response = await fetch("/api/profile", {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          membership,
          goal,
          level,
          preference,
        }),

      });



      if (response.ok) {

        setMessage(
          "Profile updated successfully ✅"
        );

      } else {

        setMessage(
          "Failed to update profile ❌"
        );

      }


    } catch (error) {

      console.error(error);

      setMessage(
        "Something went wrong ❌"
      );

    }

  }



  return (

    <div className="mt-10 bg-black/40 backdrop-blur-lg border border-red-500/20 rounded-3xl p-8">


      <h2 className="text-2xl font-bold mb-6">
        🏋️ {isUpdate 
          ? "Update Fitness Profile" 
          : "Create Fitness Profile"}
      </h2>



      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >


        {/* Membership */}

        <div>

          <label className="block text-gray-300 mb-2">
            Membership Plan
          </label>


          <select
            value={membership}
            onChange={(e) =>
              setMembership(e.target.value)
            }
            className="w-full bg-black border border-white/20 rounded-xl p-3"
          >

            <option value="">
              Select Membership
            </option>

            <option value="Basic">
              Basic Member
            </option>

            <option value="Premium">
              Premium Member
            </option>

            <option value="VIP">
              VIP Member
            </option>

          </select>

        </div>




        {/* Fitness Goal */}

        <div>

          <label className="block text-gray-300 mb-2">
            Fitness Goal
          </label>


          <select
            value={goal}
            onChange={(e) =>
              setGoal(e.target.value)
            }
            className="w-full bg-black border border-white/20 rounded-xl p-3"
          >

            <option value="">
              Select Goal
            </option>

            <option value="Weight Loss">
              Weight Loss
            </option>

            <option value="Muscle Gain">
              Muscle Gain
            </option>

            <option value="General Fitness">
              General Fitness
            </option>

          </select>

        </div>




        {/* Experience Level */}

        <div>

          <label className="block text-gray-300 mb-2">
            Experience Level
          </label>


          <select
            value={level}
            onChange={(e) =>
              setLevel(e.target.value)
            }
            className="w-full bg-black border border-white/20 rounded-xl p-3"
          >

            <option value="">
              Select Level
            </option>

            <option value="Beginner">
              Beginner
            </option>

            <option value="Intermediate">
              Intermediate
            </option>

            <option value="Advanced">
              Advanced
            </option>

          </select>

        </div>




        {/* Workout Preference */}

        <div>

          <label className="block text-gray-300 mb-2">
            Workout Preference
          </label>


          <select
            value={preference}
            onChange={(e) =>
              setPreference(e.target.value)
            }
            className="w-full bg-black border border-white/20 rounded-xl p-3"
          >

            <option value="">
              Select Workout Type
            </option>

            <option value="Strength Training">
              Strength Training
            </option>

            <option value="Cardio">
              Cardio
            </option>

            <option value="HIIT">
              HIIT
            </option>

            <option value="Yoga">
              Yoga
            </option>

          </select>

        </div>




        {/* Save Button */}

        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-xl font-semibold transition"
        >

          {isUpdate
            ? "Update Profile"
            : "Create Profile"}

        </button>




        {message && (

          <p className="text-center text-red-300">
            {message}
          </p>

        )}


      </form>


    </div>

  );
}