import { currentUser } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";
import ProfileForm from "@/components/ProfileForm";
import Link from "next/link";


export default async function DashboardPage() {

  const user = await currentUser();


  const profile = user?.publicMetadata as {
    membership?: string;
    goal?: string;
    level?: string;
    preference?: string;
  };



  return (

    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-red-950 to-black text-white">


      <div className="max-w-6xl mx-auto px-6 py-10">



        {/* HEADER */}

        <div className="flex justify-between items-center mb-10">


          <div>
<Link
  href="/"
  className="inline-flex items-center gap-2 mt-5 text-gray-300 hover:text-white transition group"
>
  <span className="text-xl group-hover:-translate-x-1 transition">
    ←
  </span>

  Back to Home
</Link>
            <h1 className="text-4xl font-extrabold">

              Motion
              <span className="text-red-500">
                Studio
              </span>

              {" "}Member Portal

            </h1>


            <p className="text-gray-400 mt-3">

              Welcome back,{" "}

              <span className="text-red-400 font-semibold">

                {user?.firstName ?? "Member"}

              </span>

              {" "}👋

            </p>


          </div>



          <UserButton />


        </div>





        {/* USER + MEMBERSHIP */}

        <div className="grid lg:grid-cols-2 gap-8">





          {/* MEMBER INFORMATION */}

          <section className="bg-black/40 backdrop-blur-lg border border-red-500/20 rounded-3xl p-8">


            <h2 className="text-2xl font-bold mb-6">

              👤 Member Information

            </h2>



            <div className="space-y-5">


              <div>

                <p className="text-gray-400 text-sm">
                  Full Name
                </p>

                <p className="text-xl font-semibold">

                  {user?.fullName ?? "Not Available"}

                </p>

              </div>




              <div>

                <p className="text-gray-400 text-sm">
                  Email
                </p>

                <p>

                  {user?.emailAddresses[0]?.emailAddress}

                </p>

              </div>




              <div>

                <p className="text-gray-400 text-sm">
                  Member ID
                </p>


                <p className="text-sm text-red-300 break-all">

                  {user?.id}

                </p>


              </div>



              <div>

                <p className="text-gray-400 text-sm">
                  Account Status
                </p>


                <p className="text-green-400 font-semibold">

                  Verified Member ✅

                </p>


              </div>



            </div>


          </section>







          {/* FITNESS DETAILS */}

          <section className="bg-black/40 backdrop-blur-lg border border-red-500/20 rounded-3xl p-8">


            <h2 className="text-2xl font-bold mb-6">

              🏋️ Fitness Membership

            </h2>



            <div className="space-y-5">



              <InfoCard

                title="Membership Plan"

                value={
                  profile.membership ??
                  "Not Selected"
                }

              />



              <InfoCard

                title="Fitness Goal"

                value={
                  profile.goal ??
                  "Not Selected"
                }

              />



              <InfoCard

                title="Experience Level"

                value={
                  profile.level ??
                  "Not Selected"
                }

              />



              <InfoCard

                title="Workout Preference"

                value={
                  profile.preference ??
                  "Not Selected"
                }

              />


            </div>



          </section>




        </div>







        {/* AUTH STATUS */}


        <section className="mt-8 bg-black/40 backdrop-blur-lg border border-red-500/20 rounded-3xl p-8">


          <h2 className="text-2xl font-bold mb-5">

            🛡️ Security & Access

          </h2>



          <div className="grid md:grid-cols-3 gap-5">


            <StatusCard

              title="Authentication"

              value="Secure 🔒"

            />



            <StatusCard

              title="Session"

              value="Active ✅"

            />



            <StatusCard

              title="Dashboard"

              value="Protected 🛡️"

            />


          </div>



        </section>







        {/* PROFILE UPDATE */}


        <ProfileForm profile={profile} />





      </div>


    </main>

  );

}







function InfoCard({

  title,

  value,

}: {

  title:string;

  value:string;

}) {


  return (

    <div className="flex justify-between border-b border-white/10 pb-3">


      <span className="text-gray-300">

        {title}

      </span>


      <span className="text-red-400 font-semibold">

        {value}

      </span>


    </div>

  );

}






function StatusCard({

  title,

  value,

}: {

  title:string;

  value:string;

}) {


  return (

    <div className="border border-white/10 rounded-xl p-5">


      <p className="text-gray-400">

        {title}

      </p>


      <p className="text-green-400 font-semibold mt-2">

        {value}

      </p>


    </div>

  );

}