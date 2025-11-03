import { NextResponse } from "next/server";

export async function POST(request) {
  const { imageUrl } = await request.json();

  const PAT = process.env.CLARIFAI_API_KEY;
  const USER_ID = "clarifai";
  const APP_ID = "main";
  const MODEL_ID = "face-detection";

  const raw = JSON.stringify({
    user_app_id: {
      user_id: USER_ID,
      app_id: APP_ID,
    },
    inputs: [
      {
        data: {
          image: {
            url: imageUrl,
          },
        },
      },
    ],
  });

  const requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: "Key " + PAT,
    },
    body: raw,
  };

  try {
    const response = await fetch(
      `https://api.clarifai.com/v2/models/${MODEL_ID}/outputs`,
      requestOptions
    );
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Clarifai API error", error);
    return NextResponse.json(
      { error: "Failed to fetch from Clarifai API" },
      { status: 500 }
    );
  }
}
