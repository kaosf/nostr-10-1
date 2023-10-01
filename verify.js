import { DateTime } from "luxon";
import { validateEvent, verifySignature } from "nostr-tools";
import { readFileSync } from "fs";

for (let year = 2023; year <= 2140; year++) {
  const event = JSON.parse(readFileSync(`archives/${year}.json`, "utf-8"));
  if (!validateEvent(event)) {
    console.error(year, "validateEvent failed");
    process.exit(1);
  }
  if (!verifySignature(event)) {
    console.error(year, "verifySignature failed");
    process.exit(1);
  }
  if (event.pubkey !== "e7bf3c533096433605f206166619c31330bd57f0d05b28599672d0cbf5f2aecf") {
    console.error(year, "wrong pubkey");
    process.exit(1);
  }
  if (event.kind !== 1) {
    console.error(year, "kind is not 1");
    process.exit(1);
  }
  if (event.tags.length !== 0) {
    console.error(year, "tags is not empty");
    process.exit(1);
  }
  if (event.content !== "今日は天下一品の日です。") {
    console.error(year, "wrong content");
    process.exit(1);
  }
  const createdAt = DateTime.fromSeconds(event.created_at).setZone("Asia/Tokyo");
  if (createdAt.year !== year) {
    console.error(year, "wrong year");
    process.exit(1);
  }
  if (
    createdAt.month !== 10 ||
    createdAt.day !== 1 ||
    createdAt.hour !== 9 ||
    createdAt.minute !== 0 ||
    createdAt.second !== 0
  ) {
    console.error(year, "wrong month/day/time");
    process.exit(1);
  }
  console.log(year, "OK");
}
