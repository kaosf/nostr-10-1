import { DateTime } from "luxon";
import "websocket-polyfill";
import { SimplePool } from "nostr-tools";
import { readFileSync } from "fs";

console.log(new Date(), "Launched");

const year = DateTime.now().year;
const event = JSON.parse(readFileSync(`archives/${year}.json`, "utf-8"));
console.log(new Date(), "Event:", event);
// process.exit(0); // For checking the event JSON.

const pool = new SimplePool();
const relays = ["wss://yabu.me", "wss://relay-jp.nostr.wirednet.jp", "wss://nrelay.c-stellar.net"];
await Promise.race([
  new Promise((resolve) => {
    Promise.allSettled(pool.publish(relays, event)).then((_results) => {
      resolve();
    });
  }),
  new Promise((resolve) => {
    setTimeout(
      () => {
        console.log(new Date(), "Timeout!");
        resolve();
      },
      1 * 60 * 1000,
    );
  }),
]);

console.log(new Date(), "Done");

/*
Respect: https://twitter.com/10_1
Icon source: https://pbs.twimg.com/profile_images/61049077/ten1_400x400.png
SHA256 checksum of ten1_400x400.png: eca0f1ddf82e6a5328d888a913cc644d51e753f4ebc7c7da6e26d1d593c03b64
Uploaded: https://image.nostr.build/eca0f1ddf82e6a5328d888a913cc644d51e753f4ebc7c7da6e26d1d593c03b64.png
SHA256 checksum of eca...b64.png: 15207d0daa1d1860911225cdb5b0a01706bfd614b9cea2d77884d4ec9a201da5

Public key:
npub1u7lnc5esjepnvp0jqctxvxwrzvct64ls6pdjskvkwtgvha0j4m8s8p5y22
e7bf3c533096433605f206166619c31330bd57f0d05b28599672d0cbf5f2aecf
*/
