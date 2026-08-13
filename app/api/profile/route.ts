import { auth, clerkClient } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";


export async function POST(req: Request) {

  try {

    const { userId } = await auth();


    if (!userId) {

      return NextResponse.json(
        {
          message: "Unauthorized"
        },
        {
          status: 401
        }
      );

    }



    const body = await req.json();


    const {
      membership,
      goal,
      level,
      preference
    } = body;



    const client = await clerkClient();



    await client.users.updateUserMetadata(
      userId,
      {
        publicMetadata: {
          membership,
          goal,
          level,
          preference
        }
      }
    );



    return NextResponse.json(
      {
        message: "Profile updated"
      },
      {
        status: 200
      }
    );


  } catch(error) {


    console.error(error);


    return NextResponse.json(
      {
        message: "Server error"
      },
      {
        status: 500
      }
    );


  }

}