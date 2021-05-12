import fetch from "node-fetch";
import { logger } from "../log";

export type Checker<T> = (val: unknown) => val is T;

export async function GetJson<T>(url: string, checkers?: Checker<T>): Promise<T | null> {
  const log = logger("http.get_json.GetJson", { url });
  log.debug(`getting URL: ${url}`);
  const resp = await fetch(url);
  let respJson: unknown;

  log.debug(`checking if the code of this response is 200`);
  if (resp.ok) {
    log.debug("YES - parsing the response to a json");
    respJson = await resp.json();

    log.debug("checking the response type");
    if (!checkers || checkers(respJson)) {
      if (!checkers) log.warn("The checker was not defined. It is better to provide a checker for it.");
      else log.debug("Matched - returning the response");
      return respJson as T;
    } else log.debug("Unmatched.");
  } else log.debug("NO: not 200");

  log.error(
    [
      "Failed to fetch the response from the URL.",
      `URL: ${url}`,
      `Code: ${resp.status}`,
      `Response: ${JSON.stringify(respJson)}`,
    ].join("\n")
  );
  return null;
}
