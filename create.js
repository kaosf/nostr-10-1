import { DateTime } from "luxon";
import { finishEvent } from "nostr-tools";
import { existsSync, readFileSync, writeFileSync } from "fs";

const privKey = readFileSync("config/nsec.txt", "utf-8").trim();
for (let year = 2024; year <= 2140; year++) {
  if (existsSync(`archives/${year}.json`)) continue;
  const created_at = DateTime.fromISO(`${year}-10-01T09:00:00+09:00`).toUnixInteger();
  const event = finishEvent(
    {
      kind: 1,
      created_at,
      tags: [],
      content: "今日は天下一品の日です。",
    },
    privKey,
  );
  writeFileSync(`archives/${year}.json`, JSON.stringify(event, null, "  "));
}
