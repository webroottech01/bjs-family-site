import TrustpilotReview from "./TrustpilotReview";
import { TRUSTPILOT_DISPLAY_COUNT } from './WhatCustomersThink';

const accessTokenUrl =
  "https://api.trustpilot.com/v1/oauth/oauth-business-users-for-applications/accesstoken";

const apiKey = "KzK63W3wEZA3TxqFTH2GZkya84O7gxAF";
const apiSecret = "sqb9U3oATsQk1nb3";
const businessUnitId = "5742cf130000ff00058d3d26";

async function getAccessToken(): Promise<string> {
  const body: Record<string, string> = {
    grant_type: "password",
    username: process.env.TRUSTPILOT_USERNAME!,
    password: process.env.TRUSTPILOT_PASSWORD!,
  };
  const encodedKeyAndSecret = btoa(`${apiKey}:${apiSecret}`);
  const response = await fetch(accessTokenUrl, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${encodedKeyAndSecret}`,
    },
    body: new URLSearchParams(body),
    method: "POST",
  });
  const json = await response.json();
  return json.access_token;
}

async function fetchReviews(): Promise<Response> {
  const headers = {
    apikey: apiKey,
  };
  const reviewsResponse = await fetch(
    `https://api.trustpilot.com/v1/business-units/${businessUnitId}/reviews?stars=5`,
    {
      headers,
    }
  );
  const json = await reviewsResponse.json();
  const reviewsJson = await json.reviews;

  const averageResponse = await fetch(
    `https://api.trustpilot.com/v1/business-units/${businessUnitId}`,
    { headers }
  );
  const averageJson = await averageResponse.json();
  const average = {
    total: averageJson.numberOfReviews.total,
    trustScore: averageJson.score.trustScore,
    starRating: averageJson.score.stars,
  };

  const allReviews : TrustpilotReview[] = reviewsJson.map(mapReview).slice(0, TRUSTPILOT_DISPLAY_COUNT);

  return { reviews: allReviews, average };
}

export interface AverageStats {
  total: number;
  trustScore: number;
  starRating: number;
}

export interface Response {
  reviews: TrustpilotReview[];
  average: AverageStats;
}

const mapReview = (input: any): TrustpilotReview => {
  return {
    reviewer: input.consumer.displayName,
    review: input.text,
    rating: input.stars,
    title: input.title,
    id: input.id,
  };
};

export default fetchReviews;
