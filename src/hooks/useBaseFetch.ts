import { $fetch } from "ohmyfetch";

import { BASE_URL } from "@/lib/config";

export default function (isJson = true) {
  const headers = { Accept: "application/json" };
  if (isJson) {
    headers["Content-Type"] = "application/json";
  } else {
    headers["enctype"] = "multipart/form-data;";
    headers["Access-Control-Allow-Origin"] = "*";
    headers["Access-Control-Allow-Method"] = "POST, GET, OPTIONS, PUT";
    headers["Access-Control-Allow-Headers"] =
      "Authorization, Origin, Content-Type, X-CSRF-Token";
  }

  return $fetch.create({
    baseURL: BASE_URL,
    credentials: "include",
    headers,
  });
}
